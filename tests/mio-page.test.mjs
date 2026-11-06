import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
// Execute the actual shared controller with DOM boundaries supplied by the test.
const revealCode = script.slice(script.indexOf('const revealSections ='), script.indexOf('let atmosphereSwapTimer;'));
const roomCode = script.slice(script.indexOf('let atmosphereSwapTimer;'));
const classList = () => {
  const names = new Set();
  return { add: name => names.add(name), remove: name => names.delete(name),
    contains: name => names.has(name), toggle: (name, active) => active ? names.add(name) : names.delete(name) };
};

test('Mio reveal is reversible, stationary, and keeps long content readable', () => {
  let top = 980, height = 1800;
  const values = new Map(), listeners = {}, frames = [];
  const element = {
    classList: classList(),
    style: { getPropertyValue: key => values.get(key), setProperty: (key, value) => values.set(key, value) },
    getBoundingClientRect() {
      const shifted = top + (parseFloat(values.get('--reveal-y')) || 0);
      return { top: shifted, bottom: shifted + height, height };
    },
  };
  const section = {
    classList: classList(),
    querySelectorAll: () => [element],
    getBoundingClientRect: () => ({ top, height }),
  };
  const body = { classList: classList() }; body.classList.add('mio-sky-blue');
  vm.runInNewContext(revealCode, {
    document: { body, querySelectorAll: () => [section] },
    reduceMotionQuery: { matches: false },
    window: { innerHeight: 1000, addEventListener: (name, fn) => listeners[name] = fn,
      requestAnimationFrame: fn => (frames.push(fn), frames.length) },
  });
  const update = () => { listeners.scroll(); frames.shift()(); };
  const opacity = () => Number(values.get('--reveal-opacity'));
  const y = () => parseFloat(values.get('--reveal-y'));
  assert.equal(opacity(), 0); assert.equal(y(), 16);
  top = 880; update(); assert.equal(opacity(), .5); assert.equal(y(), 8);
  for (let n = 0; n < 10; n++) update();
  assert.equal(opacity(), .5); assert.equal(y(), 8); // no transform feedback/drift
  top = 780; update(); assert.equal(opacity(), 1); assert.equal(y(), 0);
  top = -900; update(); assert.equal(opacity(), 1); // gallery exceeds a viewport
  top = -1720; update(); assert.equal(opacity(), .5); assert.equal(y(), -6);
  top = -1820; update(); assert.equal(opacity(), 0); assert.equal(y(), -12);
  top = -900; update(); assert.equal(opacity(), 1); assert.equal(y(), 0);
  top = 880; update(); assert.equal(opacity(), .5); assert.equal(y(), 8);
});

test('rapid room selections keep the last choice, including returning to the current image', () => {
  const jobs = new Map(); let id = 0;
  const imageAttrs = { src: 'spring.png' };
  const image = { classList: classList(), getAttribute: key => imageAttrs[key], setAttribute: (key, value) => imageAttrs[key] = value };
  const buttons = ['spring', 'rain', 'night'].map(name => {
    const attrs = { 'aria-pressed': String(name === 'spring') }, events = {}, figure = { classList: classList() };
    return { dataset: { atmosphereSrc: `${name}.png`, atmosphereAlt: name }, events,
      setAttribute: (key, value) => attrs[key] = String(value), getAttribute: key => attrs[key],
      closest: () => figure, addEventListener: (name, fn) => events[name] = fn };
  });
  const reduced = { matches: false, addEventListener: () => {} };
  const context = vm.createContext({
    atmosphereMainImage: image, atmosphereButtons: buttons, atmosphereGallery: null,
    document: { body: { classList: { contains: () => true } } }, reduceMotionQuery: reduced,
    window: {
      clearTimeout: id => jobs.delete(id), setTimeout: fn => (jobs.set(++id, fn), id),
      setInterval: () => 1, clearInterval: () => {}, matchMedia: () => ({ matches: true }),
    },
  });
  vm.runInContext(roomCode, context);
  buttons[1].events.pointerenter(); buttons[2].events.pointerenter();
  assert.equal(jobs.size, 1);
  for (const fn of jobs.values()) fn(); jobs.clear();
  assert.equal(imageAttrs.src, 'night.png');
  assert.equal(buttons[2].getAttribute('aria-pressed'), 'true');
  buttons[1].events.focus(); buttons[2].events.click();
  assert.equal(jobs.size, 0); assert.equal(imageAttrs.src, 'night.png');
  assert(!image.classList.contains('is-fading'));
});

test('every Mio text key and localized preview image is present in all three languages', () => {
  const dictionary = script.slice(script.indexOf('const translations ='), script.indexOf('const languageButtons ='));
  const translations = vm.runInNewContext(`${dictionary}\ntranslations;`);
  const html = readFileSync(new URL('../mio/about/index.html', import.meta.url), 'utf8');
  for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
    for (const language of ['en', 'zh', 'ja']) assert(translations[language][key], `${language}: ${key}`);
  }
  for (const [, path] of html.matchAll(/data-src-(?:en|zh|ja)="([^"]+)"/g)) {
    assert(readFileSync(new URL(`../mio/about/${path}`, import.meta.url)).length > 0);
  }
});
