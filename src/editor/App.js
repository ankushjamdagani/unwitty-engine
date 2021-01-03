import React, { useState } from 'react';

import {
  FPSDebugger,
  GameStateController,
  SceneGraph,
  Grid
} from './components/organisms';
import { FlexBox } from './components/atoms';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
const App = ({ engine }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <FlexBox
      justifyContent='space-between'
      height='100%'
      alignItems='flex-start'
    >
      <FlexBox
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='space-between'
        height='100%'
      >
        <SceneGraph engine={engine} />
      </FlexBox>
      <FlexBox
        flexDirection='column'
        alignItems='flex-end'
        justifyContent='space-between'
        height='100%'
      >
        <FPSDebugger />
        <GameStateController
          engine={engine}
          showGrid={showGrid}
          toggleGrid={() => setShowGrid(!showGrid)}
        />
      </FlexBox>
      {showGrid && <Grid engine={engine} />}
    </FlexBox>
  );
};
export default App;
