import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
import { color, layout, position } from 'styled-system';
import themeGet from '@styled-system/theme-get';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  ${position}
  ${layout}
  position: relative;
`;

const BallContainer = styled.div`
  ${position}
  animation: ${rotate} 1.5s 0.${(props) => props.delay * 15}s ease infinite;
  ${'' /* opacity: ${(props) => `${1 - props.delay * 0.25}`}; */}
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Ball = styled.div`
  ${color}
  border-radius: ${themeGet('radii.3')};
  width: ${(props) => props.ballSize}px;
  height: ${(props) => props.ballSize}px;
`;

// eslint-disable-next-line no-shadow
const Loader = ({ color, size, ballSize }) => {
  const ballsCount = Array.from({ length: 4 }, (x, i) => i);
  return (
    <Container position='relative' width={size} height={size}>
      {ballsCount.map((i) => (
        <BallContainer key={i} delay={i}>
          <Ball ballSize={ballSize} bg={color} />
        </BallContainer>
      ))}
    </Container>
  );
};

Loader.defaultProps = {
  color: 'indigo.0',
  size: 4,
  ballSize: 6
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  ballSize: PropTypes.number
};

export default Loader;
