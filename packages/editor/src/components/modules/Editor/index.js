import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import {
  FPSDebugger,
  GameStateController,
  SceneGraph,
  EditorCanvas
} from '../../sub-modules';

import DataStoreContext from '../../../dataStore/context';

export default function Editor({ projectId, engine }) {
  const [showGrid, setShowGrid] = useState(true);
  const [showRuler, setShowRuler] = useState(true);
  const [dragEnabled, setDragEnabled] = useState(true);

  const loading = !engine;

  return (
    <>
      <DataStoreContext.Provider value={{ key: projectId, engine }}>
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
            <SceneGraph isLoading={loading} />
          </Flex>
          <Flex
            flexDirection='column'
            alignItems='flex-end'
            justifyContent='space-between'
            height='100%'
          >
            <FPSDebugger isLoading={loading} />
            <GameStateController
              showRuler={showRuler}
              showGrid={showGrid}
              dragEnabled={dragEnabled}
              toggleGrid={() => setShowGrid(!showGrid)}
              toggleRuler={() => setShowRuler(!showRuler)}
              toggleDrag={() => setDragEnabled(!dragEnabled)}
              isLoading={loading}
            />
          </Flex>
        </Flex>
        <EditorCanvas
          showGrid={showGrid}
          showRuler={showRuler}
          dragEnabled={dragEnabled}
          isLoading={loading}
        />
      </DataStoreContext.Provider>
    </>
  );
}
