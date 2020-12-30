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
  static init(props) {
    return new Engine(props);
  }

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
      containerDOM
    } = props || {};

    this.props = {};
    this.managers = {};

    // @TODO :: maybe // if not performance concerns
    DataStore.observeStore(
      (state) => state,
      (state) => {
        this.props = state;
      }
    );

    DataStore.setData(
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
    DataStore.clearData();
    this.dispatchEvent(new Event('on_destroy'));
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
      syncData: (data) => DataStore.setData(data, 'timeManager'),
      clearData: () => DataStore.clearData('timeManager'),
      getData: () => this.props.timeManager
    });

    this.managers.timeManager = timeManager;
  }

  /**
   * ------------ RESOURCE MANGER -------------
   */
  initResourceManager() {
    const resourceManager = new ResourceManager({
      syncData: (data) => DataStore.setData(data, 'resourceManager'),
      clearData: () => DataStore.clearData('resourceManager'),
      getData: () => this.props.resourceManager
    });

    this.managers.resourceManager = resourceManager;
  }

  initEntityManager() {
    const entityManager = new EntityManager({
      syncData: (data) => DataStore.setData(data, 'entityManager'),
      clearData: () => DataStore.clearData('entityManager'),
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
      syncData: (data) => DataStore.setData(data, 'renderManager'),
      clearData: () => DataStore.clearData('renderManager'),
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
    this.dispatchEvent(new Event('before_update'));

    DataStore.setData((entityManager) => {
      entityManager.entities.transform1.rotate += deltaTime / 10;
      entityManager.entities.transform2.rotate += deltaTime / 10;
    }, 'entityManager');

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
