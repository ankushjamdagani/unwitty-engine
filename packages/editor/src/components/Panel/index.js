import { Flex } from '@chakra-ui/react';

import { ORIENTATION } from '../../constants';

import PanelContext from './context';

const sizeMap = {
  xs: '40px',
  sm: '80px',
  md: '160px',
  lg: '320px',
  xl: '640px'
};

function getWidthFromOrientation(orientation, size) {
  if (!orientation || !size) {
    return null;
  }

  if (orientation === ORIENTATION.HORIZONTAL) {
    return '100%';
  } else {
    return sizeMap[size] || size;
  }
}

function getHeightFromOrientation(orientation, size) {
  if (!orientation || !size) {
    return null;
  }

  if (orientation === ORIENTATION.VERTICAL) {
    return '100%';
  } else {
    return sizeMap[size] || size;
  }
}

function getAlignmentFromOrientation(orientation) {
  if (!orientation) {
    return null;
  }

  if (orientation === ORIENTATION.VERTICAL) {
    return 'column';
  } else {
    return 'row';
  }
}

const defaultProps = {
  zIndex: 1,
  position: 'relative'
};

function Panel({
  name,
  type,
  size,
  orientation,
  canDrag,
  canResize,
  canClose,
  zIndex = defaultProps.zIndex,
  contentRenderer,
  children,
  width,
  height,
  position = defaultProps.position,
  onMouseDown,
  ...rest
}) {
  const _width = getWidthFromOrientation(orientation, size) || width;
  const _height = getHeightFromOrientation(orientation, size) || height;
  const _align = getAlignmentFromOrientation(orientation);

  const props = {
    ...(canDrag ? { draggable: true } : {})
  };

  return (
    <Flex
      width={_width}
      height={_height}
      zIndex={zIndex}
      background='bgPrimary'
      alignItems='stretch'
      justifyContent='stretch'
      flexDirection={_align}
      flexShrink='0'
      onMouseDown={e => {
        e.stopPropagation();
        onMouseDown && onMouseDown(e);
      }}
      position={position}
      {...props}
      {...rest}
    >
      <Flex flexDirection={_align} flex='1'>
        <PanelContext.Provider value={{ orientation, size }}>
          {contentRenderer ? contentRenderer({ orientation, size }) : children}
        </PanelContext.Provider>
      </Flex>
    </Flex>
  );
}

export default Panel;
