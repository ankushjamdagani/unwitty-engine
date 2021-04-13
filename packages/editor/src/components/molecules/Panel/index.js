import React from 'react';
import { Flex } from '@chakra-ui/react';

const Panel = ({ children, ...rest }) => (
  <Flex zIndex='111' {...rest}>
    {children}
  </Flex>
);

export default Panel;
