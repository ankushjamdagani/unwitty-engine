import React from 'react';
import { connect } from 'react-redux';

import useCanvasDrag from '../../../helperHooks/useCanvasDrag';

import Grid from './Grid';

const EditorCanvas = ({
  engine,
  gameState,
  activeSceneId,
  showGrid,
  showRuler,
  dragEnabled
}) => {
  const gameNotPlaying = gameState !== 'PLAY';
  useCanvasDrag(dragEnabled && gameNotPlaying, { activeSceneId });

  return (
    <>
      {gameNotPlaying && (
        <Grid engine={engine} showRuler={showRuler} showGrid={showGrid} />
      )}
    </>
  );
};

export default connect((state) => ({
  activeSceneId: state.core.activeSceneId,
  gameState: state.core.gameState
}))(EditorCanvas);
