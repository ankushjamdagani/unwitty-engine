import React from 'react';
import { connect } from 'react-redux';

import FPSDebugger from './components/FPSDebugger';
import GameStateController from './components/GameStateController';

const App = ({ timeManager: { fps }, engine }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'column',
      height: '100%'
    }}
  >
    <FPSDebugger fps={fps} />
    <GameStateController engine={engine} />
  </div>
);
export default connect((state) => ({ timeManager: state.timeManager }))(App);
