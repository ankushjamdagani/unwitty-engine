import { SHAPES, ENTITY_NODE_TYPES } from '../../constants';
import { Vector2D } from '../core';

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
const Particle = {
  ...Node,

  create(props) {
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

    const _node = Node.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.BODY,
      shape,
      radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      position: Vector2D.create(position),
      styles,
      debug,
      boundingBox: { ...defaultState.boundingBox, ...boundingBox },
      restProps
    };
  },

  render({ context, element, localCoords }) {
    const { x, y } = localCoords;
    const { radius, startAngle, endAngle } = element;

    context.arc(x + radius, y + radius, radius, startAngle, endAngle);
    context.fill();
    context.stroke();
  },

  getDebugMessage(particle) {
    return `Pos :: ${particle.position.x}, ${particle.position.y}`;
  }
};

export default Particle;
