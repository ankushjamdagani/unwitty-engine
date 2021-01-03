import { useEffect } from 'react';
import { connect } from 'react-redux';

const Grid = ({
  entities,
  activeSceneId,
  canvasMap,
  engine,
  width,
  height
}) => {
  useEffect(() => {
    const showGrid = () => {
      const camera = entities[`camera_${activeSceneId}`];
      const ctx = canvasMap.get('base').get('context');

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';

      const gridMajorSize = 50;
      const gridMinorSize = 10;
      const gridMinorTicksCount = gridMajorSize / gridMinorSize;

      const startX = camera.position.x % gridMinorSize;
      const startY = camera.position.y % gridMinorSize;

      for (let i = 0; i < Math.ceil(width / gridMinorSize); i += 1) {
        const x = i * gridMinorSize;
        ctx.moveTo(startX + x, startY);
        ctx.lineTo(startX + x, height);
        if (Math.ceil(startX + i) % gridMinorTicksCount === 0) {
          ctx.moveTo(startX + x, startY);
          ctx.lineTo(startX + x, height);
        }
      }
      for (let j = 0; j < Math.ceil(height / gridMinorSize); j += 1) {
        const y = j * gridMinorSize;
        ctx.moveTo(startX, startY + y);
        ctx.lineTo(width, startY + y);

        if (Math.ceil(startY + j) % gridMinorTicksCount === 0) {
          ctx.moveTo(startX, startY + y);
          ctx.lineTo(width, startY + y);
        }
      }

      ctx.stroke();

      ctx.closePath();
    };
    engine.addEventListener('on_render', showGrid);
    return () => {
      engine.removeEventListener('on_render', showGrid);
    };
  }, [entities]);

  return null;
};

export default connect((state) => ({
  entities: state.entities,
  activeSceneId: state.core.activeSceneId,
  width: state.core.width,
  height: state.core.height,
  canvasMap: state.canvasMap
}))(Grid);
