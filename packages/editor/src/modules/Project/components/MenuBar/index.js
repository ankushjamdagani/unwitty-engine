import { Flex, IconButton } from '@chakra-ui/react';

import { ORIENTATION } from '../../../../constants';

import Logo from './Logo';
import ProjectName from './ProjectName';
import ProjectsList from './ProjectsList';
import Preferences from './Preferences';
import Controls from './Controls';

import { PanelSticky, Icon } from '../../../../components';

const MenuBar = ({ projectConfig: { _id, color, name } }) => {
  return (
    <>
      <PanelSticky size='xs' orientation={ORIENTATION.HORIZONTAL}>
        <Flex alignItems='center'>
          <Logo />
          <ProjectsList activeProjectId={_id} />
          <Flex alignItems='center' mr='1'>
            <Icon type='chevron_right' size='xl' />
          </Flex>
          <ProjectName name={name} setName={console.log} />
        </Flex>
        <Flex flex='1' alignItems='center' ml='2' justifyContent='center'>
          <Controls />
        </Flex>
        <Flex alignItems='center' mr='2' justifyContent='flex-end'>
          <IconButton
            size='sm'
            variant='ghost'
            aria-label='Undo'
            icon={<Icon type='undo' size='xl' />}
            borderRadius='none'
            mr='1'
          />
          <IconButton
            size='sm'
            variant='ghost'
            aria-label='Redo'
            icon={<Icon type='redo' size='xl' />}
            borderRadius='none'
            mr='1'
          />
          <Preferences />
        </Flex>
      </PanelSticky>
      <PanelSticky
        size='xs'
        orientation={ORIENTATION.HORIZONTAL}
        background='gray.800'
      ></PanelSticky>
    </>
  );
};

export default MenuBar;
