import { Vector2D } from '../core';

/**
 * @todo
 * - Zoom in / Zoom out
 * - Rotation
 * - Camera types [follow all, follow-x, follow-y, etc.]
 */
class Camera {
  static create({ width, height }) {
    return {
      position: Vector2D.zero(),
      rotation: 0,
      width,
      height
    };
  }

  static bindTarget(target) {
    return target;
  }

  static update(camera) {
    const { width, height, target } = camera;
    if (target) {
      const {
        position: { x, y }
      } = target;

      return {
        x: x - width / 2,
        y: y - height / 2
      };
    }
    return camera;
  }
}

export default Camera;
