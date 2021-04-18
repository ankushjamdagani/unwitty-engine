import {
  Heading,
  Text,
  Tag,
  TagLabel,
  Box,
  Flex,
  Link
} from '@chakra-ui/react';

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import { Icon } from '../../../components';

import Emoji from 'a11y-react-emoji';

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

      <Box mb={8} px={[null, null, 12]} flex={1} overflow='hidden'>
        <Heading size='md' mb={4}>
          Select Project
        </Heading>
        <Box flex={1} overflow='auto' h='100%' minHeight={0}>
          <Box>
            <Tag py={2} mb={4} borderRadius='1' variant='subtle'>
              <Link href='#'>
                <NoteAddIcon style={{ fontSize: 16 }} />
                <TagLabel ml={1}>Create New</TagLabel>
              </Link>
            </Tag>

            {Array.from(new Array(4)).map((val, key) => (
              <Box mb={4} key={key}>
                <InsertDriveFileIcon style={{ fontSize: 16 }} />
                <Link href='#' ml={1}>
                  {key + Math.floor(Math.random() * 1000)} Test Project
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

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
