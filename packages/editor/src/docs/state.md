# State

- Make undo wrapper
  - Names for each undo state
  - undo only for selected fields on engine
  - no undo required for editor

```js
const INITIAL_STATE = {
  projects: {
    list: [
      { id, name },
      { id, name },
    ],
    current: {
      id, name, meta: { thumb, sharedLink }
    }
  },
  workspace: {
    layout: {
      [LAYOUT_AREAS.TOP]: ['MENU_BAR'],
      [LAYOUT_AREAS.RIGHT]: [],
      [LAYOUT_AREAS.BOTTOM]: ['STATUS_BAR'],
      [LAYOUT_AREAS.LEFT]: ['CONTROLS_BAR']
    },
    panelsVisible: {
      [PANELS.MENU_BAR]: false,
      [PANELS.CONTROLS_BAR]: false,
      [PANELS.DETAILS_BAR]: false,
      [PANELS.STATUS_BAR]: false,
    },
    modalsVisible: {}
  },
  commands: {
    /**
     * Where to put ?!
     * - state (active, disabled)
     * - Groupings
     * - Shortcuts
     */

    /**
     * command type
     * `actionType.context.actionName`
     *
     * actionType - changeView | changeState | redirect | task
     */

    // can't change
    details: {
      id: {
        id,
        icon,
        label,
        longLabel,
        shortcut, // AND - ["cmd", "F5"] // OR - [["cmd", "F5"]]
        handler: {
          type,
          parameters: {

          }
        },
        canSelect // canPersist // canHold // oneTimeAction
      }
    },

    // can change
    active: Map || [] || {},
    disabled: Map || [] || {},
    category: {
      general: ['new', 'open']
      game: ['play', 'pause', 'stop']
    }
  },

  // ---------------

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
    }
  },

  menuControls: [
    // ...
    {
      id,
      label: 'File',
      options: [
        // ...
        { default: 'action_id', type: 'action' },
        {
          default: 'action_id',
          options: ['action_id'],
          type: 'action'
        },
        {
          type: 'seperator'
        },
        {
          type: 'custom',
          __html: ''
        }
        // ...
      ]
    }
    // ...
  ],

  modalsVisible

  canvas: {
    showGrid: false,
    showRuler: false,
    dragEnabled: true
  }
};
```
