import { LAYOUT_AREAS } from '../../constants';

const INITIAL_STATE = {
  workspace: {
    layout: {
      [LAYOUT_AREAS.TOP]: ['MENU_BAR'],
      [LAYOUT_AREAS.RIGHT]: [],
      [LAYOUT_AREAS.BOTTOM]: ['STATUS_BAR'],
      [LAYOUT_AREAS.LEFT]: ['CONTROLS_BAR']
    },
    panels: {
      MENU_BAR: {
        show: true,
        area: LAYOUT_AREAS.TOP,
        position: 0
      },
      CONTROLS_BAR: {
        show: true,
        area: LAYOUT_AREAS.LEFT,
        position: 0
      },
      STATUS_BAR: {
        show: true,
        area: LAYOUT_AREAS.BOTTOM,
        position: 0
      }
    }
  },
  canvas: {
    showGrid: false,
    showRuler: false,
    dragEnabled: true
  }
};

export default INITIAL_STATE;
