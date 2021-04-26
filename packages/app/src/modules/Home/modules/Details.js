import { Heading, Text, Grid, Box, Flex, Link } from '@chakra-ui/react';

import { Icon } from '../../../components';

import NewProject from '../components/NewProject';
import ExistingProject from '../components/ExistingProject';

import Emoji from 'a11y-react-emoji';

function Details() {
  const onClick = key => {
    console.log(key);
  };

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
        <Heading size='md' mb={4}>
          Select Project
        </Heading>
        <Box flex={1} overflow='auto'>
          <Grid
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
            gridGap={4}
          >
            <NewProject onClick={onClick} />
            {Array.from(new Array(4)).map((val, key) => (
              <ExistingProject
                key={key}
                id={key}
                name={`${key + Math.floor(Math.random() * 1000)} Test Project`}
                color='red'
                thumbnail='https://i.pinimg.com/236x/77/6d/47/776d471a75cd57ab23d63c893852cb4a.jpg'
                onClick={onClick}
              />
            ))}
          </Grid>
        </Box>
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
