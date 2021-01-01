import styled from 'styled-components';
import { space, color, layout, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div`
  ${position}
  ${space}
  ${layout}
  ${color}
`;

Box.propTypes = {
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color
};

export default Box;
