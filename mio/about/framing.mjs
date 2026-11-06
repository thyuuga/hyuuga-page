// Visible bounds measured from the open PNGs at alpha >= 128 (exclusive right/bottom).
// Each closed frame has the same alpha channel. Re-measure when replacing artwork.
export const EXPRESSION_FRAMES = Object.freeze({
  normal: { width: 941, height: 1672, left: 184, top: 6, right: 831, bottom: 1642 },
  joy: { width: 1024, height: 1536, left: 157, top: 9, right: 873, bottom: 1534 },
  shy: { width: 941, height: 1672, left: 157, top: 34, right: 786, bottom: 1632 },
  proud: { width: 941, height: 1672, left: 157, top: 34, right: 786, bottom: 1632 },
  sad: { width: 941, height: 1672, left: 158, top: 34, right: 782, bottom: 1632 },
  angry: { width: 1024, height: 1536, left: 152, top: 8, right: 886, bottom: 1531 },
});

const widestBodyRatio = Math.max(...Object.values(EXPRESSION_FRAMES).map(
  frame => (frame.right - frame.left) / (frame.bottom - frame.top),
));

export function expressionFrame(expression, width, height) {
  const source = EXPRESSION_FRAMES[expression];
  if (!source || width <= 0 || height <= 0) return null;
  // All six share one body height and foot baseline; fit even the widest pose.
  // Leave a small safety margin for soft alpha edges and the breathing motion.
  const bodyHeight = Math.min(height * 0.96, width * 0.96 / widestBodyRatio);
  const scale = bodyHeight / (source.bottom - source.top);
  return {
    width: source.width * scale,
    height: source.height * scale,
    left: width / 2 - (source.left + source.right) / 2 * scale,
    top: height * 0.985 - source.bottom * scale,
  };
}
