import { SHAPES, SHAPE_STYLES, GRADIENT_TYPES } from "../../constants";

const getPosition = (pos, camera) => ({
  x: pos.x - camera.position.x,
  y: pos.y - camera.position.y,
});

const Renderers = {
  [SHAPES.RECTANGLE]: {
    [SHAPE_STYLES.NONE]: (element, envProps) => {
      const { ctx } = envProps;
      const { x, y } = element.position;
      const { width, height } = element.props;

      ctx.rect(x, y, width, height);
    },
    [SHAPE_STYLES.NORMAL]: (element, envProps, renderProps) => {
      const { ctx, camera } = envProps;
      const { x, y } = getPosition(element.position, camera);
      const { width, height } = element.props;
      const { fillColor, strokeColor, strokeSize } = renderProps;

      ctx.fillStyle = fillColor || null;
      ctx.strokeStyle = strokeColor || null;
      ctx.lineWidth = strokeSize || 0;

      ctx.fillRect(x, y, width, height);

      ctx.stroke();
    },
    [SHAPE_STYLES.GRADIENT]: (element, envProps, renderProps) => {
      const { ctx } = envProps;
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
        grd = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
      } else {
        grd = ctx.createLinearGradient(x1, y1, x2, y2);
      }
      for (let i = 0; i < colorStops.length; I++) {
        // grd.addColorStop(offset, color);
        grd.addColorStop(colorStops[0], colorStops[1]);
      }
      ctx.fillStyle = grd;
      ctx.fillRect(x, y, width, height);
    },
    [SHAPE_STYLES.PATTERN]: (element, envProps, renderProps) => {
      const { ctx } = envProps;
      const { x, y } = element.position;
      const { width, height } = element.props;
      const { image, repeat = "no-repeat" } = renderProps;

      const pattern = ctx.createPattern(image, repeat);
      ctx.fillStyle = pattern;

      ctx.fillRect(x, y, width, height);
    },
  },
  [SHAPES.ARC]: {
    [SHAPE_STYLES.NONE]: (envProps) => {
      const { ctx } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;

      ctx.arc(x, y, radius, sAngle, eAngle);
    },
    [SHAPE_STYLES.NORMAL]: (element, envProps, renderProps) => {
      const { ctx } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;
      const { fillColor, strokeColor, strokeSize } = renderProps;

      ctx.fillColor = fillColor || null;
      ctx.strokeStyle = strokeColor || null;
      ctx.lineWidth = strokeSize || 0;

      ctx.arc(x, y, radius, sAngle, eAngle);

      ctx.fill();
      ctx.stroke();
    },
    [SHAPE_STYLES.GRADIENT]: (element, envProps, renderProps) => {
      const { ctx } = envProps;
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
        grd = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
      } else {
        grd = ctx.createLinearGradient(x1, y1, x2, y2);
      }
      for (let i = 0; i < colorStops.length; I++) {
        // grd.addColorStop(offset, color);
        grd.addColorStop(colorStops[0], colorStops[1]);
      }
      ctx.fillStyle = grd;

      ctx.arc(x, y, radius, sAngle, eAngle);

      ctx.fill();
    },
    [SHAPE_STYLES.PATTERN]: (element, envProps, renderProps) => {
      const { ctx } = envProps;
      const { x, y } = element.position;
      const { radius, sAngle, eAngle } = element.props;
      const { image, repeat = "no-repeat" } = renderProps;

      const pattern = ctx.createPattern(image, repeat);
      ctx.fillStyle = pattern;

      ctx.arc(x, y, radius, sAngle, eAngle);
      ctx.fill();
    },
  },
};

export default Renderers;
