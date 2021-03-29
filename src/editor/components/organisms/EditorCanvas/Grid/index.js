import { useEffect } from 'react';
import { connect } from 'react-redux';

const minorTickCount = 5;
const rulerMajorSize = 12;
const rulerMinorSize = 6;

const Grid = ({
  showRuler,
  showGrid,
  entities,
  activeSceneId,
  gridSize,
  canvasMap,
  engine,
  width,
  height
}) => {
  const { instance } = engine;

  useEffect(() => {
    const mountGrid = () => {
      const camera = entities[`camera_${activeSceneId}`];
      const ctx = canvasMap.get('base').get('context');

      const gridMajorSize = gridSize;
      const gridMinorSize = gridMajorSize / minorTickCount;

      const minorTickStartX =
        gridMinorSize - (camera.position.x % gridMinorSize);
      const minorTickStartY =
        gridMinorSize - (camera.position.y % gridMinorSize);
      const majorTickStartX = -camera.position.x % gridMajorSize;
      const majorTickStartY = -camera.position.y % gridMajorSize;

      const columnCount = Math.ceil(width / gridMinorSize);
      const rowsCount = Math.ceil(height / gridMinorSize);

      ctx.save();

      if (showGrid) {
        ctx.beginPath();
        // ctx.strokeStyle = 'rgba(119,119,119,0.13)';
        ctx.strokeStyle = 'rgba(119,119,119,0.13)';
        for (let i = 0; i < columnCount; i += 1) {
          const x = i * gridMinorSize - gridMinorSize;
          ctx.moveTo(minorTickStartX + x, 0);
          ctx.lineTo(minorTickStartX + x, height);

          if (!(x % gridMajorSize)) {
            ctx.moveTo(majorTickStartX + x + 1, 0);
            ctx.lineTo(majorTickStartX + x + 1, height);
          }
        }
        for (let j = 0; j < rowsCount; j += 1) {
          const y = j * gridMinorSize - gridMinorSize;
          ctx.moveTo(0, minorTickStartY + y);
          ctx.lineTo(width, minorTickStartY + y);

          if (!(y % gridMajorSize)) {
            ctx.moveTo(0, majorTickStartY + y + 1);
            ctx.lineTo(width, majorTickStartY + y + 1);
          }
        }
        ctx.stroke();
        ctx.closePath();
      }

      if (showRuler) {
        ctx.beginPath();
        ctx.strokeStyle = '#777';

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#777';

        ctx.textAlign = 'center';
        for (let i = 0; i < columnCount; i += 1) {
          const x = i * gridMinorSize - gridMinorSize;
          ctx.moveTo(minorTickStartX + x, 0);
          ctx.lineTo(minorTickStartX + x, rulerMinorSize);

          const showMajorTick = !(x % gridMajorSize);
          const showMajorTickLabel = !(
            (camera.position.x + majorTickStartX + x) %
            (2 * gridMajorSize)
          );

          if (showMajorTick) {
            ctx.moveTo(majorTickStartX + x, rulerMinorSize);
            ctx.lineTo(majorTickStartX + x, rulerMajorSize);
          }
          if (showMajorTickLabel) {
            ctx.fillText(
              camera.position.x + majorTickStartX + x,
              majorTickStartX + x + 12,
              rulerMajorSize + 6
            );
          }
        }

        ctx.textAlign = 'left';
        for (let j = 0; j < rowsCount; j += 1) {
          const y = j * gridMinorSize - gridMinorSize;
          ctx.moveTo(0, minorTickStartY + y);
          ctx.lineTo(rulerMinorSize, minorTickStartY + y);

          const showMajorTick = !(y % gridMajorSize);
          const showMajorTickLabel = !(
            (camera.position.y + majorTickStartY + y) %
            (2 * gridMajorSize)
          );

          if (showMajorTick) {
            ctx.moveTo(rulerMinorSize, majorTickStartY + y);
            ctx.lineTo(rulerMajorSize, majorTickStartY + y);
          }
          if (showMajorTickLabel) {
            ctx.fillText(
              camera.position.y + majorTickStartY + y,
              rulerMajorSize,
              majorTickStartY + y + 12
            );
          }
        }
        ctx.stroke();
        ctx.closePath();
      }

      ctx.restore();
    };
    instance.addEventListener('on_render', mountGrid);
    return () => {
      instance.removeEventListener('on_render', mountGrid);
    };
  }, [entities, showGrid, showRuler]);

  return null;
};

export default connect((state) => ({
  entities: state.engine_state.entities,
  activeSceneId: state.engine_state.core.activeSceneId,
  gridSize: state.engine_state.core.gridSize,
  width: state.engine_state.core.width,
  height: state.engine_state.core.height,
  canvasMap: state.engine_state.canvasMap
}))(Grid);
