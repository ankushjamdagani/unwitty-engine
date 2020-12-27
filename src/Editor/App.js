import React from 'react';
import { connect } from 'react-redux';

import FPSDebugger from './components/FPSDebugger';

const App = ({ engine, ...props }) => (
  <div
    style={{
      color: 'white'
    }}
  >
    <FPSDebugger fps={props.timer && props.timer.fps} />
  </div>
);
export default connect((state) => state)(App);
