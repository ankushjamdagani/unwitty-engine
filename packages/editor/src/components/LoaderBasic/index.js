import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export default function LoaderBasic() {
  const [ctr, setCtr] = useState(30);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCtr((ctr + Math.random() * 2) % 100);
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, [ctr]);

  return (
    <Flex
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'
      position='absolute'
      zIndex='1111111111'
      background='gray.800'
      flexDirection='column'
    >
      <Box w='320px' background='gray.600' borderRadius='2xl' overflow='hidden'>
        <Box
          w={`${ctr}%`}
          h='1'
          background='yellow.400'
          transition='all'
          transitionDuration='.25s'
        ></Box>
      </Box>
    </Flex>
  );
}
