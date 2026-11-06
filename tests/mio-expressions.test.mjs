import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createBlinkController, MIO_IDLE } from '../mio/about/blink.mjs';
import { initExpressionGallery } from '../mio/about/expressions.mjs';
import { EXPRESSION_FRAMES, expressionFrame } from '../mio/about/framing.mjs';

const expressions = ['normal', 'joy', 'shy', 'proud', 'sad', 'angry'];
const tick = () => new Promise(resolve => setImmediate(resolve));
function clock() {
  let serial = 0;
  const jobs = new Map();
  return {
    jobs,
    schedule(fn, ms) { const id = ++serial; jobs.set(id, { fn, ms }); return id; },
    cancel(id) { jobs.delete(id); },
    next(range) {
      assert.equal(jobs.size, 1);
      const [id, job] = [...jobs][0];
      assert(job.ms >= range[0] && job.ms <= range[1]);
      jobs.delete(id); job.fn();
    },
  };
}

test('blink timing, occasional double blink, cancellation and stale callbacks', () => {
  const time = clock(), states = [];
  const blink = createBlinkController(value => states.push(value), {
    random: () => 0, schedule: time.schedule, cancel: time.cancel,
  });
  blink.start(); blink.start();
  time.next(MIO_IDLE.wait); assert.equal(states.at(-1), true);
  time.next(MIO_IDLE.closed); assert.equal(states.at(-1), false);
  time.next(MIO_IDLE.doubleGap); assert.equal(states.at(-1), true);
  time.next(MIO_IDLE.closed); assert.equal(states.at(-1), false);
  time.next(MIO_IDLE.wait); time.next(MIO_IDLE.closed);
  assert([...time.jobs.values()][0].ms >= 3000, 'No consecutive double-blink rounds');
  const stale = [...time.jobs.values()][0].fn;
  blink.stop(); assert.equal(time.jobs.size, 0); assert.equal(states.at(-1), false);
  blink.start(); const count = states.length; stale();
  assert.equal(states.length, count); assert.equal(time.jobs.size, 1);
  blink.stop();
});

class Target {
  constructor() {
    this.listeners = new Map(); this.dataset = {}; this.attributes = {};
    const classes = new Set();
    this.classList = {
      contains: name => classes.has(name), add: name => classes.add(name),
      remove: name => classes.delete(name),
      toggle: (name, on) => on ? classes.add(name) : classes.delete(name),
    };
  }
  addEventListener(type, fn) { if (!this.listeners.has(type)) this.listeners.set(type, new Set()); this.listeners.get(type).add(fn); }
  removeEventListener(type, fn) { this.listeners.get(type)?.delete(fn); }
  emit(type) { this.listeners.get(type)?.forEach(fn => fn()); }
  setAttribute(name, value) { this.attributes[name] = value; }
}

function gallery(t, { reduced = false, fail = '', mismatch = '', delayed = false } = {}) {
  const time = clock(), sprite = new Target(), open = {}, closed = {}, stage = { clientWidth: 258, clientHeight: 558 };
  sprite.style = { setProperty(name, value) { this[name] = value; } };
  const pending = [], motion = new Target(), doc = new Target(), win = new Target();
  motion.matches = reduced; doc.hidden = false;
  const buttons = expressions.map(name => {
    const b = new Target(), wide = ['joy', 'angry'].includes(name);
    b.dataset = { expression: name, expressionSrc: `${name}_open.png`, expressionClosed: `${name}_closed.png`,
      expressionWidth: String(wide ? 1024 : 941), expressionHeight: String(wide ? 1536 : 1672), expressionAlt: name };
    b.classList.toggle('is-active', name === 'normal'); return b;
  });
  sprite.querySelector = s => s === '.expression-open' ? open : closed;
  stage.querySelector = () => sprite;
  doc.querySelector = () => stage; doc.querySelectorAll = () => buttons;
  win.matchMedia = () => motion; win.setTimeout = time.schedule; win.clearTimeout = time.cancel;
  let observer;
  const globals = { document: doc, window: win,
    ResizeObserver: class { observe() {} disconnect() {} },
    IntersectionObserver: class {
      constructor(callback) { observer = this; this.callback = callback; }
      observe() {} disconnect() { this.disconnected = true; }
      visible(value) { this.callback([{ isIntersecting: value }]); }
    },
    Image: class {
      decode() {
        const wide = /joy|angry/.test(this.src);
        this.naturalWidth = wide ? 1024 : 941; this.naturalHeight = wide ? 1536 : 1672;
        if (mismatch && this.src.includes(mismatch)) this.naturalWidth++;
        if (fail && this.src.includes(fail)) return Promise.reject(new Error('load failed'));
        if (delayed) return new Promise(resolve => pending.push({ src: this.src, resolve }));
        return Promise.resolve();
      }
    },
  };
  const original = new Map(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  Object.assign(globalThis, globals);
  const dispose = initExpressionGallery();
  t.after(() => {
    dispose();
    for (const [key, descriptor] of original) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key];
    }
  });
  return { time, sprite, open, closed, doc, win, motion, observer, pending, dispose,
    click: name => buttons[expressions.indexOf(name)].emit('click') };
}

test('all six pairs switch together; visibility, reduced motion and cleanup stop blinking', async t => {
  const g = gallery(t); await tick(); assert.equal(g.time.jobs.size, 0);
  g.observer.visible(true); assert.equal(g.time.jobs.size, 1);
  for (const expression of expressions) {
    g.click(expression); await tick();
    if (expression !== 'normal') g.time.next([140, 140]);
    assert.equal(g.open.src, `${expression}_open.png`);
    assert.equal(g.closed.src, `${expression}_closed.png`);
    assert.equal(g.open.width, g.closed.width);
    assert.equal(g.open.height, g.closed.height);
    assert.equal(g.sprite.style['--portrait-width'], `${expressionFrame(expression, 258, 558).width}px`);
    g.time.next(MIO_IDLE.wait); assert.equal(g.sprite.dataset.eyes, 'closed');
    g.observer.visible(false); assert.equal(g.sprite.dataset.eyes, 'open'); assert.equal(g.time.jobs.size, 0);
    g.observer.visible(true);
  }
  for (const [target, property, event] of [[g.doc, 'hidden', 'visibilitychange'], [g.motion, 'matches', 'change']]) {
    target[property] = true; target.emit(event);
    assert.equal(g.time.jobs.size, 0); assert.equal(g.sprite.dataset.breathing, 'false');
    target[property] = false; target.emit(event); assert.equal(g.time.jobs.size, 1);
  }
  g.win.emit('pagehide'); assert.equal(g.time.jobs.size, 0);
  g.win.emit('pageshow'); assert.equal(g.time.jobs.size, 1);
  g.dispose(); assert.equal(g.time.jobs.size, 0); assert(g.observer.disconnected);
});

test('six portraits share body height, center and foot baseline at desktop and mobile sizes', () => {
  for (const [width, height] of [[258, 558], [348, 438], [278, 438], [420, 660], [342, 540], [300, 580], [480, 740], [420, 650], [342, 600], [284, 600]]) {
    let commonHeight;
    for (const [name, source] of Object.entries(EXPRESSION_FRAMES)) {
      const frame = expressionFrame(name, width, height);
      const scale = frame.width / source.width;
      const top = frame.top + source.top * scale;
      const bottom = frame.top + source.bottom * scale;
      const left = frame.left + source.left * scale;
      const right = frame.left + source.right * scale;
      commonHeight ??= bottom - top;
      assert(Math.abs(bottom - top - commonHeight) < 0.001);
      assert(Math.abs((left + right) / 2 - width / 2) < 0.001);
      assert(Math.abs(bottom - height * 0.985) < 0.001);
      assert(top > 0 && bottom < height && left > 0 && right < width);
      if (width === 258) {
        const oldHeight = (source.bottom - source.top) * Math.min(width / source.width, height / source.height);
        assert(commonHeight > oldHeight * 1.14, `${name} should be visibly larger`);
      }
    }
  }
  assert.equal(expressionFrame('normal', 0, 0), null);
});

test('late decoding cannot overwrite the last selection, including return to initial expression', async t => {
  const g = gallery(t, { delayed: true }); g.observer.visible(true);
  g.click('joy'); g.click('normal');
  g.pending.slice(-2).forEach(job => job.resolve()); await tick(); g.time.next([140, 140]);
  g.pending.slice(0, -2).forEach(job => job.resolve()); await tick();
  assert.equal(g.open.src, 'normal_open.png'); assert.equal(g.time.jobs.size, 1);
});

for (const options of [{ fail: 'joy_closed' }, { mismatch: 'joy_closed' }]) {
  test(`bad closed frame falls back to static open: ${JSON.stringify(options)}`, async t => {
    const g = gallery(t, options); await tick(); g.observer.visible(true);
    g.click('joy'); await tick(); g.time.next([140, 140]);
    assert.equal(g.open.src, 'joy_open.png'); assert.equal(g.sprite.dataset.eyes, 'open');
    assert.equal(g.sprite.dataset.ready, 'static'); assert.equal(g.time.jobs.size, 0);
  });
}
test('failed open frame retains the previous pair', async t => {
  const g = gallery(t, { fail: 'joy_open' }); await tick(); g.observer.visible(true);
  g.click('joy'); await tick();
  assert.equal(g.open.src, 'normal_open.png'); assert.equal(g.time.jobs.size, 1);
});
test('reduced motion displays selections immediately without animation timers', async t => {
  const g = gallery(t, { reduced: true }); await tick(); g.observer.visible(true);
  g.click('sad'); await tick();
  assert.equal(g.open.src, 'sad_open.png'); assert.equal(g.time.jobs.size, 0);
});
test('HTML points to twelve real PNGs with matching pair dimensions', () => {
  const html = readFileSync(new URL('../mio/about/index.html', import.meta.url), 'utf8');
  for (const expression of expressions) {
    const sizes = ['open', 'closed'].map(state => {
      const name = `mio_illustration_live_${expression}_${state}.png`;
      assert(html.includes(name));
      const data = readFileSync(new URL(`../asset/${name}`, import.meta.url));
      return [data.readUInt32BE(16), data.readUInt32BE(20)];
    });
    assert.deepEqual(sizes[0], sizes[1]);
    assert.deepEqual(sizes[0], ['joy', 'angry'].includes(expression) ? [1024, 1536] : [941, 1672]);
  }
});
