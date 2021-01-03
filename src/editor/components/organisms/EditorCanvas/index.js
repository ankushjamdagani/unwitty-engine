import React from 'react';
import { connect } from 'react-redux';

import useCanvasDrag from '../../../helperHooks/useCanvasDrag';

import Grid from './Grid';

const EditorCanvas = ({
  engine,
  gameState,
  activeSceneId,
  showGrid,
  dragEnabled
}) => {
  const gameNotPlaying = gameState !== 'PLAY';
  useCanvasDrag(dragEnabled && gameNotPlaying, { activeSceneId });

  return <>{showGrid && gameNotPlaying && <Grid engine={engine} />}</>;
};

export default connect((state) => ({
  activeSceneId: state.core.activeSceneId,
  gameState: state.core.gameState
}))(EditorCanvas);
