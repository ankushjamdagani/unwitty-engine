const Commands = [
  {
    id: 'project/create',
    icon: 'icon-Add',
    label: 'New',
    longLabel: 'Create new project',
    shortcut: ['n'],
    handler: () => {}
  },
  {
    id: 'project/open',
    icon: 'icon-Open',
    label: 'Open',
    longLabel: 'Open project',
    shortcut: ['o'],
    handler: () => {}
  },
  {
    id: 'project/save',
    icon: 'icon-Save',
    label: 'Save',
    longLabel: 'Save project',
    shortcut: ['s'],
    handler: () => {}
  },
  {
    id: 'project/duplicate',
    icon: 'icon-Duplicate',
    label: 'Make a copy',
    longLabel: 'Make a copy of current project',
    shortcut: ['Shift', 's'],
    handler: () => {}
  },
  {
    id: 'project/export',
    icon: 'icon-Export',
    label: 'Export as',
    longLabel: 'Export project as',
    handler: () => {}
  },
  {
    id: 'project/share',
    icon: 'icon-Share',
    label: 'Share',
    longLabel: 'Share project',
    handler: () => {}
  },
  {
    id: 'project/delete',
    icon: 'icon-Delete',
    label: 'Delete',
    longLabel: 'Delete project',
    handler: () => {}
  }
];

export default Commands;
