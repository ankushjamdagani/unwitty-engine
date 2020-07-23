function isCircleCollidingRect(circle, rect, errorCorrection) {
  if (
    Math.abs(circle.y + circle.radius - rect.y) <= errorCorrection &&
    circle.x >= rect.x &&
    circle.x <= rect.x + rect.width
  ) {
    return [circle.x, circle.y + circle.radius];
  }
  return false;
}

export default { isCircleCollidingRect };
