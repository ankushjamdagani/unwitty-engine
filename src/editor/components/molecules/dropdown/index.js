import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Portal } from '../../atoms';

import Toggle from './components/Toggle';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

const Dropdown = ({
  title,
  icon,
  direction,
  onClick,
  options,
  mountNode,
  ...rest
}) => {
  const [isVisible, setVisible] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const toggleElem = React.createRef();
  const onToggle = () => {
    if (!isVisible) {
      const style = { width: 160 }; // this style object will be passed as the tooltip's 'style' prop
      const dimensions = toggleElem.current.getBoundingClientRect(); // where on the screen is the target

      // center align the tooltip by taking both the target and tooltip widths into account
      style.left = dimensions.left + dimensions.width / 2 - 160 / 2;
      style.left = Math.max(10, style.left); // make sure it doesn't poke off the left side of the page
      style.left = Math.min(style.left, document.body.clientWidth - 160 - 10); // or off the right

      if (dimensions.top < window.innerHeight / 2) {
        // the top half of the page
        // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
        style.top = dimensions.top + dimensions.height + 10;
      } else {
        // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
        style.bottom = window.innerHeight - dimensions.top + 10;
      }
      style.top = dimensions.top + dimensions.height + 10;

      setLeft(style.left);
      setTop(style.top);
    }
    setVisible(!isVisible);
  };

  return (
    <Box {...rest}>
      <Toggle title={title} icon={icon} onClick={onToggle} ref={toggleElem} />
      <Portal>
        {isVisible ? (
          <Menu
            options={options}
            direction={direction}
            onClick={onClick}
            left={left}
            top={top}
          >
            {options.map((option) => (
              <MenuItem
                key={option.key}
                icon={option.icon}
                label={option.label}
                onClick={() => onClick(option.key)}
              />
            ))}
          </Menu>
        ) : null}
      </Portal>
    </Box>
  );
};

Dropdown.defaultProps = {
  direction: 'bottom',
  onClick: () => {},
  options: []
};

Dropdown.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  mountNode: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      key: PropTypes.string
    })
  )
};

export default Dropdown;
