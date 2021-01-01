import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../atoms';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  // componentDidCatch(error, errorInfo) {
  //   // Catch errors in any components below and re-render with error message
  //   this.setState({
  //     error,
  //     errorInfo
  //   });
  //   // You can also log error messages to an error reporting service here
  // }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      // Error path
      return (
        <Box p={4}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </details>
        </Box>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;
