# State Instance

## Options

### File

- State Changing - New, Open
- API + State Changing - Save
- Redirect (External) - Learn More, Help
- Redirect Internal - Go Home
- Complex - Play, Pause, Stop

- changeTool - brush, eraser, etc.
- other - brushDraw, erase, move, etc.
- not all commands should be listed on command pallete
- menu config as json ?!

```text
  command.project.create
  command.project.open
```

```js
{
  // (1)
  type: 'action.project.create',

  // (2) if modal
  type: 'action.workspace.showModal',
  payload: {
    modal: 'project.create'
  },

  // (3) if redirect on same tab
  type: 'changeView',
  payload: {
    view: 'project.create'
  }

  // (4) if redirect on new tab
  type: 'redirect',
  payload: {
    url: ''
  }

  // (5) with handler
  type: 'action.project.create',
  stateContext: 'workspace',
  handler: (state) => {
    // change something
    workspace.showModal = 'project.create';
    return state
  }
}
```
