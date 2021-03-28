import React, { useContext, useCallback } from 'react';
import { connect } from 'react-redux';

import { GAME_STATES } from '../../../constants';

import DataStoreContext from '../../../dataStore/context';

import useMouseDrag from '../../../helperHooks/useMouseDrag';

import Grid from './Grid';

const EditorCanvas = ({
  gameState,
  activeSceneId,
  showGrid,
  showRuler,
  dragEnabled
}) => {
  const gameNotPlaying = gameState !== GAME_STATES.PLAY;
  const { DataStore, engine } = useContext(DataStoreContext);

  const onDragChange = useCallback(({ deltaX, deltaY }) => {
    DataStore.setData((entities) => {
      entities[`camera_${activeSceneId}`].position.x -= deltaX;
      entities[`camera_${activeSceneId}`].position.y -= deltaY;
    }, 'entities');
  });

  useMouseDrag(dragEnabled && gameNotPlaying, {
    activeSceneId,
    onChange: onDragChange
  });

  return (
    <>
      {gameNotPlaying && (
        <Grid engine={engine} showRuler={showRuler} showGrid={showGrid} />
      )}
    </>
  );
};

export default connect((state) => ({
  activeSceneId: state.engine_state.core.activeSceneId,
  gameState: state.engine_state.core.gameState
}))(EditorCanvas);
