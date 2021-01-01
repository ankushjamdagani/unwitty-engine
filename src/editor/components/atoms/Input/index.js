import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { margin, layout } from 'styled-system';

import Text from '../Text';

const Label = styled.label`
  display: block;
  ${margin}
  ${layout}
`;

const InputElement = styled.input`
  border: solid 1px transparent;
  border-radius: ${themeGet('radii.2')};
  background: ${(props) => themeGet(`colors.${props.backgroundColor}`)(props)};
  box-shadow: none;
  color: ${themeGet('colors.field')};
  outline: none;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:focus {
    border: solid 1px
      ${(props) => themeGet(`colors.${props.borderColor}`)(props)};
    background: transparent;
  }

  [disabled] {
    cursor: not-allowed;
    background: ${themeGet('disabled')};
  }

  ${(props) =>
    !props.isValid &&
    `
      border: solid 1px ${themeGet('colors.error')(props)}!important;
      background: transparent;
    `}
`;

const Input = React.forwardRef(
  (
    {
      label,
      isValid,
      backgroundColor,
      borderColor,
      inputProps: { onChange, ...inputProps },
      ...rest
    },
    ref
  ) => (
    <Label {...rest}>
      {label ? (
        <Text mb={1} color='label'>
          {label}
        </Text>
      ) : null}
      <InputElement
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        isValid={isValid}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...inputProps}
      />
    </Label>
  )
);

Input.displayName = 'Input';

Input.defaultProps = {
  isValid: true,
  backgroundColor: 'secondary',
  borderColor: 'primary'
};

Input.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  inputProps: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  })
};

export default Input;
