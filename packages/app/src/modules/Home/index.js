import { Grid, GridItem } from '@chakra-ui/react';

import Sidebar from './modules/Sidebar';
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
        rowSpan={[null, null, 8, 6]}
        rowStart={[null, null, null, 2]}
        bg='gray.900'
        p={6}
      >
        <Details />
      </GridItem>
      <GridItem
        colStart={[1, null, 6, 6]}
        colSpan={[8, null, 3, 2]}
        rowSpan={[null, null, 8, 6]}
        rowStart={[null, null, 1, 2]}
        bg='gray.900'
        p={6}
      >
        <Sidebar />
      </GridItem>
    </Grid>
  );
}

export default Home;
