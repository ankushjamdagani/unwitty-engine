import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Heading,
  Button,
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  ScaleFade
} from '@chakra-ui/react';
import { ColorRadioSelect } from '../../components/_shared';

import colors from '../../constants/colors';

import ProjectAPI from '../../api/project';

const defaultProjectConfig = {
  core: {
    smoothImage: false,
    timeScale: 1,
    fps: 60,
    debug: true,
    gridSize: 50
  }
};

export default function AddProjectPage() {
  const initialRef = useRef();
  const [name, setName] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [error, setError] = useState('');

  const router = useRouter();

  const onCancel = () => {
    router.push('/');
  };

  const onSave = async e => {
    e.preventDefault();
    try {
      if (!name) {
        throw new Error('Project name empty or same name already exists.');
      }

      const slug = name.toLowerCase().replaceAll(' ', '-');
      const resp = await ProjectAPI.saveProject({
        slug,
        name,
        color,
        thumb: null,
        config: {
          engine: {
            ...defaultProjectConfig,
            core: {
              key: slug,
              ...defaultProjectConfig.core
            }
          },
          editor: {}
        }
      });

      router.push({ pathname: '/project/' + resp.data.slug });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      height='100%'
      width='100%'
    >
      <Container>
        <ScaleFade initialScale={0.9} in={true}>
          <Box
            bg='gray.800'
            borderWidth='1px'
            background='gray.900'
            p={6}
            borderRadius='lg'
            animation='ease-in'
          >
            <form onSubmit={onSave}>
              <Heading size='md'>Create New Project</Heading>
              <Divider my={4} />
              <Box pb={6}>
                <FormControl isInvalid={error}>
                  <FormLabel isRequired>Name</FormLabel>
                  <Input
                    type='text'
                    ref={initialRef}
                    placeholder='Project Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={() => error && setError('')}
                    autoFocus
                    pattern='^[A-Za-z0-9 ]+$'
                    _focus={{
                      borderColor: 'white'
                    }}
                  />
                  <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Color</FormLabel>
                  <ColorRadioSelect
                    options={colors}
                    name='color'
                    value={color}
                    onChange={setColor}
                  />
                </FormControl>
              </Box>
              <Flex flexDirection='row-reverse'>
                <Button onClick={onCancel} size='sm'>
                  Cancel
                </Button>
                <Button colorScheme='white' mr={3} size='sm' type='submit'>
                  Save
                </Button>
              </Flex>
            </form>
          </Box>
        </ScaleFade>
      </Container>
    </Flex>
  );
}
