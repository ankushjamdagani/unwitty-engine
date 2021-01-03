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

      const gridMajorSize = 50;
      const gridMinorSize = 10;
      const rulerMajorSize = 12;
      const rulerMinorSize = 6;

      const gridMinorTicksCount = gridMajorSize / gridMinorSize;

      const startX = camera.position.x % gridMinorSize;
      const startY = camera.position.y % gridMinorSize;

      const columnCount = Math.floor(width / gridMinorSize);
      const rowsCount = Math.floor(height / gridMinorSize);

      ctx.save();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      for (let i = 0; i < columnCount; i += 1) {
        const x = i * gridMinorSize;
        ctx.moveTo(startX + x, startY);
        ctx.lineTo(startX + x, height);
        if (Math.floor(startX + i) % gridMinorTicksCount === 0) {
          ctx.moveTo(startX + x, startY);
          ctx.lineTo(startX + x, height);
        }
      }
      for (let j = 0; j < rowsCount; j += 1) {
        const y = j * gridMinorSize;
        ctx.moveTo(startX, startY + y);
        ctx.lineTo(width, startY + y);

        if (Math.floor(startY + j) % gridMinorTicksCount === 0) {
          ctx.moveTo(startX, startY + y);
          ctx.lineTo(width, startY + y);
        }
      }
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,1)';

      ctx.font = '10px monospace';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';

      for (let i = 0; i < columnCount; i += 1) {
        const x = i * gridMinorSize;
        const gridStartX = startX + x;

        ctx.moveTo(gridStartX, 0);
        ctx.lineTo(gridStartX, rulerMinorSize);
        if (Math.floor(startX + i) % gridMinorTicksCount === 0) {
          ctx.moveTo(gridStartX, rulerMinorSize);
          ctx.lineTo(gridStartX, rulerMajorSize);
          ctx.fillText(i, gridStartX, rulerMajorSize + 10);
        }
      }
      for (let j = 0; j < rowsCount; j += 1) {
        const y = j * gridMinorSize;
        const gridStartY = startY + y;

        ctx.moveTo(0, gridStartY);
        ctx.lineTo(rulerMinorSize, gridStartY);
        if (Math.floor(startY + j) % gridMinorTicksCount === 0) {
          ctx.moveTo(rulerMinorSize, gridStartY);
          ctx.lineTo(rulerMajorSize, gridStartY);
          ctx.fillText(j, rulerMajorSize + 10, gridStartY + 4);
        }
      }
      ctx.stroke();
      ctx.closePath();

      ctx.restore();
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
