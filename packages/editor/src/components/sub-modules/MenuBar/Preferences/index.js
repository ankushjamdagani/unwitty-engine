import { useState } from 'react';

import {
  Flex,
  IconButton,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react';

import { Icon } from '../../../_shared';

const Preferences = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <IconButton
        size='sm'
        variant='ghost'
        aria-label='Preferences Menu'
        icon={<Icon type='menu' size='lg' />}
        borderRadius='none'
        onClick={() => setOpen(true)}
      />
      {isOpen && (
        <Modal onClose={() => setOpen(false)} isOpen={true} size='4xl'>
          <ModalOverlay />
          <ModalContent>
            <Flex h='600px' alignItems='stretch' justifyContent='center'>
              <Flex width='280px' background='gray.900'></Flex>
              <Flex
                flex='1'
                alignItems='center'
                justifyContent='center'
                background='gray.800'
              >
                <Spinner />
              </Flex>
            </Flex>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Preferences;
