import { useState } from 'react';

import {
  Flex,
  IconButton,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react';

import { Icon } from '../../../../../components';

const Preferences = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <IconButton
        size='sm'
        variant='ghost'
        aria-label='Preferences Menu'
        icon={<Icon type='menu' size='xl' />}
        borderRadius='none'
        onClick={() => setOpen(true)}
      />
      {isOpen && (
        <Modal onClose={() => setOpen(false)} isOpen={true} size='4xl'>
          <ModalOverlay />
          <ModalContent>
            <Flex
              h='600px'
              alignItems='stretch'
              justifyContent='center'
              background='bgPrimary'
            >
              <Flex
                width='280px'
                borderRightColor='borderSecondary'
                borderRightWidth='1px'
              ></Flex>
              <Flex flex='1' alignItems='center' justifyContent='center'>
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
