// Adapted from PJMIO/frontend/src/lib/mioIdle.js. Keep eye swaps instantaneous.
// Shared timing and geometry for the two aligned, unmodified Mio PNGs.
export const MIO_IDLE = Object.freeze({
  wait: [3000, 6500], closed: [85, 125], doubleGap: [130, 200], doubleChance: 0.1,
  breathMs: 5600, scaleX: 1.0006, scaleY: 1.003, origin: '55% 98.5%',
});

// One cancellable timer; no render-loop state, intervals, or catch-up on resume.
export function createBlinkController(setClosed, {
  random = Math.random, schedule = setTimeout, cancel = clearTimeout, config = MIO_IDLE,
} = {}) {
  let timer = null, running = false, previousDouble = false, generation = 0;
  const duration = range => range[0] + random() * (range[1] - range[0]);
  function later(fn, range) {
    const token = generation;
    timer = schedule(() => {
      if (!running || token !== generation) return;
      timer = null;
      fn();
    }, duration(range));
  }
  function wait() { later(round, config.wait); }
  function round() {
    const twice = !previousDouble && random() < config.doubleChance;
    previousDouble = twice;
    setClosed(true);
    later(() => {
      setClosed(false);
      if (!twice) return wait();
      later(() => {
        setClosed(true);
        later(() => { setClosed(false); wait(); }, config.closed);
      }, config.doubleGap);
    }, config.closed);
  }
  return {
    start() { if (running) return; running = true; previousDouble = false; setClosed(false); wait(); },
    stop() { running = false; generation++; if (timer !== null) cancel(timer); timer = null; setClosed(false); },
  };
}
