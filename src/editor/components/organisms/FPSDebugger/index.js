import React from 'react';
import { connect } from 'react-redux';
import { Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

import { GAME_STATES } from '../../../constants';

import Panel from '../../molecules/Panel';

const FPSDebugger = ({ fps, timeScale, gameState }) => (
  <Panel>
    <StatGroup
      p={4}
      pb={2}
      bg='rgba(0, 0, 0, 0.1)'
      borderLeft='dashed 1px #ffffff38'
      borderBottom='dashed 1px #ffffff38'
      flexShrink={0}
      width='180px'
    >
      <Stat>
        <StatLabel fontSize='xs'>FPS</StatLabel>
        <StatNumber>{gameState === GAME_STATES.PLAY ? fps : '-'}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel fontSize='xs'>Time Scale</StatLabel>
        <StatNumber>
          {gameState === GAME_STATES.PLAY ? timeScale : '-'}
        </StatNumber>
      </Stat>
    </StatGroup>
  </Panel>
);

export default connect((state) => ({
  fps: state.engine.timing.fps,
  timeScale: state.engine.timing.timeScale,
  gameState: state.engine.core.gameState
}))(FPSDebugger);
