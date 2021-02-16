import React from 'react';
import { connect } from 'react-redux';
import { Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

import Panel from '../../molecules/Panel';

const FPSDebugger = ({ fps }) => (
  <Panel>
    <Flex
      p={4}
      bg='rgba(0, 0, 0, 0.1)'
      borderLeft='dashed 1px #ffffff38'
      borderBottom='dashed 1px #ffffff38'
      width='80px'
    >
      <Stat>
        <StatLabel fontSize='xs'>FPS</StatLabel>
        <StatNumber>{fps}</StatNumber>
      </Stat>
    </Flex>
  </Panel>
);

export default connect((state) => ({ fps: state.timing.fps }))(FPSDebugger);
