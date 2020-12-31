import React from 'react';
import { connect } from 'react-redux';

const GameStateController = ({ ganeState, engine }) => {
  const cb = () => engine.nextTick();
  return (
    <button onClick={cb} type='button'>
      {ganeState}
    </button>
  );
};

export default connect((state) => ({ ganeState: state.core.ganeState }))(
  GameStateController
);
