import { Heading, Box, Flex } from '@chakra-ui/react';

import Card from '../components/Card';

function ProjectsList() {
  return (
    <Flex h='100%' flexDirection={'column'}>
      <Heading size='sm'>Select Project</Heading>
      <Flex
        flex='1'
        py={4}
        flexDirection={['column', null, 'row']}
        h='calc(100% - 20px)'
        // alignItems='center'
        justifyContent='center'
      >
        <Box mr={[null, null, 4]} pb={4}>
          <Card.Create />
        </Box>
        <Flex w='100%' overflow='auto' flex={1} pb={4}>
          <Flex w='100%'>
            {Array.from(new Array(10)).map((val, key) => (
              <Card.Open id={key} key={key} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectsList;
