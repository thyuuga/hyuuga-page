import { createBlinkController } from './blink.mjs';
import { expressionFrame } from './framing.mjs';

export function initExpressionGallery() {
  const stage = document.querySelector('.expression-stage');
  if (!stage) return;
  const sprite = stage.querySelector('.expression-sprite');
  const openImage = sprite.querySelector('.expression-open');
  const closedImage = sprite.querySelector('.expression-closed');
  const buttons = [...document.querySelectorAll('[data-expression-src]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = buttons.find(button => button.classList.contains('is-active'));
  let desired = current;
  let revision = 0, transitionTimer = null, finishSwitch = null;
  let ready = false, switching = false, visible = false, pageActive = true;
  const blink = createBlinkController(closed => {
    sprite.dataset.eyes = closed ? 'closed' : 'open';
  }, {
    schedule: window.setTimeout.bind(window), cancel: window.clearTimeout.bind(window),
  });

  function updateFrame() {
    const frame = expressionFrame(current.dataset.expression, stage.clientWidth, stage.clientHeight);
    if (!frame) return;
    for (const [property, value] of Object.entries(frame)) {
      sprite.style.setProperty(`--portrait-${property}`, `${value}px`);
    }
  }
  const resizeObserver = new ResizeObserver(updateFrame);
  resizeObserver.observe(stage);
  updateFrame();

  function sync() {
    const active = ready && !switching && visible && pageActive &&
      !stage.closest('[hidden]') && !document.hidden && !reduced.matches;
    if (active) blink.start(); else blink.stop();
    sprite.dataset.breathing = String(active);
  }

  function clearTransition() {
    window.clearTimeout(transitionTimer);
    transitionTimer = null;
    finishSwitch = null;
    sprite.classList.remove('is-fading');
  }

  async function select(button, initial = false) {
    if (!button || (!initial && button === desired && (switching || ready))) return;
    const token = ++revision;
    desired = button;
    clearTransition();
    if (!initial && button === current && ready) {
      switching = false;
      sync();
      return;
    }
    switching = true;
    sync();
    // Decode both frames before displaying them; retain the current portrait on failure.
    const nextOpen = new Image();
    const nextClosed = new Image();
    nextOpen.src = button.dataset.expressionSrc;
    nextClosed.src = button.dataset.expressionClosed;
    const results = await Promise.allSettled([nextOpen.decode(), nextClosed.decode()]);
    if (token !== revision) return;
    const width = Number(button.dataset.expressionWidth);
    const height = Number(button.dataset.expressionHeight);
    const matchesSize = image => image.naturalWidth === width && image.naturalHeight === height;
    if (results[0].status !== 'fulfilled' || !matchesSize(nextOpen)) {
      desired = current;
      switching = false;
      sync();
      return;
    }
    const pairReady = results[1].status === 'fulfilled' && matchesSize(nextClosed);
    finishSwitch = () => {
      if (token !== revision) return;
      // Both images keep identical positioning, dimensions and breathing transform.
      openImage.src = nextOpen.src;
      openImage.width = closedImage.width = width;
      openImage.height = closedImage.height = height;
      sprite.setAttribute('aria-label', button.dataset.expressionAlt || 'Mio expression');
      if (pairReady) closedImage.src = nextClosed.src;
      ready = pairReady;
      sprite.dataset.ready = pairReady ? 'true' : 'static';
      current = button;
      updateFrame();
      buttons.forEach(item => {
        item.classList.toggle('is-active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      switching = false;
      clearTransition();
      sync();
    };
    if (initial || reduced.matches || document.hidden || !pageActive || !visible || stage.closest('[hidden]')) {
      finishSwitch();
    } else {
      sprite.classList.add('is-fading');
      transitionTimer = window.setTimeout(() => finishSwitch?.(), 140);
    }
  }

  function refresh() {
    if (document.hidden || !pageActive || reduced.matches || !visible || stage.closest('[hidden]')) finishSwitch?.();
    updateFrame();
    sync();
  }
  function hide() { pageActive = false; refresh(); }
  function show() { pageActive = true; refresh(); }
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    refresh();
  });
  observer.observe(stage);
  const listeners = buttons.map(button => {
    const listener = () => { void select(button); };
    button.addEventListener('click', listener);
    return [button, listener];
  });
  document.addEventListener('visibilitychange', refresh);
  reduced.addEventListener('change', refresh);
  window.addEventListener('pagehide', hide);
  window.addEventListener('pageshow', show);
  window.addEventListener('mio:modechange', refresh);
  void select(current, true);

  return () => {
    revision++;
    clearTransition();
    blink.stop();
    sprite.dataset.breathing = 'false';
    observer.disconnect();
    resizeObserver.disconnect();
    listeners.forEach(([button, listener]) => button.removeEventListener('click', listener));
    document.removeEventListener('visibilitychange', refresh);
    reduced.removeEventListener('change', refresh);
    window.removeEventListener('pagehide', hide);
    window.removeEventListener('pageshow', show);
    window.removeEventListener('mio:modechange', refresh);
  };
}

if (typeof document !== 'undefined') initExpressionGallery();
