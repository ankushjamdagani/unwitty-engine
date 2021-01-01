/**
 * @todo Over the time following attributes will be decided
 * - size: [xs, sm, md, lg, h6, h5, h4, h3, h2, h1]
 * - weight: [light, regular, semibold, bold]
 * - family: [normal, mono, cursive, heading, icon]
 * - Styles for H1, H2, H3,.... etc in global styles
 */
export default {
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96].map(
    (elem) => `${elem}px`
  ),
  fontWeights: { light: 100, medium: 500, heavy: 700 },
  lineHeights: [1, 1.15, 1.3, 1.5],
  fonts: {
    normal: "'Raleway', sans-serif",
    normal1: "'Roboto', sans-serif",
    mono: "'Roboto Mono', monospace",
    cursive1: "'Caveat', cursive",
    cursive2: "'Amatic SC', cursive",
    cursive3: "'Merienda', cursive",
    icon: 'inherit'
  }
};
