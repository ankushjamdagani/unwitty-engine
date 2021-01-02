// eslint-disable-next-line import/no-named-as-default-member
import './styles.css';

import {
  DomManager,
  EntityManager,
  RenderManager,
  ResourceManager,
  TimeManager,
  UpdateManager
} from './managers';

import { DataStore, core } from './modules';

const { Base } = core;

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
   * @prop { key, width, height, smoothImage, timeScale, fps }
   */
  constructor(props) {
    super(props);

    const {
      key = 'demo_game',
      width = window.innerWidth,
      height = window.innerHeight,
      smoothImage = false,
      timeScale = 1,
      fps = 100
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
        key,
        width,
        height,
        aspectRatio: width / height,
        smoothImage,
        gameState: 'PLAY'
      },
      'core'
    );

    this.initDomManager();
    this.initTimeManager({ timeScale, fps });
    this.initResourceManager();
    this.initEntityManager({ width, height });
    this.initUpdateManager();
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

  initDomManager() {
    const props = this.props.core;
    const domManager = new DomManager({
      data: props,
      getData: () => ({
        domManager: this.props.domManager,
        canvasMap: this.props.canvasMap,
        core: this.props.core
      })
    });

    this.managers.domManager = domManager;
  }

  // Take frame per second in consideration
  initTimeManager(props) {
    const timeManager = new TimeManager({
      data: props,
      getData: () => ({
        timing: this.props.timing,
        timingManager: this.props.timingManager
      })
    });

    this.managers.timeManager = timeManager;
  }

  /**
   * ------------ RESOURCE MANGER -------------
   */
  initResourceManager() {
    const resourceManager = new ResourceManager({
      getData: () => ({
        resources: this.props.resources,
        resourceManager: this.props.resourceManager
      })
    });

    this.managers.resourceManager = resourceManager;
  }

  initEntityManager(data) {
    const entityManager = new EntityManager({
      data,
      getData: () => ({
        core: this.props.core,
        entities: this.props.entities,
        entityManager: this.props.entityManager
      })
    });

    this.managers.entityManager = entityManager;
  }

  initUpdateManager() {
    this.managers.updateManager = new UpdateManager({
      getData: () => ({
        entities: this.props.entities,
        canvasMap: this.props.canvasMap,
        updateManager: this.props.updateManager
      })
    });
  }

  initRenderManager() {
    this.managers.renderManager = new RenderManager({
      getData: () => ({
        core: this.props.core,
        entities: this.props.entities,
        canvasMap: this.props.canvasMap,
        renderManager: this.props.renderManager
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

    this.managers.updateManager.updateTree('world', deltaTime);

    this.dispatchEvent(new Event('on_update'));
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

    DataStore.setData((timing) => {
      timing.lastTime = (performance || Date).now();
    }, 'timing');

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
    DataStore.setData((timing) => {
      timing.timeScale = -1;
    }, 'timing');

    this.play();
  }

  forward() {
    DataStore.setData((timing) => {
      timing.timeScale = 1;
    }, 'timing');

    this.play();
  }

  currTick() {
    this.render();
  }

  nextTick() {
    const currTime = (performance || Date).now();
    this.tick(currTime, currTime + this.props.timing.timestep + 0.0001);
  }

  prevTick() {
    const currTime = (performance || Date).now();
    this.tick(currTime, currTime - this.props.timing.timestep - 0.0001);
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
