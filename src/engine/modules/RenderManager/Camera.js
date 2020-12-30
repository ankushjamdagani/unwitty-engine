import produce from 'immer';

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

  static bindTarget(camera, target) {
    return produce(camera, (draft) => {
      draft.target = {
        id: target.id,
        position: target.position
      };
    });
  }

  static update(camera, entities) {
    const { width, height, target } = camera;
    if (target) {
      const { position, id } = target;
      const targetPos = id ? entities[id].position : position;

      return produce(camera, (draft) => {
        draft.position = {
          x: targetPos.x - width / 2,
          y: targetPos.y - height / 2
        };
      });
    }
    return camera;
  }
}

export default Camera;
