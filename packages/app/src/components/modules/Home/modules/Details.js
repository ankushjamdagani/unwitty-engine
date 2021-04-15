import { Heading, Text, Code, Box, Flex, Link } from '@chakra-ui/react';

import { Icon } from '../../../shared';

import Emoji from 'a11y-react-emoji';

function Details() {
  return (
    <Flex flexDirection='column' justifyContent='space-between' h='100%'>
      <Box>
        <Heading>
          <Emoji symbol='🚀' label='a rocket blasting off' /> @unwitty
        </Heading>
        <Box mt={4} px={[null, null, 12]}>
          <Code
            p={[2, 4]}
            colorScheme='purple'
            variant='outline'
            w='100%'
            mb={4}
          >
            <Emoji symbol='🌟' label='awesome sparkles' /> Creating and managing
            games was never this easier.
          </Code>
          <Code p={[2, 4]} colorScheme='purple' variant='outline' w='100%'>
            <Emoji symbol='🌟' label='awesome sparkles' /> Now with portability
            of a website.
          </Code>
        </Box>
      </Box>
      <Flex alignItems='center' pt={12} px={[null, null, 12]}>
        <Link
          href='https://github.com/ankushjamdagani/unwitty-engine'
          isExternal
        >
          <Icon.Github boxSize={5} color='white' size={16} />
          <Text ml={2} as='span'>
            Source
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Details;
