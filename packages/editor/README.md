# @unwitty/editor

- State Format

```javascript
  {
    _id,
    slug,
    name,
    color,
    thumb,
    config: {
      engine: {
        core: {},
        timing: {},
        resources: {},
        entities: {},
        canvasMap: new Map(),
        AudioManager: {},
        DomManager: {},
        EntityManager: {},
        RenderManager: {},
        ResourceManager: {},
        TimeManager: {},
        UpdateManager: {}
      }
      editor: {

      }
    }
  }
```
