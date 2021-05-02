import { useContext, useCallback } from 'react';
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
  const { key, engine } = useContext(DataStoreContext);

  const onDragChange = useCallback(
    ({ deltaX, deltaY }) => {
      DataStore.setData(entities => {
        entities[`camera_${activeSceneId}`].position.x -= deltaX;
        entities[`camera_${activeSceneId}`].position.y -= deltaY;
      }, 'entities');
    },
    [activeSceneId]
  );

  useMouseDrag(dragEnabled && gameNotPlaying, {
    activeSceneId,
    onChange: onDragChange
  });

  return (
    <>
      {gameNotPlaying && engine && (
        <Grid
          gameKey={key}
          showRuler={showRuler}
          showGrid={showGrid}
          engine={engine}
        />
      )}
    </>
  );
};

export default connect(state => ({
  activeSceneId: state.engine_state?.core.activeSceneId,
  gameState: state.engine_state?.core.gameState
}))(EditorCanvas);
