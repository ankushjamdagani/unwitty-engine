import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { useLoadImage } from '__UTILS/image';

import { FontIcon, Box, FlexBox } from '../../atoms';

const fading = keyframes`
  to {
    opacity: 0.5;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ErrorBlock = styled(FlexBox)`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const AvatarContainer = styled(Box)`
  border-radius: ${themeGet('radii.4')};
  overflow: hidden;

  ${(props) => (props.onClick ? `cursor: pointer;` : ``)}
  ${(props) =>
    props.isLoading
      ? css`
          animation: ${fading} 1s ease-in-out infinite alternate;
        `
      : ``}
`;

/**
 * @todo
 * 1. Title first letter on error
 * 2. Error view on error and no title
 */
const Avatar = ({ title, src, color, width, height }) => {
  const [imageURI, error] = useLoadImage(src);
  let content = null;
  if (imageURI) {
    content = <Img src={imageURI} alt={title} title={title} />;
  } else if (error) {
    const fontSize = width > 5 ? 3 : 1;
    content = (
      <ErrorBlock>
        <FontIcon className='fas fa-user' color='black.3' fontSize={fontSize} />
      </ErrorBlock>
    );
  }
  return (
    <AvatarContainer
      isLoading={!content}
      bg={color}
      width={width}
      height={height}
    >
      {content}
    </AvatarContainer>
  );
};

Avatar.defaultProps = {
  color: 'white.2'
};

Avatar.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Avatar;
