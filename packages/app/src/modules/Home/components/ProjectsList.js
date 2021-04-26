import { useState } from 'react';

import { Heading, Grid, Box, Flex, Tag } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import ClearIcon from '@material-ui/icons/Clear';

import NewProject from './NewProject';
import ExistingProject from './ExistingProject';
import AddProject from './AddProject';
import ColorRadioSelect from './ColorRadioSelect';

import colors from '../constants/colors';

function ProjectsList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedColor, setSelectedColor] = useState('');
  const [projects, setProjects] = useState([
    { id: 1619442850092, name: 'Project 1', color: 'gray', thumb: null },
    { id: 1619442851703, name: 'Project 2', color: 'red', thumb: null },
    { id: 1619442853552, name: 'Project 3', color: 'green', thumb: null },
    { id: 1619443195452, name: 'asdasd', color: 'gray', thumb: null }
  ]);

  const onValidate = (type, value) => {
    switch (type) {
      case 'name':
        return value && !projects.filter(p => p.name === value).length;
      default:
        return true;
    }
  };

  const onSelectProject = key => {
    console.log(key);
  };

  const onSaveProject = project => {
    setProjects([...projects, project]);
    onClose();
  };

  const filteredProjects = !selectedColor
    ? projects
    : projects.filter(p => p.color === selectedColor);

  return (
    <>
      <Flex alignItems='center' flexWrap='wrap' justifyContent='space-between'>
        <Heading size='md' mb={4} mr={4}>
          Select Project
        </Heading>
        <Flex alignItems='center' mb={2}>
          {selectedColor && (
            <Tag
              onClick={() => setSelectedColor('')}
              cursor='pointer'
              mr={2}
              mb={2}
            >
              <ClearIcon fontSize='small' />
            </Tag>
          )}
          <ColorRadioSelect
            options={colors}
            name='filter-color'
            value={selectedColor}
            onChange={setSelectedColor}
          />
        </Flex>
      </Flex>
      <Box flex={1} overflow='auto'>
        <Grid
          templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
          gridGap={4}
        >
          <NewProject onClick={onOpen} />
          {filteredProjects.map(proj => (
            <ExistingProject
              key={proj.id}
              id={proj.id}
              name={proj.name}
              color={proj.color}
              thumbnail={
                proj.thumb ||
                'https://i.pinimg.com/236x/77/6d/47/776d471a75cd57ab23d63c893852cb4a.jpg'
              }
              onClick={onSelectProject}
            />
          ))}
        </Grid>
      </Box>
      {isOpen && (
        <AddProject
          onOpen={onOpen}
          onClose={onClose}
          onValidate={onValidate}
          onSave={onSaveProject}
        />
      )}
    </>
  );
}

export default ProjectsList;
