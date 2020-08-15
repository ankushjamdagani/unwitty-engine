import { SHAPES, SHAPE_STYLES, GRADIENT_TYPES } from "../../constants";

const getPosition = (pos, camera) => ({
  x: pos.x - camera.position.x,
  y: pos.y - camera.position.y,
});

const Renderers = {
  [SHAPES.RECTANGLE]: {
    [SHAPE_STYLES.NONE]: (element, envProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { width, height } = element.props;

      context.rect(x, y, width, height);
    },
    [SHAPE_STYLES.NORMAL]: (element, envProps, renderProps) => {
      const { context, camera } = envProps;
      const { x, y } = getPosition(element.position, camera);
      const { width, height } = element.props;
      const { fillColor, strokeColor, strokeSize } = renderProps;

      context.fillStyle = fillColor || null;
      context.strokeStyle = strokeColor || null;
      context.lineWidth = strokeSize || 0;

      context.fillRect(x, y, width, height);

      context.stroke();
    },
    [SHAPE_STYLES.GRADIENT]: (element, envProps, renderProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { width, height } = element.props;
      const {
        gradientType,
        x1,
        y1,
        r1,
        x2,
        y2,
        r2,
        colorStops = [],
      } = renderProps;

      const grd = null;
      if (gradientType === GRADIENT_TYPES.RADIAL) {
        grd = context.createRadialGradient(x1, y1, r1, x2, y2, r2);
      } else {
        grd = context.createLinearGradient(x1, y1, x2, y2);
      }
      for (let i = 0; i < colorStops.length; I++) {
        // grd.addColorStop(offset, color);
        grd.addColorStop(colorStops[0], colorStops[1]);
      }
      context.fillStyle = grd;
      context.fillRect(x, y, width, height);
    },
    [SHAPE_STYLES.PATTERN]: (element, envProps, renderProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { width, height } = element.props;
      const { image, repeat = "no-repeat" } = renderProps;

      const pattern = context.createPattern(image, repeat);
      context.fillStyle = pattern;

      context.fillRect(x, y, width, height);
    },
  },
  [SHAPES.ARC]: {
    [SHAPE_STYLES.NONE]: (envProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;

      context.arc(x, y, radius, sAngle, eAngle);
    },
    [SHAPE_STYLES.NORMAL]: (element, envProps, renderProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;
      const { fillColor, strokeColor, strokeSize } = renderProps;

      context.fillColor = fillColor || null;
      context.strokeStyle = strokeColor || null;
      context.lineWidth = strokeSize || 0;

      context.arc(x, y, radius, sAngle, eAngle);

      context.fill();
      context.stroke();
    },
    [SHAPE_STYLES.GRADIENT]: (element, envProps, renderProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;
      const {
        gradientType,
        x1,
        y1,
        r1,
        x2,
        y2,
        r2,
        colorStops = [],
      } = renderProps;

      const grd = null;
      if (gradientType === GRADIENT_TYPES.RADIAL) {
        grd = context.createRadialGradient(x1, y1, r1, x2, y2, r2);
      } else {
        grd = context.createLinearGradient(x1, y1, x2, y2);
      }
      for (let i = 0; i < colorStops.length; I++) {
        // grd.addColorStop(offset, color);
        grd.addColorStop(colorStops[0], colorStops[1]);
      }
      context.fillStyle = grd;

      context.arc(x, y, radius, sAngle, eAngle);

      context.fill();
    },
    [SHAPE_STYLES.PATTERN]: (element, envProps, renderProps) => {
      const { context } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;
      const { image, repeat = "no-repeat" } = renderProps;

      const pattern = context.createPattern(image, repeat);
      context.fillStyle = pattern;

      context.arc(x, y, radius, sAngle, eAngle);
      context.fill();
    },
  },
};

export default Renderers;
