import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { margin, layout } from 'styled-system';

import Text from '../Text';

const Wrapper = styled.div`
  ${margin}
  ${layout}
  padding: ${themeGet('space.1')} 0;

  ${Text} {
    color: ${themeGet('colors.red.0')};
  }
`;

const ErrorBox = ({ text, ...props }) => (
  <Wrapper {...props}>
    <Text>{text}</Text>
  </Wrapper>
);

ErrorBox.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorBox;
