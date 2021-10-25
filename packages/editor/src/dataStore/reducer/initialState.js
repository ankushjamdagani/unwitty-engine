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
      DETAILS_BAR: {
        show: true,
        area: LAYOUT_AREAS.RIGHT,
        position: 0
      },
      STATUS_BAR: {
        show: true,
        area: LAYOUT_AREAS.BOTTOM,
        position: 0
      }
    }
  },
  commands: {
    details: {
      'action.project.create': {
        id: 'action.project.create',
        icon: 'icon-Add',
        label: 'New',
        longLabel: 'Create new project',
        shortcut: ['N'] // shift+n
      }
    }
  },
  actionTriggers: {
    drag: {
      id: 'pan_tool',
      icon: 'open_with',
      label: 'Drag',
      actionType: 'action_drag',
      selectable: true,
      isActive: true,
      options: []
    },
    undo: {
      id: 'undo',
      icon: 'undo',
      label: 'Undo',
      actionType: 'undo',
      selectable: false
    },
    redo: {
      id: 'redo',
      icon: 'redo',
      label: 'Undo',
      actionType: 'redo',
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `create`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `flare`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `color_lens`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `zoom_in`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `zoom_out`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `image`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `aspect_ratio`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `text_fields`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `brush`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `format_shapes`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `change_history`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `flare`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `color_lens`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `zoom_in`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `zoom_out`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `image`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `aspect_ratio`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `text_fields`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    },
    [`test${Math.random()}`]: {
      id: `test${Math.random()}`,
      icon: `brush`,
      label: 'Undo',
      actionType: `test${Math.random()}`,
      selectable: false
    }
  },
  actionDetails: {},
  canvas: {
    showGrid: false,
    showRuler: false,
    dragEnabled: true
  }
};

export default INITIAL_STATE;
