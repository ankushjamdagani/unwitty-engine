import { useState, useRef } from 'react';
import {
  Text,
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input
} from '@chakra-ui/react';
import EditIcon from '@material-ui/icons/Edit';

import Popover from '../../../_shared/Popover';

const ProjectName = ({ name, setName }) => {
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');
  const initialRef = useRef();

  return (
    <Popover
      isOpen={editing}
      initialFocusRef={initialRef}
      onClose={() => setEditing(false)}
      placement='bottom-start'
      trigger={
        <Flex alignItems='center' onClick={() => setEditing(true)}>
          <Text
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textDecoration={editing ? 'underline' : 'initial'}
          >
            {name}
          </Text>
        </Flex>
      }
      content={
        <Box p='4'>
          <FormControl isInvalid={error}>
            <FormLabel>
              <Flex alignItems='center'>
                <EditIcon style={{ fontSize: 18 }} />
                <Text ml='1'>Edit Name</Text>
              </Flex>
            </FormLabel>
            <Input
              type='text'
              ref={initialRef}
              placeholder='Project Name'
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => error && setError('')}
              autoFocus
              size='sm'
              pattern='^[A-Za-z0-9 ]+$'
              borderRadius='sm'
              height='32px'
              _focus={{
                borderColor: 'gray.500'
              }}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Flex alignItems='center' justifyContent='flex-end' mt='4'>
            <Button size='sm' variant='ghost' mr='2'>
              Cancel
            </Button>
            <Button size='sm' variant='outline'>
              Save
            </Button>
          </Flex>
        </Box>
      }
    />
  );
};

export default ProjectName;
