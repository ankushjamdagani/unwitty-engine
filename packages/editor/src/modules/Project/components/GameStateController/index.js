import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { IconButton, Stack, ButtonGroup, Divider } from '@chakra-ui/react';
import { constants } from '@unwitty/core';

import DataStoreContext from '../../../../dataStore/context';

import { Icon, Panel } from '../../../../components';

const { GAME_STATES } = constants;

const GameStateController = ({
  gameState,
  showRuler,
  toggleRuler,
  showGrid,
  toggleGrid,
  dragEnabled,
  toggleDrag
}) => {
  const gamePlaying = gameState === GAME_STATES.PLAY;
  const { engine } = useContext(DataStoreContext);

  return (
    <Panel>
      <Stack
        p={4}
        spacing={4}
        direction='row'
        align='center'
        borderRadius='1px'
      >
        <ButtonGroup
          isAttached
          size='sm'
          variant='ghost'
          isDisabled={gamePlaying}
        >
          <IconButton
            icon={
              showGrid ? (
                <Icon type='grid_on' size='lg' />
              ) : (
                <Icon type='grid_off' size='lg' />
              )
            }
            onClick={toggleGrid}
            aria-label='Toggle Grid'
            // borderRadius='none'
          />
          <IconButton
            aria-label='Toggle Ruler'
            icon={
              showRuler ? (
                <Icon type='straighten' size='lg' />
              ) : (
                <Icon type='subtitles_off' size='lg' />
              )
            }
            onClick={toggleRuler}
            borderRadius='none'
          />
          <IconButton
            aria-label='Toggle Drag'
            icon={
              dragEnabled ? (
                <Icon type='pan_tool' size='lg' />
              ) : (
                <Icon type='do_not_touch' size='lg' />
              )
            }
            onClick={toggleDrag}
            borderRadius='none'
          />
        </ButtonGroup>

        <Divider orientation='vertical' colorScheme='red' />

        <ButtonGroup isAttached size='sm' variant='ghost'>
          <IconButton
            aria-label='Previous tick'
            icon={<Icon type='undo' size='lg' />}
            onClick={() => engine.prevTick()}
            isDisabled={gamePlaying}
            borderRadius='none'
          />
          {(gameState === GAME_STATES.STOP ||
            gameState === GAME_STATES.PAUSE) && (
            <IconButton
              aria-label='Play'
              icon={<Icon type='play_arrow' size='2xl' />}
              variant='solid'
              colorScheme='yellow'
              onClick={() => engine.play()}
              borderRadius='none'
            />
          )}
          {gameState === GAME_STATES.PLAY && (
            <IconButton
              aria-label='Pause'
              icon={<Icon type='pause' size='2xl' />}
              variant='solid'
              colorScheme='yellow'
              onClick={() => engine.pause()}
              borderRadius='none'
            />
          )}
          <IconButton
            aria-label='Stop'
            icon={<Icon type='stop' size='lg' />}
            onClick={() => engine.stop()}
            borderRadius='none'
          />
          <IconButton
            aria-label='Next tick'
            icon={<Icon type='redo' size='lg' />}
            onClick={() => engine.nextTick()}
            isDisabled={gamePlaying}
            borderRadius='none'
          />
        </ButtonGroup>
      </Stack>
    </Panel>
  );
};

export default connect(state => ({
  gameState: state.engine_state?.core.gameState
}))(GameStateController);
