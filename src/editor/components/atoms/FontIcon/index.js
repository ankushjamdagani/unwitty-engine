import React from 'react';
import styled from 'styled-components';
import { typography, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const StyledI = styled.i`
  ${typography}
  ${color}
`;

const FontIcon = ({ icon, ...props }) => (
  <StyledI className='material-icons' {...props}>
    {icon}
  </StyledI>
);

FontIcon.propTypes = {
  ...propTypes.color,
  ...propTypes.typography
};

FontIcon.displayName = 'FontIcon';

export default FontIcon;
