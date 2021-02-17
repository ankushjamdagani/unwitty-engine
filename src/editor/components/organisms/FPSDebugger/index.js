import React from 'react';
import { connect } from 'react-redux';
import { Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

import Panel from '../../molecules/Panel';

const FPSDebugger = ({ fps, timeScale }) => (
  <Panel>
    <StatGroup
      p={4}
      bg='rgba(0, 0, 0, 0.1)'
      borderLeft='dashed 1px #ffffff38'
      borderBottom='dashed 1px #ffffff38'
      flexShrink={0}
      width='180px'
    >
      <Stat>
        <StatLabel fontSize='xs'>FPS</StatLabel>
        <StatNumber>{fps}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel fontSize='xs'>Time Scale</StatLabel>
        <StatNumber>{timeScale}</StatNumber>
      </Stat>
    </StatGroup>
  </Panel>
);

export default connect((state) => ({
  fps: state.timing.fps,
  timeScale: state.timing.timeScale
}))(FPSDebugger);
