import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Heading, Grid, Box, Flex, Tag } from '@chakra-ui/react';
import ClearIcon from '@material-ui/icons/Clear';

import ProjectAPI from '../../../api/project';

import { ColorRadioSelect } from '../../_shared';
import NewProject from './New';
import LoadingProject from './Loading';
import ExistingProject from './Existing';

import colors from '../../../constants/colors';

function ProjectsList() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('');
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    ProjectAPI.listProjects().then(resp => {
      setProjects(resp.data || []);
    });
  }, []);

  const onSelectProject = key => {
    router.push('/project/' + (key || ''));
  };

  const filteredProjects = !selectedColor
    ? projects
    : projects?.filter(p => p.color === selectedColor);

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
          <NewProject onClick={onSelectProject} />
          {filteredProjects ? (
            filteredProjects.map(proj => (
              <ExistingProject
                key={proj.slug}
                id={proj.slug}
                name={proj.name}
                color={proj.color}
                thumbnail={
                  proj.thumb ||
                  'https://i.pinimg.com/236x/77/6d/47/776d471a75cd57ab23d63c893852cb4a.jpg'
                }
                onClick={onSelectProject}
              />
            ))
          ) : (
            <LoadingProject />
          )}
        </Grid>
      </Box>
    </>
  );
}

export default ProjectsList;
