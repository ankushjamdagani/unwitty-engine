import produce from 'immer';

import { ENTITY_NODE_TYPES } from '../../constants';

import { Commons } from '../core';

import Node from './_node';

const Camera = {
  ...Node,

  create(props) {
    const _node = Node.create(props);
    const {
      width,
      height,
      position,
      rotation,
      minPosition,
      maxPosition
    } = props;
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.CAMERA,
      position,
      rotation,
      width,
      height,
      minPosition,
      maxPosition
    };
  },

  bindTarget(camera, target) {
    return produce(camera, (draft) => {
      draft.target = {
        id: target.id,
        position: target.position
      };
    });
  },

  render({ context, element }) {
    const {
      position: { x, y }
    } = element;

    const prevFillStyle = context.fillStyle;
    const prevStrokeStyle = context.strokeStyle;

    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    context.arc(x + 10, y + 10, 10, 0, Math.PI * 2);
    context.fill();
    context.arc(x + 12, y + 12, 12, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = prevFillStyle;
    context.strokeStyle = prevStrokeStyle;
  },

  update(camera, { entities }) {
    const {
      width,
      height,
      target,
      minPosition: [minX, minY],
      maxPosition: [maxX, maxY]
    } = camera;

    let newPosition = camera.position;

    if (target) {
      const { position, id } = target;
      const targetPos = id ? entities[id].position : position;

      newPosition = {
        x: targetPos.x - width / 2,
        y: targetPos.y - height / 2
      };
      newPosition = {
        x: Math.max(minX, Math.min(newPosition.x, maxX)),
        y: Math.max(minY, Math.min(newPosition.y, maxY))
      };
    }

    return { ...camera, position: newPosition };
  },

  getRelativePosition(pos, camera) {
    return pos
      ? {
          x: Commons.roundOff(pos.x - camera.position.x),
          y: Commons.roundOff(pos.y - camera.position.y)
        }
      : {};
  },

  getAbsolutePosition(pos, camera) {
    return pos
      ? {
          x: Commons.roundOff(pos.x + camera.position.x),
          y: Commons.roundOff(pos.y + camera.position.y)
        }
      : {};
  },

  getDebugMessage(body) {
    return `Pos :: ${body.position.x}, ${body.position.y}`;
  }
};

export default Camera;
