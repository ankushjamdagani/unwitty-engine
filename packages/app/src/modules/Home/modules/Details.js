import { Heading, Text, Box, Flex, Link } from '@chakra-ui/react';

import Emoji from 'a11y-react-emoji';

import { Icon } from '../../../components';

import ProjectsList from '../components/ProjectsList';

function Details() {
  return (
    <Flex flexDirection='column' height='100%'>
      <Heading mb={4}>
        <Emoji symbol='🚀' label='a rocket blasting off' /> @unwitty
      </Heading>

      <Box mb={8} px={[null, null, 12]}>
        <Text
          fontFamily='mono'
          fontWeight='semibold'
          px={2}
          fontSize={14}
          bg='gray.100'
          color='gray.900'
          as='span'
          mb={1}
        >
          Creating and managing games was never this easier.
        </Text>
        <br />
        <Text
          px={2}
          fontFamily='mono'
          fontWeight='semibold'
          fontSize={14}
          bg='gray.100'
          color='gray.900'
          as='span'
        >
          Now with portability of a website.
        </Text>
      </Box>

      <Flex
        mb={8}
        pl={[null, null, 12]}
        flex={1}
        overflow='hidden'
        flexDirection='column'
      >
        <ProjectsList />
      </Flex>

      <Flex alignItems='center' px={[null, null, 12]}>
        <Link
          href='https://github.com/ankushjamdagani/unwitty-engine'
          isExternal
        >
          <Icon.Github
            boxSize={5}
            color='white'
            size={16}
            _hover={{ color: 'gray.400' }}
          />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Details;
