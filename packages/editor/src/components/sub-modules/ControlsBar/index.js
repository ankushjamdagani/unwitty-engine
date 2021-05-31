import { IconButton, Box, Flex, Tooltip } from '@chakra-ui/react';

import { Icon } from '../../_shared';

const ControlsBar = ({
  orientation = 'vertical',
  // selectedOption = '',
  // onOptionSelect = () => {},
  onDragStart,
  ...props
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <Flex
      zIndex='111'
      background='gray.700'
      _hover={{ background: 'gray.900' }}
      draggable
      onMouseDown={e => e.stopPropagation()}
      onDragStart={e => onDragStart(e, 'CONTROLS_BAR')}
      {...props}
      {...{
        flexDirection: isHorizontal ? 'row' : 'column',
        [isHorizontal ? 'width' : 'height']: '80%',
        [isHorizontal ? 'height' : 'width']: '40px'
      }}
    >
      <Flex p='2' alignItems='center' justifyContent='center' cursor='pointer'>
        <Box
          {...{
            [isHorizontal ? 'borderLeft' : 'borderTop']: '1px',
            [isHorizontal ? 'height' : 'width']: '100%'
          }}
        />
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        p='1'
        flex='1'
        overflow='auto'
        background='gray.700'
        {...{
          flexDirection: isHorizontal ? 'row' : 'column'
        }}
      >
        {'..............'.split('').map((c, i) => (
          <Tooltip
            key={i}
            label='Previous tick'
            aria-label='Previous tick'
            placement={isHorizontal ? 'top' : 'right'}
          >
            <IconButton
              size='sm'
              variant='ghost'
              aria-label='Previous tick'
              icon={<Icon type='add' size='lg' />}
              borderRadius='none'
            />
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default ControlsBar;
