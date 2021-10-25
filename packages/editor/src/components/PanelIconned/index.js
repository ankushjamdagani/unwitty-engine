import { Flex, Tooltip, IconButton } from '@chakra-ui/react';

import { ORIENTATION } from '../../constants';
import Panel from '../Panel';
import Icon from '../Icon';

const validSizes = ['xs', 'sm'];

function getValidSize(size) {
  return size && validSizes.includes(size) ? size : 'xs';
}

function IconnedPanel({ options, size, orientation, ...rest }) {
  const _size = getValidSize(size);
  return (
    <Panel
      contentRenderer={() =>
        options.map(item => (
          <Tooltip
            key={item.id}
            label={item.label}
            aria-label={item.label}
            placement={orientation === ORIENTATION.HORIZONTAL ? 'top' : 'right'}
          >
            <Flex p='1' alignItems='center' justifyContent='center'>
              <IconButton
                size='sm'
                variant='ghost'
                aria-label={item.label}
                icon={<Icon type={item.icon} size='xl' />}
                _hover={{ background: 'bgSecondary' }}
                borderRadius='none'
              />
            </Flex>
          </Tooltip>
        ))
      }
      size={_size}
      orientation={ORIENTATION.VERTICAL}
      {...rest}
    />
  );
}

export default IconnedPanel;
