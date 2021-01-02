import { BODY_TYPE, ENTITY_NODE_TYPES } from '../../constants';
import Vector2D from '../core/Vector2D';

import Body from './Body';

const FluidBody = {
  ...Body,

  create(props) {
    const {
      // check if collision can occer using these
      bodyType = BODY_TYPE.KINEMATIC,
      categoryMask = 0b001,
      collisionMask = 0b111,

      mass,
      restitution,
      friction,
      gravityScale,

      linearDrag,
      angularDrag,

      velocity,
      direction,
      acceleration
    } = props;

    const _node = Body.create(props);

    return {
      ..._node,
      type: ENTITY_NODE_TYPES.FLUID_BODY,
      bodyType,
      categoryMask,
      collisionMask,
      mass,
      restitution,
      friction,
      gravityScale,
      linearDrag,
      angularDrag,

      velocity: Vector2D.create(velocity),
      direction: Vector2D.create(direction),
      acceleration: Vector2D.create(acceleration)
    };
  },

  getDebugMessage(body) {
    return `
      Pos :: ${body.position.x}, ${body.position.y} \n 
      Vel :: ${body.velocity.x}, ${body.velocity.y} \n
      Acc :: ${body.acceleration.x}, ${body.acceleration.y} \n
    `;
  }
};

export default FluidBody;
