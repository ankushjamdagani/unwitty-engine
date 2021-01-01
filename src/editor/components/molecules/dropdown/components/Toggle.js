import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../../atoms';

const Toggle = React.forwardRef(({ direction, icon, onClick }, ref) => {
  let iconClass = 'fa-ellipsis-v';
  if (icon) {
    iconClass = icon;
  } else if (direction === 'top' || direction === 'bottom') {
    iconClass = 'fa-ellipsis-h';
  }

  return (
    <Box onClick={onClick} ref={ref}>
      <i className={`fas ${iconClass}`} />
    </Box>
  );
});

Toggle.propTypes = {
  direction: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default Toggle;
