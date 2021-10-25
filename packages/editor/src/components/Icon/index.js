import { chakra } from '@chakra-ui/react';

const Icon = ({ type, size }) => (
  <chakra.span className='material-icons' fontSize={size}>
    {type}
  </chakra.span>
);

export default Icon;
