import { Heading, Grid, GridItem, Avatar } from '@chakra-ui/react';

import { Icon } from '../../molecules';

import Emoji from 'a11y-react-emoji';

function Home() {
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
        rowSpan={[2, null, 5, 4]}
        rowStart={[1, null, null, 2]}
        bg='gray.900'
        px={6}
        py={4}
      >
        <Heading>
          <Emoji symbol='🚀' label='a rocket blasting off' /> @unwitty
        </Heading>
        <br />
        <Icon.Github boxSize={5} color='white' size={16} />
      </GridItem>
      {/* <GridItem
        colStart={[1, null, 6, 6]}
        colSpan={[8, null, 3, 2]}
        rowSpan={[4, null, 5, 4]}
        rowStart={[3, null, 1, 2]}
        bg='gray.800'
        px={6}
        py={4}
      >
        <Text>Hello</Text>
      </GridItem> */}
      <GridItem
        colSpan={[8, null, null, 6]}
        colStart={[1, null, null, 2]}
        rowSpan={[2, null, 3, 2]}
        bg='gray.900'
        px={6}
        py={4}
      >
        <Heading size='sm'>Projects List</Heading>
      </GridItem>
    </Grid>
  );
}

export default Home;
