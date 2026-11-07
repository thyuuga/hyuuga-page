// Tabs change visibility only: room/expression controllers and their state stay alive.
export function initModeSwitcher(root) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const panels = [...root.querySelectorAll('[role="tabpanel"]')];
  if (!tabs.length || tabs.some(tab => !panels.some(panel => panel.id === tab.getAttribute('aria-controls')))) return;

  function select(tab, focus = false) {
    const id = tab.getAttribute('aria-controls');
    if (focus) tab.focus();
    if (root.dataset.mode === id) return;
    root.dataset.mode = id;
    tabs.forEach(item => {
      item.setAttribute('aria-selected', String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    panels.forEach(panel => {
      panel.hidden = panel.id !== id;
      panel.inert = panel.hidden;
    });
    window.dispatchEvent(new CustomEvent('mio:modechange', { detail: { root, id } }));
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      const next = { ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
      if (next === undefined) return; // Native buttons handle Enter and Space.
      event.preventDefault();
      select(tabs[next], true);
    });
  });
  select(tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
}

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-mode-switcher]').forEach(initModeSwitcher);
}
