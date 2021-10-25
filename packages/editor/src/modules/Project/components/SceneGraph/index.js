import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Stack } from '@chakra-ui/react';

import DataStoreContext from '../../../../dataStore/context';

import { Panel } from '../../../../components';
import Node from './Node';

const SceneGraph = ({ entities, activeSceneId, isLoading }) => {
  const { engine } = useContext(DataStoreContext);

  const scenes = Object.values(entities || []).filter(
    node => node.type === 'scene'
  );

  return (
    <Panel height='100%'>
      <Stack
        p={4}
        pl={0}
        h='100%'
        w='250px'
        align='flex-start'
        background='rgba(0, 0, 0, 0.1)'
        fontFamily='monospace'
        borderRight='dashed 1px #ffffff38'
      >
        {isLoading
          ? 'Loading...'
          : scenes.map(sc => (
              <Node
                key={sc.id}
                nodeId={sc.id}
                entities={entities}
                active={activeSceneId === sc.id}
                onClick={() => {
                  engine.changeActiveScene(sc.id);
                }}
              />
            ))}
      </Stack>
    </Panel>
  );
};

export default connect(state => ({
  entities: state.engine_state?.entities,
  activeSceneId: state.engine_state?.core.activeSceneId
}))(SceneGraph);
