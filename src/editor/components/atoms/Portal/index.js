import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ mountNode, children }) => {
  const elementRef = useRef();
  useEffect(() => {
    elementRef.current = document.createElement('div');
    mountNode.appendChild(elementRef.current);
    return () => {
      mountNode.removeChild(elementRef.current);
    };
  }, [mountNode, elementRef]);

  return elementRef.current
    ? ReactDOM.createPortal(children, elementRef.current)
    : null;
};

Portal.defaultProps = {
  mountNode: document.getElementById('portal-container')
};

Portal.propTypes = {
  children: PropTypes.element,
  mountNode: PropTypes.instanceOf(Element)
};

export default Portal;
