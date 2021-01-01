import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '../../../atoms';

const MenuItem = ({ icon, label, onClick }) => (
  <Box onClick={onClick}>
    {icon ? (
      <Box>
        <i className={`fas ${icon}`} />
      </Box>
    ) : (
      ''
    )}
    {label ? (
      <Box>
        <Text>{label}</Text>
      </Box>
    ) : (
      ''
    )}
  </Box>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default MenuItem;
