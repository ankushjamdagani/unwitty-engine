import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import themeGet from '@styled-system/theme-get';

import { layout } from 'styled-system';

const Wrapper = styled.div`
  ${layout}
`;

const SVG = styled.svg`
  height: auto;
  width: 100%;
`;

const Logo = ({ primaryColor, secondaryColor, width, ...rest }) => {
  const primary = themeGet(`colors.${primaryColor}`)(rest);
  const secondary = themeGet(`colors.${secondaryColor}`)(rest);

  return (
    <Wrapper width={width}>
      <SVG
        xmlns='http://www.w3.org/2000/svg'
        width='235.517'
        height='165.264'
        viewBox='0 0 235.517 165.264'
      >
        <path
          fill={secondary}
          d='M364.645 57.973c-40.706 2.574-68.283 44.28-59.458 92.1s56.752 84.241 106.488 69.828 56.767-44.566 42.364-58.968-30.681-21.658-34.017-50.436-17.964-54.889-55.377-52.524z'
          data-name='Path 2'
          transform='translate(-268.693 -57.824)'
        />
        <text
          fill={primary}
          fontFamily='Raleway-Black, Raleway'
          fontSize='40.478'
          fontWeight='800'
          letterSpacing='.37em'
          transform='translate(125.407 66.199)'
        >
          <tspan x='-77.818' y='0'>
            SEMA
          </tspan>
        </text>
        <text
          fill={primary}
          fontFamily='Raleway-Black, Raleway'
          fontSize='40.478'
          fontWeight='800'
          letterSpacing='.37em'
          transform='translate(74.01 117.102)'
        >
          <tspan x='-70.755' y='0'>
            NTIC
          </tspan>
        </text>
        <text
          fill={primary}
          fontFamily='Raleway-Black, Raleway'
          fontSize='10.601'
          fontWeight='800'
          letterSpacing='.57em'
          transform='translate(100.783 138.742)'
        >
          <tspan x='0' y='0'>
            CHAT
          </tspan>
        </text>
        <path
          fill={primary}
          d='M0 0H46.558V1.928H0z'
          data-name='Rectangle 6'
          transform='translate(188.959 97.552)'
        />
        <path
          fill={primary}
          d='M0 0H34.029V1.928H0z'
          data-name='Rectangle 7'
          transform='translate(0 50.732)'
        />
        <path
          fill={primary}
          d='M404.784 160.3a3.718 3.718 0 113.717-3.718 3.723 3.723 0 01-3.717 3.718zm0-5.508a1.79 1.79 0 101.79 1.79 1.792 1.792 0 00-1.79-1.793z'
          data-name='Path 3'
          transform='translate(-238.693 -57.824)'
        />
      </SVG>
    </Wrapper>
  );
};

Logo.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.number
};

export default withTheme(React.memo(Logo));
