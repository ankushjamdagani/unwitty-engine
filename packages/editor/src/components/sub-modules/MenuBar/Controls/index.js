import { useContext } from 'react';
import { connect } from 'react-redux';
import { constants } from '@unwitty/core';

import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared';

import DataStoreContext from '../../../../dataStore/context';

const { GAME_STATES } = constants;

const Controls = ({ gameState }) => {
  const gamePlaying = gameState === GAME_STATES.PLAY;
  const { engine } = useContext(DataStoreContext);

  return (
    <>
      <IconButton
        size='sm'
        variant='ghost'
        aria-label='Previous tick'
        icon={<Icon type='undo' size='lg' />}
        onClick={() => engine.prevTick()}
        isDisabled={gamePlaying}
        borderRadius='none'
      />
      {(gameState === GAME_STATES.STOP || gameState === GAME_STATES.PAUSE) && (
        <IconButton
          size='sm'
          aria-label='Play'
          icon={<Icon type='play_arrow' size='2xl' />}
          variant='ghost'
          colorScheme='yellow'
          onClick={() => engine.play()}
          borderRadius='none'
        />
      )}
      {gameState === GAME_STATES.PLAY && (
        <IconButton
          size='sm'
          aria-label='Pause'
          icon={<Icon type='pause' size='2xl' />}
          variant='ghost'
          colorScheme='yellow'
          onClick={() => engine.pause()}
          borderRadius='none'
        />
      )}
      <IconButton
        size='sm'
        variant='ghost'
        aria-label='Stop'
        icon={<Icon type='stop' size='lg' />}
        onClick={() => engine.stop()}
        borderRadius='none'
      />
      <IconButton
        size='sm'
        variant='ghost'
        aria-label='Next tick'
        icon={<Icon type='redo' size='lg' />}
        onClick={() => engine.nextTick()}
        isDisabled={gamePlaying}
        borderRadius='none'
      />
    </>
  );
};

export default connect(state => ({
  gameState: state.engine_state?.core.gameState
}))(Controls);
