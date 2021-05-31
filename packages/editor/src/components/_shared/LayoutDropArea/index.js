/* eslint-disable react/display-name */
import React from 'react';
import { Box } from '@chakra-ui/react';

const LayoutDropArea = React.forwardRef(
  ({ orientation, isFocus, targetSize, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    return (
      <Box
        zIndex='1111'
        background='blue.600'
        transition='all .15s'
        ref={ref}
        {...props}
        {...{
          [isHorizontal ? 'width' : 'height']: '100%',
          [isHorizontal ? 'height' : 'width']: isFocus ? targetSize : '0px'
        }}
      ></Box>
    );
  }
);

export default LayoutDropArea;
