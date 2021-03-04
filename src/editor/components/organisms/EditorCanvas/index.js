import React from 'react';
import { connect } from 'react-redux';

import { GAME_STATES } from '../../../constants';

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
  const gameNotPlaying = gameState !== GAME_STATES.PLAY;
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
  activeSceneId: state.engine.core.activeSceneId,
  gameState: state.engine.core.gameState
}))(EditorCanvas);
