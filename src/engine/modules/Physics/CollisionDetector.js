function isCircleCollidingRect(circle, rect) {
  const horizontalDistance = circle.x - (rect.x + rect.width / 2);
  const verticalDistance = circle.y - (rect.y + rect.height / 2);

  const circleDistance = {};
  circleDistance.x = Math.abs(horizontalDistance);
  circleDistance.y = Math.abs(verticalDistance);

  const collisionVector = [0, 0, 0, 0];

  if (circleDistance.x > rect.width / 2 + circle.radius) {
    return false;
  }
  if (circleDistance.y > rect.height / 2 + circle.radius) {
    return false;
  }

  if (circleDistance.x <= rect.width / 2) {
    if (verticalDistance < 0) {
      collisionVector[0] = 1;
    } else {
      collisionVector[2] = 1;
    }

    return collisionVector;
  }
  if (circleDistance.y <= rect.height / 2) {
    if (horizontalDistance < 0) {
      collisionVector[3] = 1;
    } else {
      collisionVector[1] = 1;
    }
    return collisionVector;
  }

  const cornerDistance_sq =
    (circleDistance.x - rect.width / 2) ^
    (2 + (circleDistance.y - rect.height / 2)) ^
    2;

  const isColliding = cornerDistance_sq <= (circle.radius ^ 2);

  if (isColliding) {
    if (verticalDistance < 0) {
      collisionVector[0] = 1;
    } else {
      collisionVector[2] = 1;
    }
    if (horizontalDistance < 0) {
      collisionVector[3] = 1;
    } else {
      collisionVector[1] = 1;
    }
    return collisionVector;
  }

  return false;
}

export default {
  isCircleCollidingRect
};
