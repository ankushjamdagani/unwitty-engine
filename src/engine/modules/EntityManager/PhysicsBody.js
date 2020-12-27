import { BODY_TYPE, ENTITY_NODE_TYPES } from '../../constants';
import Vector2D from '../core/Vector2D';

import Body from './Body';

// ----- Evalutate Essentials -------
// Bounding Box
// Center of mass
// Vector Box
// Label Box
// Collision Points
// Surface Area
// onCollision() {}
// getSpeed()
// getDirection()
// class PhysicsBody extends Body {
const PhysicsBody = {
  ...Body,

  create(props) {
    const {
      // check if collision can occer using these
      bodyType = BODY_TYPE.KINEMATIC,
      categoryMask = 0b001,
      collisionMask = 0b111,

      mass,
      restitution,
      // bounxe
      friction,
      gravityScale,

      linearDrag,
      angularDrag,

      velocity,
      // speed
      direction, // <------ ? vx = cos(a)*speed  && vy = sin(a)*speed
      acceleration
    } = props;

    const _node = Body.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.PHYSICS_BODY,
      bodyType,
      categoryMask,
      collisionMask,
      mass,
      restitution,
      friction,
      gravityScale,
      linearDrag,
      angularDrag,

      velocity: new Vector2D(velocity[0], velocity[1]),
      direction: new Vector2D(direction[0], direction[1]),
      acceleration: new Vector2D(acceleration[0], acceleration[1])
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

export default PhysicsBody;
