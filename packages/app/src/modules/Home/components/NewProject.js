import { Text, Flex, Box } from '@chakra-ui/react';

import AddIcon from '@material-ui/icons/Add';

function NewProject({ onClick }) {
  return (
    <Box
      maxW='sm'
      p='2'
      borderWidth='1px'
      rounded='md'
      bg='gray.800'
      cursor='pointer'
      onClick={() => onClick()}
    >
      <Flex
        h='120px'
        w='100%'
        rounded='md'
        _hover={{ bg: 'gray.900' }}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        p='2'
      >
        <AddIcon fontSize='large' />
        <Text mt='2'>New Project</Text>
      </Flex>
    </Box>
  );
}

export default NewProject;
