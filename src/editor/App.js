import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import {
  FPSDebugger,
  GameStateController,
  SceneGraph,
  EditorCanvas
} from './components/organisms';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
const App = ({ engine }) => {
  const [showGrid, setShowGrid] = useState(true);
  const [showRuler, setShowRuler] = useState(true);
  const [dragEnabled, setDragEnabled] = useState(true);

  return (
    <>
      <Flex
        justifyContent='space-between'
        height='100%'
        alignItems='flex-start'
      >
        <Flex
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='space-between'
          height='100%'
        >
          <SceneGraph engine={engine} />
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='flex-end'
          justifyContent='space-between'
          height='100%'
        >
          <FPSDebugger />
          <GameStateController
            engine={engine}
            showRuler={showRuler}
            showGrid={showGrid}
            dragEnabled={dragEnabled}
            toggleGrid={() => setShowGrid(!showGrid)}
            toggleRuler={() => setShowRuler(!showRuler)}
            toggleDrag={() => setDragEnabled(!dragEnabled)}
          />
        </Flex>
      </Flex>
      <EditorCanvas
        engine={engine}
        showGrid={showGrid}
        showRuler={showRuler}
        dragEnabled={dragEnabled}
      />
    </>
  );
};
export default App;
