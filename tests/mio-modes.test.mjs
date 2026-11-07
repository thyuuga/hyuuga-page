import test from 'node:test';
import assert from 'node:assert/strict';
import { initModeSwitcher } from '../mio/about/modes.mjs';

function switcher(prefix) {
  const panels = ['intro', 'live'].map(mode => ({ id: `${prefix}-${mode}`, hidden: mode === 'live', inert: mode === 'live', selection: 'untouched' }));
  const tabs = panels.map((panel, index) => {
    const attrs = { 'aria-controls': panel.id, 'aria-selected': String(index === 0) };
    return { events: {}, attrs, focused: false,
      getAttribute: key => attrs[key], setAttribute: (key, value) => attrs[key] = value,
      focus() { this.focused = true; },
      addEventListener(name, fn) { this.events[name] = fn; } };
  });
  return { dataset: {}, tabs, panels,
    querySelectorAll: selector => selector === '[role="tab"]' ? tabs : panels };
}

test('modes have one selected/focusable tab and one exposed panel; rapid switches keep gallery state', t => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const events = [];
  globalThis.window = { dispatchEvent: event => events.push(event) };
  t.after(() => previous ? Object.defineProperty(globalThis, 'window', previous) : delete globalThis.window);
  const room = switcher('room'), presence = switcher('presence');
  initModeSwitcher(room); initModeSwitcher(presence);
  const assertSelection = (root, index) => {
    root.tabs.forEach((tab, i) => {
      assert.equal(tab.attrs['aria-selected'], String(i === index));
      assert.equal(tab.tabIndex, i === index ? 0 : -1);
      assert.equal(root.panels[i].hidden, i !== index);
      assert.equal(root.panels[i].inert, i !== index);
    });
  };
  assertSelection(room, 0); assertSelection(presence, 0);
  room.panels[1].selection = 'winter'; presence.panels[1].selection = 'joy';
  for (let n = 0; n < 10; n++) {
    room.tabs[1].events.click(); assertSelection(room, 1);
    room.tabs[0].events.click(); assertSelection(room, 0);
  }
  assert.equal(room.panels[1].selection, 'winter');
  assert.equal(presence.panels[1].selection, 'joy');
  assertSelection(presence, 0); // The two switchers are independent.
  const count = events.length; room.tabs[0].events.click();
  assert.equal(events.length, count); // Reselecting must not restart the animation/timers.
  let prevented = 0;
  for (const [from, key, expected] of [[0, 'ArrowRight', 1], [1, 'ArrowRight', 0], [0, 'ArrowLeft', 1], [1, 'Home', 0], [0, 'End', 1]]) {
    room.tabs[from].events.keydown({ key, preventDefault: () => prevented++ });
    assertSelection(room, expected); assert(room.tabs[expected].focused);
  }
  room.tabs[1].events.keydown({ key: 'Tab', preventDefault: () => prevented++ });
  assert.equal(prevented, 5);
  assert.equal(events.at(-1).type, 'mio:modechange');
  assert.equal(events.at(-1).detail.id, 'room-live');
});
