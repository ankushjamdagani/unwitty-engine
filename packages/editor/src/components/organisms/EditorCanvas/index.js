import React, { useContext, useCallback } from 'react';
import { connect } from 'react-redux';

import { constants, DataStore } from '@unwitty/core';

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
  const gameNotPlaying = gameState !== constants.GAME_STATES.PLAY;
  const { key } = useContext(DataStoreContext);

  const onDragChange = useCallback(({ deltaX, deltaY }) => {
    DataStore.setData(entities => {
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
        <Grid gameKey={key} showRuler={showRuler} showGrid={showGrid} />
      )}
    </>
  );
};

export default connect(state => ({
  activeSceneId: state.engine_state.core.activeSceneId,
  gameState: state.engine_state.core.gameState
}))(EditorCanvas);
