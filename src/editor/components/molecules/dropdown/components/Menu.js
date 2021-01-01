import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box } from '../../../atoms';

const Container = styled(Box)`
  border-radius: ${themeGet('radii.1')};
  box-shadow: 0 0 30px ${themeGet('colors.white.4')};
`;

const Menu = ({ children, top = 0, left = 0, minWidth = 160 }) => {
  const menuDom = (
    <Container
      position='absolute'
      top={top}
      left={left}
      minWidth={minWidth}
      bg='background'
    >
      {children}
    </Container>
  );

  return menuDom;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired
};

export default Menu;
