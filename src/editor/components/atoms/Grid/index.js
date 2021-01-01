import styled from 'styled-components';
import { space, color, layout, position, grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Grid = styled.div`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${grid}
  display: grid;
`;

Grid.propTypes = {
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.grid
};

export default Grid;
