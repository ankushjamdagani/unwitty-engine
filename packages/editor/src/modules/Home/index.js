import {
  Heading,
  Text,
  Box,
  Flex,
  List,
  ListItem,
  Link,
  Grid,
  GridItem
} from '@chakra-ui/react';
import LaunchIcon from '@material-ui/icons/Launch';
import Emoji from 'a11y-react-emoji';

import { SvgIcon } from '../../components';
import ProjectsList from './modules/ProjectsList';

import DOCS_LINKS from '../../constants/docs-links';

export default function IndexPage() {
  return (
    <Grid
      templateColumns='repeat(8, 1fr)'
      templateRows='repeat(8, 1fr)'
      gap={4}
      w='100%'
      h='100%'
    >
      <GridItem
        colStart={[1, null, null, 2]}
        colSpan={[8, null, 5, 4]}
        rowSpan={[null, null, 8, 6]}
        rowStart={[null, null, null, 2]}
        bg='gray.900'
        p={6}
      >
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
              <SvgIcon.Github
                boxSize={5}
                color='white'
                size={16}
                _hover={{ color: 'gray.400' }}
              />
            </Link>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem
        colStart={[1, null, 6, 6]}
        colSpan={[8, null, 3, 2]}
        rowSpan={[null, null, 8, 6]}
        rowStart={[null, null, 1, 2]}
        bg='gray.900'
        p={6}
      >
        <Box>
          <Heading size='md' mb={4}>
            Learn
          </Heading>
          <List spacing={3}>
            {DOCS_LINKS.map(dl => (
              <ListItem key={dl.label}>
                <LaunchIcon style={{ fontSize: 18 }} />
                <Link href={dl.url} ml={2}>
                  {dl.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </GridItem>
    </Grid>
  );
}
