import { List, ListItem, Text, Box, Flex, Heading } from '@chakra-ui/react';

import Emoji from 'a11y-react-emoji';

function Random() {
  return (
    <Box>
      <List spacing={3}>
        <ListItem>
          <Emoji symbol='◽' label='awesome sparkles' /> Support the cause.
        </ListItem>
        <ListItem>
          <Emoji symbol='◽' label='awesome sparkles' /> Support the cause.
        </ListItem>
        <ListItem>
          <Emoji symbol='◽' label='awesome sparkles' /> Support the cause.
        </ListItem>
        <ListItem>
          <Emoji symbol='◽' label='awesome sparkles' /> Support the cause.
        </ListItem>
      </List>
    </Box>
  );
}

export default Random;
