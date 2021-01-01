/**
 * @todo Decide common shadows
 */
export default {
  radii: [0, 3, 6, 16, 100].map((elem) => `${elem}px`),
  shadows: {
    smallest: '0px 4px 8px rgba(0,0,0,0.12)',
    small: '0 5px 10px rgba(0,0,0,0.12)',
    medium: '0 8px 30px rgba(0,0,0,0.12)',
    large: '0 30px 60px rgba(0,0,0,0.12)',
    hover: '0 30px 60px rgba(0,0,0,0.12)',
    sticky: '0 12px 10px -10px rgba(0,0,0,0.12)'
  }
};
