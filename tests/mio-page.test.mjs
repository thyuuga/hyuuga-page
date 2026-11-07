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
  top = 930; update(); assert.equal(opacity(), .5); assert.equal(y(), 8);
  for (let n = 0; n < 10; n++) update();
  assert.equal(opacity(), .5); assert.equal(y(), 8); // no transform feedback/drift
  top = 880; update(); assert.equal(opacity(), 1); assert.equal(y(), 0);
  top = -900; update(); assert.equal(opacity(), 1); // gallery exceeds a viewport
  top = -1770; update(); assert.equal(opacity(), .5); assert.equal(y(), -6);
  top = -1820; update(); assert.equal(opacity(), 0); assert.equal(y(), -12);
  top = -900; update(); assert.equal(opacity(), 1); assert.equal(y(), 0);
  top = 930; update(); assert.equal(opacity(), .5); assert.equal(y(), 8);
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
  for (const [, key] of html.matchAll(/data-i18n(?:-alt)?="([^"]+)"/g)) {
    for (const language of ['en', 'zh', 'ja']) assert(translations[language][key], `${language}: ${key}`);
  }
  for (const [, path] of html.matchAll(/data-src-(?:en|zh|ja)="([^"]+)"/g)) {
    assert(readFileSync(new URL(`../mio/about/${path}`, import.meta.url)).length > 0);
  }
});

test('full-size preview links follow each localized image, including Japanese back to Chinese', () => {
  const code = script.slice(script.indexOf('  localizedImages.forEach((image) => {'), script.indexOf('\n  languageButtons.forEach', script.indexOf('  localizedImages.forEach((image) => {')));
  const hrefs = {}, attrs = { src: 'chinese.png' };
  const image = {
    dataset: { srcEn: 'chinese.png', srcZh: 'chinese.png', srcJa: 'japanese.png' },
    getAttribute: key => attrs[key], setAttribute: (key, value) => attrs[key] = value,
    closest: () => ({ setAttribute: (key, value) => hrefs[key] = value }),
  };
  const ordinaryImage = { ...image, closest: () => null };
  for (const language of ['en', 'ja', 'zh']) {
    vm.runInNewContext(code, { language, localizedImages: [image, ordinaryImage] });
    assert.equal(hrefs.href, language === 'ja' ? 'japanese.png' : 'chinese.png');
    assert.equal(hrefs.href, attrs.src);
  }
});

test('promotional visuals are outside both live galleries; all original controls and main images remain', () => {
  const html = readFileSync(new URL('../mio/about/index.html', import.meta.url), 'utf8');
  const nodes = [], stack = [];
  const voidTags = new Set(['meta', 'link', 'img', 'br', 'hr', 'input', 'source']);
  for (const [, closing, tag, attributes] of html.matchAll(/<(\/?)([a-z][\w-]*)\b([^>]*)>/g)) {
    if (closing) { assert.equal(stack.pop().tag, tag); continue; }
    const attrs = Object.fromEntries([...attributes.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
    const node = { tag, attrs, parents: [...stack] }; nodes.push(node);
    if (!voidTags.has(tag) && !attributes.trimEnd().endsWith('/')) stack.push(node);
  }
  assert.equal(stack.length, 0);
  const hasClass = (node, name) => (node.attrs.class || '').split(/\s+/).includes(name);
  const hasAncestor = (node, name) => node.parents.some(parent => hasClass(parent, name));
  const ids = nodes.filter(node => node.attrs.id).map(node => node.attrs.id);
  assert.equal(ids.length, new Set(ids).size);
  for (const name of ['room-feature-image', 'presence-promo-image']) {
    const [image, ...duplicates] = nodes.filter(node => hasClass(node, name));
    assert(image); assert.equal(duplicates.length, 0);
    for (const selector of ['atmosphere-gallery', 'expression-stage', 'expression-sprite', 'expression-motion']) assert(!hasAncestor(image, selector));
    assert(!image.attrs.id);
    assert(!image.attrs['data-atmosphere-src']); assert(!image.attrs['data-expression-src']);
    assert(readFileSync(new URL(`../mio/about/${image.attrs.src}`, import.meta.url)).length > 0);
  }
  const rooms = nodes.filter(node => node.attrs['data-atmosphere-src']);
  assert.equal(rooms.length, 8); assert(rooms.every(node => hasAncestor(node, 'atmosphere-gallery')));
  assert(hasAncestor(nodes.find(node => node.attrs.id === 'atmosphere-main-image'), 'atmosphere-gallery'));
  const expressions = nodes.filter(node => node.attrs['data-expression-src']);
  assert.equal(expressions.length, 6); assert(expressions.every(node => hasAncestor(node, 'expression-demo')));
  for (const name of ['expression-stage', 'expression-sprite', 'expression-open', 'expression-closed']) {
    const matches = nodes.filter(node => hasClass(node, name));
    assert.equal(matches.length, 1); assert(hasAncestor(matches[0], 'expression-demo'));
  }
  for (const key of ['mio.atmosphere.title', 'mio.atmosphere.body1', 'mio.atmosphere.body2', 'mio.presence.title', 'mio.presence.body']) {
    assert.equal(nodes.filter(node => node.attrs['data-i18n'] === key).length, 1);
  }
});
