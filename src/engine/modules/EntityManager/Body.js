import { SHAPES, ENTITY_NODE_TYPES } from '../../constants';
import Commons from '../core/Commons';

import Node from './_node';

const defaultState = {
  shape: SHAPES.RECTANGLE,
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
const Body = {
  ...Node,

  create(props) {
    const {
      shape = defaultState.shape,
      width,
      height,
      radius,
      startAngle,
      endAngle,
      vertices,
      eddges,

      position = defaultState.position,

      styles, // backgroundColor, backgroundImage, backgroundGradient, borderColor, borderSize

      canvasId,
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
      width,
      height,
      radius,
      startAngle,
      endAngle,
      vertices,
      eddges,
      position,
      styles,
      canvasId,
      debug,
      boundingBox: { ...defaultState.boundingBox, ...boundingBox },
      restProps
    };
  },

  onAddChildren(parent, child) {
    if (!parent.position || !child.position) {
      return parent;
    }

    const {
      position: cPosition,
      boundingBox: { margins: cBoundingBoxMargin },
      width: cWidth,
      height: cHeight
    } = child;
    const {
      position: pPosition,
      boundingBox: { margins: pBoundingBoxMargin },
      width: pWidth,
      height: pHeight
    } = parent;

    const xMin = Commons.minimum(
      pPosition.x - pBoundingBoxMargin[3],
      cPosition.x - cBoundingBoxMargin[3]
    );
    const yMin = Commons.minimum(
      pPosition.y - pBoundingBoxMargin[0],
      cPosition.y - cBoundingBoxMargin[0]
    );

    const xMax = Commons.maximum(
      pPosition.x + pWidth + pBoundingBoxMargin[1],
      cPosition.x + cWidth + cBoundingBoxMargin[1]
    );
    const yMax = Commons.maximum(
      pPosition.y + pHeight + pBoundingBoxMargin[2],
      cPosition.y + cHeight + cBoundingBoxMargin[2]
    );

    return {
      ...parent,
      boundingBox: {
        ...parent.boundingBox,
        margins: [
          pPosition.y - yMin,
          xMax - (pPosition.x + pWidth),
          yMax - (pPosition.y + pHeight),
          pPosition.x - xMin
        ]
      }
    };
  },

  getDebugMessage(body) {
    return `Pos :: ${body.position.x}, ${body.position.y}`;
  },

  createArc({
    radius,
    startAngle = 0,
    endAngle = Math.PI * 2,
    position,
    ...restProps
  }) {
    return Body.create({
      shape: SHAPES.ARC,
      width: 2 * radius,
      height: 2 * radius,
      startAngle,
      endAngle,
      radius,
      position,
      ...restProps
    });
  },

  createRectangle({ width, height, position, ...restProps }) {
    return Body.create({
      shape: SHAPES.RECTANGLE,
      width,
      height,
      position,
      ...restProps
    });
  },

  createPolygon({ vertices, eddges, position, ...restProps }) {
    let minX = 0;
    let minY = 0;

    let maxX = 0;
    let maxY = 0;

    vertices.forEach(([x, y]) => {
      minX = Commons.minimum(x, minX);
      maxX = Commons.maximum(x, maxX);

      minY = Commons.minimum(y, minY);
      maxY = Commons.maximum(y, maxY);
    });
    return Body.create({
      shape: SHAPES.POLYGON,
      width: maxX - minX,
      height: maxY - minY,
      position,
      vertices,
      eddges,
      ...restProps
    });
  }
};

export default Body;
