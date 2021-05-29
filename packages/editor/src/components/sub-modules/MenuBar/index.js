import { Flex, IconButton } from '@chakra-ui/react';

import ProjectName from './ProjectName';
import ProjectsList from './ProjectsList';
import Preferences from './Preferences';
import Controls from './Controls';

import { Icon } from '../../_shared';

const MenuBar = ({ projectConfig: { _id, color, name } }) => {
  return (
    <Flex
      zIndex='111111'
      width='100%'
      background='gray.900'
      alignItems='stretch'
      height='40px'
    >
      <Flex alignItems='center' ml='2' width='30%'>
        <Preferences />
        <ProjectsList activeProjectId={_id} />
        <Flex alignItems='center' mr='1'>
          <Icon type='chevron_right' size='lg' />
        </Flex>
        <ProjectName name={name} setName={console.log} />
      </Flex>
      <Flex flex='1' alignItems='center' ml='2' justifyContent='center'>
        <Controls />
      </Flex>
      <Flex alignItems='center' mr='2' width='30%' justifyContent='flex-end'>
        <IconButton
          size='sm'
          variant='ghost'
          aria-label='Save'
          _hover={{ background: 'blue.600' }}
          icon={<Icon type='save' size='lg' />}
          borderRadius='none'
          mr='2'
        />
        <IconButton
          size='sm'
          variant='ghost'
          aria-label='Delete'
          _hover={{ background: 'red.600' }}
          icon={<Icon type='delete' size='lg' />}
          borderRadius='none'
        />
      </Flex>
    </Flex>
  );
};

export default MenuBar;
