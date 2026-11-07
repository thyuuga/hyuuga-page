import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
const roomCode = script.slice(script.indexOf('let atmosphereSwapRevision ='));
const html = readFileSync(new URL('../mio/about/index.html', import.meta.url), 'utf8');
const sources = [...html.matchAll(/data-atmosphere-src="([^"]+)"/g)].map(match => match[1]);
const tick = async () => { for (let i = 0; i < 5; i++) await Promise.resolve(); };

function room({ hidden = false, reduced = false, delayed = false, fineHover = true } = {}) {
  const intervals = new Map(), timers = new Map(), listeners = {}, pending = [], animations = [];
  let id = 0, now = 0;
  const target = () => ({ events: {}, addEventListener(name, fn) { this.events[name] = fn; } });
  const panel = { hidden }, attrs = { src: sources[0] };
  const image = { getAttribute: key => attrs[key], setAttribute: (key, value) => attrs[key] = value };
  const overlay = { hidden: true, attrs: {}, setAttribute(key, value) { this.attrs[key] = value; },
    animate(frames, options) {
      let resolve, reject;
      const finished = new Promise((yes, no) => { resolve = yes; reject = no; });
      const animation = { frames, options, finished, cancel() { this.cancelled = true; reject(new Error('cancelled')); },
        finish: resolve };
      animations.push(animation); return animation;
    } };
  const strip = target();
  const gallery = { ...target(), closest: () => panel.hidden ? panel : null,
    contains: element => buttons.includes(element), querySelector: selector => selector === '.atmosphere-strip' ? strip : overlay };
  const root = { contains: element => element === gallery };
  const buttons = sources.map((source, i) => {
    const values = { 'aria-pressed': String(i === 0) };
    return { ...target(), dataset: { atmosphereSrc: source, atmosphereAlt: `room ${i}` },
      setAttribute: (key, value) => values[key] = String(value), getAttribute: key => values[key],
      closest: () => ({ classList: { toggle() {} } }) };
  });
  const motion = { matches: reduced, addEventListener: (name, fn) => listeners.motion = fn };
  const hoverQuery = { matches: fineHover, addEventListener: (name, fn) => listeners.hover = fn };
  const doc = { ...target(), hidden: false, body: { classList: { contains: () => true } } };
  const context = vm.createContext({
    atmosphereMainImage: image, atmosphereButtons: buttons, atmosphereGallery: gallery,
    document: doc, reduceMotionQuery: motion,
    Image: class { decode() { return delayed ? new Promise((resolve, reject) => pending.push({ src: this.src, resolve, reject })) : Promise.resolve(); } },
    window: { addEventListener: (name, fn) => listeners[name] = fn, performance: { now: () => now },
      setTimeout: (fn, delay) => (timers.set(++id, { fn, due: now + delay }), id), clearTimeout: id => timers.delete(id),
      setInterval: fn => (intervals.set(++id, fn), id), clearInterval: id => intervals.delete(id),
      matchMedia: query => query.includes('reduced') ? motion : hoverQuery },
  });
  vm.runInContext(roomCode, context);
  return { attrs, image, overlay, buttons, pending, animations, intervals, timers, motion, strip, gallery, doc, listeners,
    advance(ms) {
      const until = now + ms;
      while (true) {
        const next = [...timers].filter(([, job]) => job.due <= until).sort((a,b) => a[1].due-b[1].due)[0];
        if (!next) break;
        now = next[1].due; timers.delete(next[0]); next[1].fn();
      }
      now = until;
    },
    hover(index, pointerType = 'mouse') { gallery.events.pointerenter({ pointerType }); buttons[index].events.pointerenter({ pointerType }); },
    click(index, detail = 1) {
      const event = { detail, prevented: false, preventDefault() { this.prevented = true; } };
      buttons[index].events.click(event); return event;
    },
    changeMode(hidden) { panel.hidden = hidden; listeners['mio:modechange']({ detail: { root } }); },
    reduce() { motion.matches = true; listeners.motion(); },
    hide() { doc.hidden = true; doc.events.visibilitychange(); },
    show() { doc.hidden = false; doc.events.visibilitychange(); },
    select(index) { return vm.runInContext(`setAtmosphereImage(atmosphereButtons[${index}])`, context); } };
}

test('all eight scenes crossfade only the previous image over an opaque decoded scene', async () => {
  const g = room();
  for (let i = 1; i < sources.length; i++) {
    await g.select(i);
    assert.equal(g.attrs.src, sources[i]);
    assert.equal(g.overlay.attrs.src, sources[i - 1]);
    assert.equal(g.overlay.hidden, false);
    assert.equal(g.buttons[i].getAttribute('aria-pressed'), 'true');
    const animation = g.animations.at(-1);
    assert.equal(animation.options.duration, 300);
    assert.deepEqual(JSON.parse(JSON.stringify(animation.frames)), [{ opacity: 1 }, { opacity: 0 }]);
    animation.finish(); await tick(); assert.equal(g.overlay.hidden, true);
    assert.equal(g.attrs.src, sources[i]);
  }
  assert.equal(g.animations.length, 7);
});

test('slow, failed and out-of-order loads retain the visible room and the final selected scene', async () => {
  const g = room({ delayed: true });
  const first = g.select(1), last = g.select(7);
  assert.equal(g.attrs.src, sources[0]); assert.equal(g.overlay.hidden, true);
  g.pending[1].resolve(); await last;
  g.pending[0].resolve(); await first;
  assert.equal(g.attrs.src, sources[7]);
  assert.equal(g.buttons[7].getAttribute('aria-pressed'), 'true');
  const failed = g.select(3); g.pending[2].reject(new Error('unavailable')); await failed;
  assert.equal(g.attrs.src, sources[7]); assert.equal(g.buttons[7].getAttribute('aria-pressed'), 'true');
  const stale = g.select(4); await g.select(7); g.pending[3].resolve(); await stale;
  assert.equal(g.attrs.src, sources[7]);
  g.animations.at(-1).finish(); await tick(); assert.equal(g.overlay.hidden, true);
});

test('hover waits 180ms; fast sweeps and early exits leave only the latest valid timer', async () => {
  const g = room();
  g.hover(1); g.advance(100); g.hover(2); g.buttons[1].events.pointerleave(); g.advance(100); g.hover(3);
  assert.equal(g.timers.size, 1); assert.equal(g.animations.length, 0);
  g.advance(179); await tick(); assert.equal(g.attrs.src, sources[0]);
  g.advance(1); await tick(); assert.equal(g.attrs.src, sources[3]);
  assert.equal(g.timers.size, 0); assert.equal(g.animations.length, 1);
  g.hover(4); g.advance(100); g.buttons[4].events.pointerleave();
  g.advance(1000); await tick(); assert.equal(g.attrs.src, sources[3]);
  g.hover(5); g.strip.events.pointerleave(); g.advance(1000); await tick();
  assert.equal(g.attrs.src, sources[3]); assert.equal(g.timers.size, 0);
  g.gallery.events.pointerleave(); g.advance(10000); await tick();
  assert.equal(g.attrs.src, sources[3]); assert.equal(g.intervals.size, 0);
});

test('click cancels hover and selects immediately; reselecting the current scene does not restart its fade', async () => {
  const g = room();
  g.hover(1); g.advance(100); g.click(2); await tick();
  assert.equal(g.attrs.src, sources[2]); assert.equal(g.timers.size, 0);
  const animation = g.animations.at(-1);
  g.advance(1000); await tick(); assert.equal(g.attrs.src, sources[2]);
  g.hover(2); assert.equal(g.timers.size, 0);
  g.click(2); await tick(); assert.equal(g.animations.length, 1); assert(!animation.cancelled);
  animation.finish(); await tick(); assert.equal(g.overlay.hidden, true);
});

test('leaving a decoding hover cancels it; newer clicks cannot be overwritten by old loads or fades', async () => {
  const g = room({ delayed: true });
  g.hover(1); g.advance(180); assert.equal(g.pending.length, 1);
  g.buttons[1].events.pointerleave(); g.pending[0].resolve(); await tick();
  assert.equal(g.attrs.src, sources[0]); assert.equal(g.buttons[0].getAttribute('aria-pressed'), 'true');
  g.hover(2); g.advance(180); g.click(3);
  g.pending[2].resolve(); await tick(); const previousFade = g.animations.at(-1);
  g.pending[1].resolve(); await tick(); assert.equal(g.attrs.src, sources[3]);
  g.click(4); g.pending[3].resolve(); await tick();
  assert(previousFade.cancelled); previousFade.finish(); await tick();
  assert.equal(g.attrs.src, sources[4]); assert.equal(g.overlay.hidden, false);
  assert.equal(g.buttons[4].getAttribute('aria-pressed'), 'true');
});

test('touch and coarse pointers do not hover; swipes suppress compatibility clicks but taps still work', async () => {
  const g = room(); // A hybrid laptop can report fine hover while receiving touch events.
  g.hover(1, 'touch'); g.advance(1000); await tick(); assert.equal(g.attrs.src, sources[0]);
  const down = { pointerType: 'touch', pointerId: 2, clientX: 100, clientY: 50 };
  g.strip.events.pointerdown(down);
  assert.equal(g.intervals.size, 0);
  g.strip.events.pointermove({ ...down, clientX: 70 });
  g.strip.events.scroll();
  g.listeners.pointerup({ ...down, type: 'pointerup' });
  assert(g.click(2).prevented); await tick(); assert.equal(g.attrs.src, sources[0]);
  g.strip.events.pointerdown(down); g.listeners.pointercancel({ ...down, type: 'pointercancel' });
  assert(g.click(3).prevented); await tick(); assert.equal(g.attrs.src, sources[0]);
  assert(!g.click(5, 0).prevented); await tick(); assert.equal(g.attrs.src, sources[5]);
  g.strip.events.pointerdown(down); g.listeners.pointerup({ ...down, type: 'pointerup' });
  assert(!g.click(4).prevented); await tick(); assert.equal(g.attrs.src, sources[4]);
  const coarse = room({ fineHover: false }); coarse.hover(1); coarse.advance(1000); await tick();
  assert.equal(coarse.attrs.src, sources[0]);
  coarse.click(2); await tick(); assert.equal(coarse.attrs.src, sources[2]);
});

test('keyboard focus does not select; native Enter/Space clicks can select all eight scenes', async () => {
  const g = room();
  g.hover(1); g.buttons[2].events.focus(); g.gallery.events.focusin();
  g.advance(1000); await tick(); assert.equal(g.attrs.src, sources[0]);
  assert.equal(g.intervals.size, 0); assert.equal(g.timers.size, 0);
  for (let index = 0; index < 8; index++) {
    g.buttons[index].events.focus(); g.click(index, 0); await tick();
    assert.equal(g.attrs.src, sources[index]);
    assert.equal(g.buttons[index].getAttribute('aria-pressed'), 'true');
    assert.equal(g.buttons.filter(button => button.getAttribute('aria-pressed') === 'true').length, 1);
  }
  g.gallery.events.focusout({ relatedTarget: null });
  assert.equal(g.intervals.size, 0);
});

test('mode hiding, page hiding and visibility changes clear timers and invalidate pending loads', async () => {
  for (const action of ['mode', 'page', 'visibility']) {
    const g = room({ delayed: true });
    g.hover(1); g.advance(180); g.click(2); g.hover(3);
    if (action === 'mode') g.changeMode(true);
    if (action === 'page') g.listeners.pagehide();
    if (action === 'visibility') g.hide();
    assert.equal(g.timers.size, 0); assert.equal(g.intervals.size, 0);
    g.pending.forEach(request => request.resolve()); await tick();
    assert.equal(g.attrs.src, sources[0]); assert.equal(g.overlay.hidden, true);
  }
  const idle = room(); idle.listeners.pagehide(); assert.equal(idle.intervals.size, 0);
  idle.listeners.pageshow(); assert.equal(idle.intervals.size, 1);
  idle.hide(); assert.equal(idle.intervals.size, 0); idle.show(); assert.equal(idle.intervals.size, 1);
});

test('hidden mode and reduced motion clear fades, preserve selection and pause autoplay', async () => {
  const g = room({ hidden: true });
  assert.equal(g.intervals.size, 0);
  g.changeMode(false); assert.equal(g.intervals.size, 1);
  await g.select(7); g.changeMode(true);
  assert.equal(g.overlay.hidden, true); assert.equal(g.intervals.size, 0);
  assert.equal(g.attrs.src, sources[7]);
  g.changeMode(false); assert.equal(g.intervals.size, 1); assert.equal(g.attrs.src, sources[7]);
  g.intervals.values().next().value(); await tick(); assert.equal(g.attrs.src, sources[0]);
  g.reduce(); assert.equal(g.overlay.hidden, true); assert.equal(g.intervals.size, 0);
  const count = g.animations.length;
  await g.select(3); assert.equal(g.animations.length, count); assert.equal(g.attrs.src, sources[3]);
});
