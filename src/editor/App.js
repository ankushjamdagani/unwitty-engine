import React from 'react';
import { connect } from 'react-redux';

import { FPSDebugger, GameStateController } from './components/organisms';
import { FlexBox } from './components/atoms';

const App = ({ timeManager: { fps }, engine }) => (
  <FlexBox
    flexDirection='column'
    alignItems='flex-end'
    justifyContent='space-between'
    height='100%'
  >
    <FPSDebugger fps={fps} />
    <GameStateController engine={engine} />
  </FlexBox>
);
export default connect((state) => ({ timeManager: state.timeManager }))(App);
