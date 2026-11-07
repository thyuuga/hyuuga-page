import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
const roomCode = script.slice(script.indexOf('let atmosphereSwapRevision ='));
const html = readFileSync(new URL('../mio/about/index.html', import.meta.url), 'utf8');
const sources = [...html.matchAll(/data-atmosphere-src="([^"]+)"/g)].map(match => match[1]);
const tick = async () => { for (let i = 0; i < 5; i++) await Promise.resolve(); };

function room({ hidden = false, reduced = false, delayed = false } = {}) {
  const intervals = new Map(), listeners = {}, pending = [], animations = []; let id = 0;
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
  const gallery = { closest: () => panel.hidden ? panel : null, addEventListener: () => {}, querySelector: () => overlay };
  const root = { contains: element => element === gallery };
  const buttons = sources.map((source, i) => {
    const values = { 'aria-pressed': String(i === 0) }, events = {};
    return { dataset: { atmosphereSrc: source, atmosphereAlt: `room ${i}` }, events,
      setAttribute: (key, value) => values[key] = String(value), getAttribute: key => values[key],
      closest: () => ({ classList: { toggle() {} } }), addEventListener: (name, fn) => events[name] = fn };
  });
  const motion = { matches: reduced, addEventListener: (name, fn) => listeners.motion = fn };
  const context = vm.createContext({
    atmosphereMainImage: image, atmosphereButtons: buttons, atmosphereGallery: gallery,
    document: { body: { classList: { contains: () => true } } }, reduceMotionQuery: motion,
    Image: class { decode() { return delayed ? new Promise((resolve, reject) => pending.push({ src: this.src, resolve, reject })) : Promise.resolve(); } },
    window: { addEventListener: (name, fn) => listeners[name] = fn,
      setInterval: fn => (intervals.set(++id, fn), id), clearInterval: id => intervals.delete(id),
      matchMedia: query => ({ matches: query.includes('reduced') ? motion.matches : true }) },
  });
  vm.runInContext(roomCode, context);
  return { attrs, image, overlay, buttons, pending, animations, intervals, motion,
    changeMode(hidden) { panel.hidden = hidden; listeners['mio:modechange']({ detail: { root } }); },
    reduce() { motion.matches = true; listeners.motion(); },
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
    assert.equal(animation.options.duration, 240);
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
  assert.equal(g.attrs.src, sources[7]); assert.equal(g.overlay.hidden, true);
});

test('rapid hover, keyboard and click selections cancel stale fades without hiding the new main image', async () => {
  const g = room();
  g.buttons[1].events.pointerenter(); await tick();
  const first = g.animations.at(-1);
  g.buttons[2].events.focus(); await tick();
  assert(first.cancelled); assert.equal(g.attrs.src, sources[2]); assert.equal(g.overlay.hidden, false);
  first.finish(); await tick(); assert.equal(g.overlay.hidden, false);
  g.buttons[2].events.click(); await tick();
  assert.equal(g.overlay.hidden, true); assert.equal(g.attrs.src, sources[2]);
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
