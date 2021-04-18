import { List, ListItem, Link, Box, Heading } from '@chakra-ui/react';

import LaunchIcon from '@material-ui/icons/Launch';

function Sidebar() {
  return (
    <Box>
      <Heading size='md' mb={4}>
        Learn
      </Heading>
      <List spacing={3}>
        <ListItem>
          <LaunchIcon style={{ fontSize: 16 }} />
          <Link href='#' ml={2}>
            Editor basics
          </Link>
        </ListItem>
        <ListItem>
          <LaunchIcon style={{ fontSize: 16 }} />
          <Link href='#' ml={2}>
            Data Management
          </Link>
        </ListItem>
        <ListItem>
          <LaunchIcon style={{ fontSize: 16 }} />
          <Link href='#' ml={2}>
            Asset Management
          </Link>
        </ListItem>
        <ListItem>
          <LaunchIcon style={{ fontSize: 16 }} />
          <Link href='#' ml={2}>
            Scripting
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
