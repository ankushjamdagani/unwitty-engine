import { BODY_TYPE, ENTITY_NODE_TYPES } from '../../constants';
import Vector2D from '../core/Vector2D';

import Body from './Body';

class FluidBody extends Body {
  constructor(props) {
    super(props);

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

    this.type = ENTITY_NODE_TYPES.FLUID_BODY;

    this.bodyType = bodyType;
    this.categoryMask = categoryMask;
    this.collisionMask = collisionMask;

    this.mass = mass;
    this.restitution = restitution;
    this.friction = friction;
    this.gravityScale = gravityScale;

    this.linearDrag = linearDrag;
    this.angularDrag = angularDrag;

    this.velocity = new Vector2D(velocity[0], velocity[1]);
    this.direction = new Vector2D(direction[0], direction[1]);
    this.acceleration = new Vector2D(acceleration[0], acceleration[1]);
  }
}

FluidBody.getDebugMessage = (body) => `
    Pos :: ${body.position.x}, ${body.position.y} \n 
    Vel :: ${body.velocity.x}, ${body.velocity.y} \n
    Acc :: ${body.acceleration.x}, ${body.acceleration.y} \n
  `;

export default FluidBody;
