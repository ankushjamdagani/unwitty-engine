import { Text, Flex } from '@chakra-ui/react';

function Create() {
  return (
    <Flex
      w={['100%', null, 120]}
      h={120}
      bg='gray.200'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      cursor='pointer'
      _hover={{
        background: 'gray.100'
      }}
    >
      <Text color='gray.900' fontWeight='bold' fontSize='4xl' lineHeight='6'>
        +
      </Text>
      <Text color='gray.900'>New Project</Text>
    </Flex>
  );
}

export default Create;
