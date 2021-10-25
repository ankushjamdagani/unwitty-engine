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

import { Icon, Popover } from '../../../../../components';

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
        <Button
          onClick={() => setEditing(true)}
          variant='link'
          size='sm'
          textDecoration={editing ? 'underline' : 'initial'}
          height='32px'
        >
          {name}
        </Button>
      }
      content={
        <Box p='4'>
          <FormControl isInvalid={error}>
            <FormLabel>
              <Flex alignItems='center'>
                <Icon type='edit' size='xl' />
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
                borderColor: 'borderPrimary'
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
