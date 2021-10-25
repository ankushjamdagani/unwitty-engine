import { Flex, Text } from '@chakra-ui/react';

function Logo() {
  return (
    <Flex
      height='100%'
      alignItems='center'
      justifyContent='center'
      px='2'
      background='#5cba90'
      _hover={{ background: 'bgSecondary' }}
    >
      <Text fontWeight='bold' letterSpacing='widest'>
        Unwitty
      </Text>
    </Flex>
  );
}

export default Logo;
