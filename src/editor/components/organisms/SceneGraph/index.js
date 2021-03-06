import React from 'react';
import { connect } from 'react-redux';
import { Text, Box, Stack } from '@chakra-ui/react';

import Panel from '../../molecules/Panel';

const Node = ({ nodeId, entities, active, onClick }) => {
  const activeNode = entities[nodeId];
  return (
    <Box pl={4}>
      <Box
        as='button'
        onClick={onClick}
        className={`${onClick ? 'showCursor' : ''} ${active ? 'active' : ''} `}
        sx={{
          borderBottom: 'dotted 1px white',
          pointerEvents: 'none',
          cursor: 'pointer',
          '&.active': {
            color: 'black',
            background: 'white'
          },
          '&.showCursor': {
            pointerEvents: 'all'
          }
        }}
      >
        <Text>{activeNode.label}</Text>
      </Box>

      {activeNode.children && (
        <>
          {activeNode.children.map((id) => (
            <Node key={id} nodeId={id} entities={entities} />
          ))}
        </>
      )}
    </Box>
  );
};

const SceneGraph = ({ entities, activeSceneId, engine }) => {
  const scenes = Object.values(entities).filter(
    (node) => node.type === 'scene'
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
        {scenes.map((sc) => (
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

export default connect((state) => ({
  entities: state.entities,
  activeSceneId: state.core.activeSceneId
}))(SceneGraph);
