import styled from 'styled-components';
import { space, color, layout, position, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const FlexBox = styled.div`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  display: flex;
  ${(props) =>
    props.hc &&
    `
    align-items: center;
  `}
  ${(props) =>
    props.vc &&
    `
    justify-content: center;
  `}
  ${(props) =>
    props.ac &&
    `
    align-items: center;
    justify-content: center;
  `}
`;

FlexBox.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color
};

export default FlexBox;
