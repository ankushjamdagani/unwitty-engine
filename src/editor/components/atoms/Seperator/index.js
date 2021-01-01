import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import Text from '../Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${themeGet('space.2')};
`;

const TextWrapper = styled.div`
  position: relative;
  background: ${themeGet('colors.background')};
  padding: 0 ${themeGet('space.2')};
`;

const Line = styled.div`
  background: ${(props) => themeGet(`colors.${props.bg}`)(props)};
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  height: 2px;
`;

const Seperator = ({ lineColor, text, textColor }) => (
  <Wrapper>
    <Line bg={lineColor} />
    <TextWrapper>
      <Text color={textColor}>{text}</Text>
    </TextWrapper>
  </Wrapper>
);

Seperator.propTypes = {
  text: PropTypes.string,
  lineColor: PropTypes.string,
  textColor: PropTypes.string
};

export default Seperator;
