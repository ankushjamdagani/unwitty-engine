import { Grid, GridItem } from '@chakra-ui/react';

import Random from './modules/Random';
import ProjectsList from './modules/ProjectsList';
import Details from './modules/Details';

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
        rowSpan={[null, null, 5, 4]}
        rowStart={[null, null, null, 2]}
        bg='gray.900'
        // bg='red.900'
        px={6}
        py={4}
      >
        <Details />
      </GridItem>
      <GridItem
        colStart={[1, null, 6, 6]}
        colSpan={[8, null, 3, 2]}
        rowSpan={[null, null, 5, 4]}
        rowStart={[null, null, 1, 2]}
        // bg='green.900'
        bg='gray.900'
        px={6}
        py={4}
      >
        <Random />
      </GridItem>
      <GridItem
        colSpan={[8, null, null, 6]}
        colStart={[1, null, null, 2]}
        rowSpan={[null, null, 3, 2]}
        // bg='blue.900'
        bg='gray.900'
        px={6}
        py={4}
      >
        <ProjectsList />
      </GridItem>
    </Grid>
  );
}

export default Home;
