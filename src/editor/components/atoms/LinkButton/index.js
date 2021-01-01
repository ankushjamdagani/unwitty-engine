import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { margin, layout } from 'styled-system';

import Text from '../Text';

const ButtonTabWrapper = styled.div`
  border: none;
  background: transparent;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  background: ${themeGet('colors.indigo.2')};
  padding: ${themeGet('space.1')} ${themeGet('space.2')};

  ${Text} {
    color: ${themeGet('colors.indigo.0')};
  }
`;

const ButtonWrapper = styled.button`
  ${layout}
  ${margin}
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 0;

  &:focus ${ButtonTabWrapper}, &:hover ${ButtonTabWrapper} {
    text-decoration: underline;
  }
`;

const LinkButton = ({ text, ...props }) => (
  <ButtonWrapper {...props}>
    <ButtonTabWrapper tabIndex='-1'>
      <Text>{text}</Text>
    </ButtonTabWrapper>
  </ButtonWrapper>
);
LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LinkButton;
