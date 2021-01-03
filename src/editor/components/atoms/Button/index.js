import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { margin, layout } from 'styled-system';

import FontIcon from '../FontIcon';
import Text from '../Text';
import FlexBox from '../FlexBox';

const BUTTON_STYLES = ['none', 'outline', 'filled'];

const SIZES = ['sm', 'md', 'lg'];
const SizeFontMap = { sm: 1, md: 2, lg: 3 };
const SizeIconMap = { sm: 3, md: 4, lg: 5 };

const ButtonTabWrapper = styled(FlexBox)`
  border-radius: ${themeGet('radii.1')};
  background: transparent;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.round &&
    css`
      border-radius: 100%;
    `}

  ${(props) =>
    props.buttonStyle === 'outline' &&
    css`
      border: solid 1px ${themeGet(`colors.${props.color}`)};
      i,
      span {
        color: ${themeGet(`colors.${props.color}`)};
      }
    `}
  ${(props) =>
    props.buttonStyle === 'filled' &&
    css`
      background: ${themeGet(`colors.${props.color}`)};
      ${Text}, i, span {
        color: ${themeGet(`colors.background`)};
      }
    `}
`;

const ButtonWrapper = styled.button`
  ${layout}
  ${margin}
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 0;

  ${(props) =>
    props.hideVisually &&
    css`
      visibility: hidden;
    `}
  ${(props) => css`
    &:focus ${ButtonTabWrapper} {
      border: solid 2px ${themeGet(`colors.${props.color}`)};
    }
  `}
  ${(props) =>
    props.buttonStyle !== 'none' &&
    css`
      &:hover ${ButtonTabWrapper} {
        background: ${themeGet(`colors.${props.color}`)};

        ${Text}, i, span {
          color: ${themeGet('colors.background')};
        }
      }
    `}
`;

const Button = ({
  text,
  icon,
  buttonSize,
  buttonStyle,
  p,
  px,
  py,
  round,
  color,
  ...props
}) => (
  <ButtonWrapper color={color} buttonStyle={buttonStyle} {...props}>
    <ButtonTabWrapper
      tabIndex='-1'
      buttonSize={buttonSize}
      buttonStyle={buttonStyle}
      color={color}
      round={round}
      p={p}
      px={px}
      py={py}
      ac
    >
      {text && (
        <Text fontSize={SizeFontMap[buttonSize]} color={color}>
          {text}
        </Text>
      )}
      {icon && (
        <FontIcon
          fontSize={SizeIconMap[buttonSize]}
          color={color}
          icon={icon}
        />
      )}
    </ButtonTabWrapper>
  </ButtonWrapper>
);

Button.defaultProps = {
  buttonStyle: BUTTON_STYLES[0],
  buttonSize: SIZES[1]
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  buttonStyle: PropTypes.oneOf(BUTTON_STYLES),
  buttonSize: PropTypes.oneOf(SIZES)
};

export default Button;
