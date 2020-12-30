// eslint-disable-next-line import/no-named-as-default-member
import {
  ResourceManager,
  EntityManager,
  RenderManager,
  TimeManager,
  DataStore,
  core
} from './modules';

import './styles.css';

const { Vector2D, Base } = core;
const { observeStore, Actions } = DataStore;

// --------------- GAME LOOP STARTS
// Get Elements to render
// RENDER                   <- can run in pause state
// *Input
// *  Games Changs Camera, speed, accelration and other aspects
// *OnEvents
// *  Game Audio
// PHYSICS STEPS
//    Apply forces
//    COLLISION DETECTION
//    COLLISION RESOLUTION
// UPDATE
// --------------- GAME LOOP ENDS
// Unload Resources
// Exit

class Engine extends Base {
  /**
   * @prop { name, width, height, smoothImage, containerDOM, timeScale, fps }
   */
  constructor(props) {
    super(props);

    const {
      name = 'demo_game',
      width = window.innerWidth,
      height = window.innerHeight,
      smoothImage = false,
      timeScale = 1,
      fps = 100,
      store,
      containerDOM
    } = props || {};

    this.props = {};
    this.managers = {};
    this.store = store;

    // @TODO :: maybe // if not performance concerns
    observeStore(
      store,
      (state) => state,
      (state) => {
        this.props = state;
      }
    );

    this.syncStore(
      {
        key: name,
        width,
        height,
        aspectRatio: width / height,
        smoothImage
      },
      'core'
    );

    this.initDomManager({ containerDOM });
    this.initTimeManager({ timeScale, fps });
    this.initResourceManager();
    this.initEntityManager();
    this.initRenderManager();

    this.dispatchEvent(new Event('on_ready'));
  }

  destroy() {
    this.dispatchEvent(new Event('before_destroy'));
    cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.clearStore();
    this.dispatchEvent(new Event('on_destroy'));
  }

  syncStore(...args) {
    this.store.dispatch(Actions.syncStore.apply(this, args));
  }

  clearStore(...args) {
    this.store.dispatch(Actions.clearStore.apply(this, args));
  }

  initDomManager({ containerDOM }) {
    const {
      core: { key, width, height }
    } = this.props;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', `wrapper_unwitty_game`);
    wrapper.setAttribute('id', `wrapper_${key}`);
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;

    const canvasWrapper = document.createElement('div');
    canvasWrapper.setAttribute('class', `wrapper_canvas_unwitty_game`);
    canvasWrapper.setAttribute('id', `wrapper_canvas_${key}`);

    wrapper.appendChild(canvasWrapper);

    (containerDOM || document.body).appendChild(wrapper);
  }

  getCanvasWrapper() {
    const {
      core: { key }
    } = this.props;
    return document.getElementById(`wrapper_canvas_${key}`);
  }

  getOverlaysWrapper() {
    const {
      core: { key }
    } = this.props;
    return document.getElementById(`wrapper_overlays_${key}`);
  }

  // Take frame per second in consideration
  initTimeManager(props) {
    const timeManager = new TimeManager({
      data: props,
      syncData: (data) => this.syncStore(data, 'timeManager'),
      clearData: () => this.clearStore('timeManager'),
      getData: () => this.props.timeManager
    });

    this.managers.timeManager = timeManager;
  }

  /**
   * ------------ RESOURCE MANGER -------------
   */
  initResourceManager() {
    const resourceManager = new ResourceManager({
      syncData: (data) => this.syncStore(data, 'resourceManager'),
      clearData: () => this.clearStore('resourceManager'),
      getData: () => this.props.resourceManager
    });

    this.managers.resourceManager = resourceManager;
  }

  initEntityManager() {
    const entityManager = new EntityManager({
      syncData: (data) => this.syncStore(data, 'entityManager'),
      clearData: () => this.clearStore('entityManager'),
      getData: () => this.props.entityManager
    });
    const world = EntityManager.World.create({
      name: 'world',
      gravity: 0,
      bounds: [
        Vector2D.create([-Infinity, -Infinity]),
        Vector2D.create([Infinity, Infinity])
      ]
    });
    const light = EntityManager.Light.create({
      name: 'primary_light',
      position: Vector2D.zero()
    });

    entityManager.root = world;
    entityManager.addChildren(world, light);

    this.managers.entityManager = entityManager;
  }

  initRenderManager() {
    this.managers.renderManager = new RenderManager({
      /**
       * Remove dependency on engine
       */
      engine: this,
      syncData: (data) => this.syncStore(data, 'renderManager'),
      clearData: () => this.clearStore('renderManager'),
      getData: () => ({
        ...this.props.renderManager,
        ...this.props.core,
        ...this.props.entityManager,
        ...this.props.resourceManager
      })
    });
  }

  autoPilot() {
    this.rafId = requestAnimationFrame(this.autoPilot.bind(this));

    const [
      shouldUpdate,
      { updateCount, fixedDelta, interpolationTime } = {}
    ] = this.managers.timeManager.update();

    if (shouldUpdate) {
      /**
       * PROCESS INPUT
       * -------------
       * @TODO :: where to do it
       */

      /**
       * UPDATE
       * ------
       */
      for (let i = 0; i < updateCount; i += 1) {
        this.update(fixedDelta);
      }

      /**
       * RENDER
       * ------
       * @TODO :: add interpolation to remove stutter
       */
      this.render(interpolationTime);
    }
  }

  update(deltaTime) {
    const { entityManager } = this.store.getState();
    const _transform1 = entityManager.entities.transform1;
    const _transform2 = entityManager.entities.transform2;

    this.dispatchEvent(new Event('before_update'));

    this.syncStore(
      {
        entities: {
          ...entityManager.entities,
          [_transform1.id]: {
            ..._transform1,
            rotate: (_transform1.rotate += deltaTime / 10)
          },
          [_transform2.id]: {
            ..._transform2,
            rotate: (_transform2.rotate += deltaTime / 10)
          }
        }
      },
      'entityManager'
    );

    this.dispatchEvent(new Event('on_update'));
    // this.dispatchEvent(
    //   new CustomEvent('on_update', {
    //     detail: { currTime, lastTime, deltaTime }
    //   })
    // );
  }

  render() {
    this.dispatchEvent(new Event('before_render'));

    this.managers.renderManager.renderTree('world');

    this.dispatchEvent(new Event('on_render'));
  }
}

export default Engine;
