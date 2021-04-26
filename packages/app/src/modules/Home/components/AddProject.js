import { useRef, useState } from 'react';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from '@chakra-ui/react';

import ColorRadioSelect from './ColorRadioSelect';

import colors from '../constants/colors';

function AddProject({ onOpen, onClose, onSave, onValidate }) {
  const initialRef = useRef();
  const id = Date.now();
  const [name, setName] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [error, setError] = useState('');

  const _onSave = () => {
    if (onValidate('name', name)) {
      onSave({
        id,
        name,
        color,
        thumb: null
      });
    } else {
      setError('Project name empty or same name already exists.');
    }
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent bg='gray.800'>
        <ModalHeader>Create New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isInvalid={error}>
            <FormLabel isRequired>Name</FormLabel>
            <Input
              ref={initialRef}
              placeholder='Project Name'
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => setError('')}
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
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='white' mr={3} size='sm' onClick={_onSave}>
            Save
          </Button>
          <Button onClick={onClose} size='sm'>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddProject;
