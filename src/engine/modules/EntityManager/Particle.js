import { SHAPES, ENTITY_NODE_TYPES } from '../../constants';
import Vector2D from '../core/Vector2D';
// import Commons from "../core/Commons";

import _node from './_node';

const defaultState = {
  shape: SHAPES.ARC,
  position: [0, 0],
  debug: false,
  boundingBox: {
    margins: [0, 0, 0, 0],
    shape: SHAPES.RECTANGLE,
    color: 'red'
  }
};

// Styles and textures will be applied to all children as well
// children can have overriden styles as well, inherit unspecified values
class Particle extends _node {
  constructor(props) {
    super(props);

    const {
      shape = defaultState.shape,
      radius,

      position = defaultState.position,

      styles, // backgroundColor, backgroundImage, backgroundGradient, borderColor, borderSize

      debug = defaultState.debug,
      // collision box?
      boundingBox = defaultState.boundingBox,

      ...restProps
    } = props;

    this.type = ENTITY_NODE_TYPES.BODY;

    this.shape = shape;
    this.radius = radius;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;

    // users will be giving center pos by default
    this.position = new Vector2D(position[0], position[1]);

    this.styles = styles;

    this.debug = debug;
    this.boundingBox = { ...defaultState.boundingBox, ...boundingBox };

    this.restProps = restProps;
  }

  onAddChilren() {
    console.error('Cannot add children to particle', this);
  }
}

Particle.getDebugMessage = (particle) =>
  `Pos :: ${particle.position.x}, ${particle.position.y}`;

export default Particle;
