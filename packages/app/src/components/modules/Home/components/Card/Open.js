import { Text, Box, Flex } from '@chakra-ui/react';

function Open({ id }) {
  return (
    <Flex
      flexShrink={0}
      mr={4}
      w={120}
      h={120}
      bg='gray.700'
      alignItems='flex-end'
      justifyContent='flex-start'
    >
      <Text fontSize='sm' p={1} bg='red.500' mb={2} mr={2} w='100%'>
        #{id} Test Project
      </Text>
    </Flex>
  );
}

export default Open;
