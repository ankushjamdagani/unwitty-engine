import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const GameStateController = ({ gameState, engine }) => (
  <div className='game-state-controller'>
    <div
      onClick={() => engine.prevTick()}
      onKeyDown={() => engine.prevTick()}
      className='game-state-button mr-2'
      role='button'
      tabIndex={0}
    >
      <i className='material-icons'>undo</i>
    </div>
    {gameState === 'PAUSE' && (
      <div
        onClick={() => engine.play()}
        onKeyDown={() => engine.play()}
        className='game-state-button game-state-big-button game-state-round-button game-state-white-button'
        role='button'
        tabIndex={0}
      >
        <i className='material-icons'>play_arrow</i>
      </div>
    )}
    {gameState === 'PLAY' && (
      <div
        onClick={() => engine.pause()}
        onKeyDown={() => engine.pause()}
        className='game-state-button game-state-big-button game-state-round-button game-state-white-button'
        role='button'
        tabIndex={0}
      >
        <i className='material-icons'>pause</i>
      </div>
    )}
    <div
      onClick={() => engine.play()}
      onKeyDown={() => engine.play()}
      className='game-state-button game-state-big-button'
      role='button'
      tabIndex={0}
    >
      <i className='material-icons'>stop</i>
    </div>
    <div
      onClick={() => engine.nextTick()}
      onKeyDown={() => engine.nextTick()}
      className='game-state-button'
      role='button'
      tabIndex={0}
    >
      <i className='material-icons'>redo</i>
    </div>
  </div>
);
export default connect((state) => ({ gameState: state.core.gameState }))(
  GameStateController
);
