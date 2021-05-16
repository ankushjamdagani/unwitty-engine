import { Flex, Box } from '@chakra-ui/react';

import { Spinner } from '@chakra-ui/react';

function LoadingProject() {
  return (
    <Box
      maxW='sm'
      p='2'
      borderWidth='1px'
      rounded='md'
      bg='gray.800'
      cursor='pointer'
      overflow='hidden'
    >
      <Flex
        h='120px'
        w='100%'
        _hover={{ bg: 'gray.900' }}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        p='2'
      >
        <Spinner />
      </Flex>
    </Box>
  );
}

export default LoadingProject;
