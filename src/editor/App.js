import React from 'react';

import { FPSDebugger, GameStateController } from './components/organisms';
import { FlexBox } from './components/atoms';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
const App = ({ engine }) => (
  <FlexBox
    flexDirection='column'
    alignItems='flex-end'
    justifyContent='space-between'
    height='100%'
  >
    <FPSDebugger />
    <GameStateController engine={engine} />
  </FlexBox>
);
export default App;
