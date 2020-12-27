import React from 'react';
import { connect } from 'react-redux';

import FPSDebugger from './components/FPSDebugger';

const App = ({ fps }) => (
  <div
    style={{
      color: 'white'
    }}
  >
    <FPSDebugger fps={fps} />
  </div>
);
export default connect((state) => ({ fps: state.timer && state.timer.fps }))(
  App
);
