import React from 'react';

import {
  FPSDebugger,
  GameStateController,
  SceneGraph
} from './components/organisms';
import { FlexBox } from './components/atoms';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
const App = ({ engine }) => (
  <FlexBox justifyContent='space-between' height='100%' alignItems='flex-start'>
    <FlexBox>
      <SceneGraph engine={engine} />
    </FlexBox>
    <FlexBox
      flexDirection='column'
      alignItems='flex-end'
      justifyContent='space-between'
      height='100%'
    >
      <FPSDebugger />
      <GameStateController engine={engine} />
    </FlexBox>
  </FlexBox>
);
export default App;
