import { extendTheme } from '@chakra-ui/react';

import color from './temp/color';
import font from './temp/font';
import layout from './temp/layout';
import general from './temp/general';

/**
 * Gloabl Overrides
 * ===================
 */
import global from './global';

/**
 * Component Overrides
 * ===================
 */
import Button from './components/Button';

/**
 * Partials Overrides
 * ===================
 */
import fonts from './partials/fonts';

export const _theme = {
  ...color,
  ...layout,
  ...font,
  ...general
};

export default extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  global,
  components: {
    Button
  },
  fonts
});
