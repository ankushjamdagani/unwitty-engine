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
        smoothImage,
        gameState: 'PLAY'
      },
      'core'
    );

    this.initDomManager({ containerDOM });
    this.initTimeManager({ timeScale, fps });
    this.initResourceManager();
    this.initEntityManager();
    this.initRenderManager();

    this.pause();

    setTimeout(() => {
      this.dispatchEvent(new Event('on_ready'));
    });
  }

  destroy() {
    this.dispatchEvent(new Event('before_destroy'));
    cancelAnimationFrame(this.autoPilotCycle);
    this.autoPilotCycle = null;
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
    this.autoPilotCycle = requestAnimationFrame(this.autoPilot.bind(this));

    this.tick();
  }

  tick(fromTime, toTime) {
    const [
      shouldUpdate,
      { updateCount, fixedDelta, interpolationTime } = {}
    ] = this.managers.timeManager.update(fromTime, toTime);

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

  play() {
    DataStore.setData((core) => {
      core.gameState = 'PLAY';
    }, 'core');

    DataStore.setData((timer) => {
      timer.lastTime = (performance || Date).now();
    }, 'timeManager');

    !this.autoPilotCycle && this.autoPilot();
  }

  pause() {
    this.pauseRenderCycle && clearInterval(this.pauseRenderCycle);

    DataStore.setData((core) => {
      core.gameState = 'PAUSE';
    }, 'core');

    cancelAnimationFrame(this.autoPilotCycle);

    this.autoPilotCycle = null;

    this.pauseRenderCycle = setInterval(() => {
      this.currTick();
      // DataStore.setData((data) => {
      //   if (data.timeScale < 1) {
      //     data.timeScale = 1;
      //   } else {
      //     data.timeScale = 0.05;
      //   }
      // }, 'timeManager');
    }, 200);
  }

  stop() {
    DataStore.setData((core) => {
      core.gameState = 'STOP';
    }, 'core');

    cancelAnimationFrame(this.autoPilotCycle);

    this.autoPilotCycle = null;
  }

  rewind() {
    DataStore.setData((timer) => {
      timer.timeScale = -1;
    }, 'timeManager');

    this.play();
  }

  forward() {
    DataStore.setData((timer) => {
      timer.timeScale = 1;
    }, 'timeManager');

    this.play();
  }

  currTick() {
    this.render();
  }

  nextTick() {
    const currTime = (performance || Date).now();
    this.tick(currTime, currTime + this.props.timeManager.timestep + 0.0001);
  }

  prevTick() {
    const currTime = (performance || Date).now();
    this.tick(currTime, currTime - this.props.timeManager.timestep - 0.0001);
  }

  /**
   * @todo :: not working right now
   * - all calculations goes wrong if time is negative
   * - toTime is w.r.t a range recorded and moved by difference of toTime and lastTime + deltaTime
   */
  // seekTick(toTime, range = []) {

  //   this.tick(toTime - this.props.timeManager.timestep - 0.0001, toTime);
  // }

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
}

export default Engine;
