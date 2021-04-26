import { Text, Flex, Box } from '@chakra-ui/react';

import LaunchIcon from '@material-ui/icons/Launch';

function ExistingProject({ id, name, color, thumbnail, onClick }) {
  return (
    <Box
      maxW='sm'
      p='2'
      borderWidth='2px'
      rounded='md'
      borderColor={`${color}.400`}
      overflow='hidden'
      backgroundPosition='center'
      background={`url("${thumbnail}")`}
      backgroundSize='cover'
      cursor='pointer'
      onClick={() => onClick(id)}
    >
      <Flex
        alignItems='flex-end'
        h='120px'
        w='100%'
        rounded='md'
        _hover={{ bg: 'blackAlpha.500' }}
        p='2'
      >
        <Flex alignItems='center' bg='gray.800' px='2'>
          <Text mr='2'>{name}</Text>
          <LaunchIcon fontSize='small' />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ExistingProject;
