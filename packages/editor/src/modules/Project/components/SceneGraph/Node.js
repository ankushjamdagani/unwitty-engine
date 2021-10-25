import { Text, Box } from '@chakra-ui/react';

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
          {activeNode.children.map(id => (
            <Node key={id} nodeId={id} entities={entities} />
          ))}
        </>
      )}
    </Box>
  );
};

export default Node;
