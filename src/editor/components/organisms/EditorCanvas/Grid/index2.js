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
  const {
    Entity: { Camera },
    instance
  } = engine;

  const {
    managers: { gridManager }
  } = instance;

  const camera = entities[`camera_${activeSceneId}`];

  useEffect(() => {
    const mountGrid = () => {
      const ctx = canvasMap.get('base').get('context');

      const gridMajorSize = gridSize;
      const gridMinorSize = gridMajorSize / minorTickCount;

      const indexPartialPos = Camera.getAbsolutePosition(
        { x: 0, y: 0 },
        camera
      );
      const indexGridPos = gridManager.getPixelPositionFromGrid(
        gridManager.getGridPositionFromPixel(indexPartialPos)
      );
      const indexExactPos = Camera.getRelativePosition(indexGridPos, camera);

      const { x: majorTickStartX, y: majorTickStartY } = indexExactPos;

      ctx.save();

      if (showGrid) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(119,119,119,0.13)';

        let xPos = majorTickStartX;
        for (let i = 0; xPos <= width; i += 1) {
          ctx.moveTo(xPos, 0);
          ctx.lineTo(xPos, height);

          if (i % minorTickCount === 0) {
            ctx.moveTo(xPos + 1, 0);
            ctx.lineTo(xPos + 1, height);
          }

          xPos += gridMinorSize;
        }

        let yPos = majorTickStartY;
        for (let i = 0; yPos <= height; i += 1) {
          ctx.moveTo(0, yPos);
          ctx.lineTo(width, yPos);

          if (i % minorTickCount === 0) {
            ctx.moveTo(0, yPos + 1);
            ctx.lineTo(width, yPos + 1);
          }

          yPos += gridMinorSize;
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

        let xPos = majorTickStartX;
        for (let i = 0; xPos <= width; i += 1) {
          ctx.moveTo(xPos, 0);
          ctx.lineTo(xPos, rulerMinorSize);

          if (i % minorTickCount === 0) {
            ctx.moveTo(xPos, 0);
            ctx.lineTo(xPos, rulerMajorSize);

            console.log(indexPartialPos);
            ctx.fillText(
              xPos + camera.position.x,
              xPos + 12,
              rulerMajorSize + 6
            );
          }

          xPos += gridMinorSize;
        }

        let yPos = majorTickStartY;
        for (let i = 0; yPos <= height; i += 1) {
          ctx.moveTo(0, yPos);
          ctx.lineTo(rulerMinorSize, yPos);

          if (i % minorTickCount === 0) {
            ctx.moveTo(0, yPos);
            ctx.lineTo(rulerMajorSize, yPos);
          }

          yPos += gridMinorSize;
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
