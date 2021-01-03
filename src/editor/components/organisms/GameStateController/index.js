import React from 'react';
import { connect } from 'react-redux';
import { FlexBox, Button } from '__COMPONENTS/atoms';

const GameStateController = ({
  gameState,
  engine,
  showGrid,
  toggleGrid,
  dragEnabled,
  toggleDrag
}) => {
  const gamePlaying = gameState === 'PLAY';
  return (
    <FlexBox p={4} alignItems='center' justifyContent='flex-end' zIndex='111'>
      <Button
        title='Toggle Drag'
        icon={dragEnabled ? 'pan_tool' : 'do_not_touch'}
        onClick={toggleDrag}
        mr={4}
        color='text'
        hideVisually={gamePlaying}
        buttonSize='sm'
      />
      <Button
        title='Toggle Grid'
        icon={showGrid ? 'grid_on' : 'grid_off'}
        onClick={toggleGrid}
        mr={4}
        color='text'
        hideVisually={gamePlaying}
        buttonSize='sm'
      />
      <Button
        title='Previous tick'
        icon='undo'
        onClick={() => engine.prevTick()}
        mr={1}
        color='text'
        hideVisually={gamePlaying}
      />
      {(gameState === 'STOP' || gameState === 'PAUSE') && (
        <Button
          title='Play'
          icon='play_arrow'
          onClick={() => engine.play()}
          mr={1}
          round
          height={5}
          width={5}
          buttonStyle='filled'
          color='text'
        />
      )}
      {gameState === 'PLAY' && (
        <Button
          title='Pause'
          icon='pause'
          onClick={() => engine.pause()}
          mr={1}
          round
          height={5}
          width={5}
          buttonStyle='filled'
          color='text'
        />
      )}
      <Button
        title='Stop'
        icon='stop'
        onClick={() => engine.stop()}
        mr={1}
        color='text'
      />
      <Button
        title='Next tick'
        icon='redo'
        onClick={() => engine.nextTick()}
        color='text'
        hideVisually={gamePlaying}
      />
    </FlexBox>
  );
};

export default connect((state) => ({
  gameState: state.core.gameState
}))(GameStateController);
