import { Flex, Button } from '@chakra-ui/react';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ProjectName from './ProjectName';
import ProjectsList from './ProjectsList';

const MenuBar = ({ projectConfig: { _id, color, name } }) => {
  return (
    <Flex
      zIndex='111111'
      width='100%'
      background='gray.900'
      justifyContent='space-between'
      alignItems='stretch'
      height='40px'
    >
      <Flex alignItems='stretch' ml='2'>
        <Flex
          _hover={{ background: 'gray.700' }}
          p='1'
          px='2'
          cursor='pointer'
          alignItems='center'
        >
          <MenuIcon style={{ fontSize: 18 }} />
        </Flex>
        <ProjectsList ml='2' activeProjectId={_id} />
        <Flex alignItems='center' mx='1'>
          <ChevronRightIcon style={{ fontSize: 18 }} />
        </Flex>
        <ProjectName name={name} setName={console.log} />
      </Flex>
      <Flex alignItems='stretch' mr='2'>
        <Flex alignItems='center'>
          <Button
            size='sm'
            variant='ghost'
            _hover={{ background: 'blue.600' }}
            mr='2'
          >
            Save
          </Button>
          <Button size='sm' variant='ghost' _hover={{ background: 'red.600' }}>
            Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuBar;
