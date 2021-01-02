import React from 'react';
import { connect } from 'react-redux';
import { FlexBox, Button } from '__COMPONENTS/atoms';

const GameStateController = ({ gameState, activeSceneId, engine }) => (
  <FlexBox p={4} alignItems='center' justifyContent='flex-end' zIndex='111'>
    <Button
      text='defaultScene'
      buttonStyle={activeSceneId === 'defaultScene' ? 'filled' : 'outline'}
      px={2}
      onClick={() => {
        engine.changeActiveScene('defaultScene');
      }}
      mr={1}
      color='text'
    />
    <Button
      text='defaultScene1'
      buttonStyle={activeSceneId === 'defaultScene1' ? 'filled' : 'outline'}
      px={2}
      onClick={() => {
        engine.changeActiveScene('defaultScene1');
      }}
      mr={1}
      color='text'
    />
    <Button
      title='Previous tick'
      icon='undo'
      onClick={() => engine.prevTick()}
      mr={1}
      color='text'
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
    />
  </FlexBox>
);

export default connect((state) => ({
  gameState: state.core.gameState,
  activeSceneId: state.core.activeSceneId
}))(GameStateController);
