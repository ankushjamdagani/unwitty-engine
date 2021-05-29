import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import {
  Box,
  Text,
  Flex,
  Spinner,
  Tag,
  Input,
  Button,
  IconButton
} from '@chakra-ui/react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Popover, ColorRadioSelect, Icon } from '../../../_shared';

import ProjectAPI from '../../../../api/project';
import colors from '../../../../constants/colors';

const ProjectsList = ({ activeProjectId, ...props }) => {
  const router = useRouter();
  const initialRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [searchText, setSearchText] = useState('');
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    isOpen &&
      !projects &&
      ProjectAPI.listProjects().then(resp => {
        setProjects(resp.data || []);
      });
  }, [isOpen, projects]);

  const onSelectProject = key => {
    router.push('/project/' + (key || ''));
  };

  const filteredProjects =
    !selectedColor && !searchText
      ? projects
      : projects?.filter(p => {
          const colorMatched = selectedColor ? p.color === selectedColor : true;
          const stringMatch = searchText ? p.slug.includes(searchText) : true;

          return colorMatched && stringMatch;
        });

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      placement='bottom-start'
      initialFocusRef={initialRef}
      trigger={
        <IconButton
          size='sm'
          variant='ghost'
          aria-label='Preferences Menu'
          icon={
            isOpen ? (
              <Icon type='folder' size='lg' />
            ) : (
              <Icon type='folder_open' size='lg' />
            )
          }
          isActive={isOpen}
          borderRadius='none'
          onClick={() => setOpen(true)}
          {...props}
        />
      }
      content={
        <Flex maxHeight='60vh' minHeight='240px' py='2'>
          <Flex
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'
            px='1'
            borderRightStyle='solid'
            borderRightWidth='1px'
            borderRightColor='gray.700'
          >
            <Flex flexDirection='column'>
              <Button
                size='sm'
                variant='ghost'
                w='4'
                borderRadius='sm'
                title='New Project'
                onClick={() => onSelectProject(null)}
              >
                <Icon type='note_add' size='xl' />
              </Button>
            </Flex>

            <Flex>
              <Button
                size='sm'
                variant='ghost'
                w='4'
                borderRadius='sm'
                title='Reload Projects'
                onClick={() => setProjects(null)}
              >
                <Icon type='replay' size='xl' />
              </Button>
            </Flex>
          </Flex>
          <Flex flexDirection='column' flex='1' py='2'>
            <Flex alignItems='center' justifyContent='space-between' px='4'>
              <Text mb='2' mr='4'>
                Select Project
              </Text>
              <Flex alignItems='center'>
                {selectedColor && (
                  <Tag
                    onClick={() => setSelectedColor('')}
                    cursor='pointer'
                    mr={2}
                    mb={2}
                    size='sm'
                    px='1'
                  >
                    <Icon type='clear' size='sm' />
                  </Tag>
                )}
                <ColorRadioSelect
                  options={colors}
                  name='filter-color'
                  value={selectedColor}
                  onChange={setSelectedColor}
                  radioProps={{ size: '10px' }}
                />
              </Flex>
            </Flex>
            <Box position='relative' px='4'>
              <Input
                type='text'
                ref={initialRef}
                placeholder='Search...'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                autoFocus
                size='sm'
                height='32px'
                pattern='^[A-Za-z0-9 ]+$'
                _focus={{
                  borderColor: 'gray.500'
                }}
              />
              {searchText && (
                <Tag
                  onClick={() => setSearchText('')}
                  cursor='pointer'
                  size='sm'
                  px='1'
                  position='absolute'
                  right='6'
                  top='6px'
                >
                  <Icon type='clear' size='sm' />
                </Tag>
              )}
            </Box>
            <Box pt='2' overflow='auto' flex='1'>
              {filteredProjects ? (
                filteredProjects.map(proj => {
                  const isActive = activeProjectId == proj._id;
                  return (
                    <Flex
                      key={proj.slug}
                      onClick={() =>
                        isActive ? null : onSelectProject(proj.slug)
                      }
                      alignItems='center'
                      justifyContent='space-between'
                      cursor={isActive ? 'initial' : 'pointer'}
                      background={isActive ? 'gray.700' : 'transparent'}
                      _hover={{
                        textDecoration: isActive ? 'none' : 'underline'
                      }}
                      py='1'
                      px='4'
                    >
                      <Flex alignItems='center' flex='1'>
                        <ChevronRightIcon style={{ fontSize: 18 }} />
                        <Text ml='1'>{proj.name}</Text>
                      </Flex>
                      <Box
                        borderRadius='full'
                        background={`${proj.color}.400`}
                        w='2'
                        h='2'
                        mr='1'
                      />
                    </Flex>
                  );
                })
              ) : (
                <Flex
                  h='100%'
                  w='100%'
                  _hover={{ bg: 'gray.900' }}
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                  p='2'
                >
                  <Spinner />
                </Flex>
              )}
            </Box>
          </Flex>
        </Flex>
      }
      contentProps={{ w: '340px' }}
    />
  );
};

export default ProjectsList;
