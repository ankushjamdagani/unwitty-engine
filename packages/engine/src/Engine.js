import './styles.css';

import {
  DomManager,
  EntityManager,
  RenderManager,
  GridManager,
  ResourceManager,
  TimeManager,
  UpdateManager
} from './managers';

import { core } from './modules';

import { constants, DataStore } from '@unwitty/core';
const { GAME_STATES } = constants;

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

const REQUIRED_PROPS = ['key'];

class Engine extends Base {
  constructor(props) {
    super(props);

    const {
      key,
      smoothImage = false,
      timeScale = 1,
      fps = 100,
      gridSize = 50
    } = props || {};

    for (const rp of REQUIRED_PROPS) {
      if (!props.hasOwnProperty(rp)) {
        throw new Error(`Missing mandatory prop - ${rp}`);
      }
    }

    this.key = key;
    this.props = {};
    this.managers = {};

    // @TODO :: maybe // if not performance concerns
    DataStore.observeStore(
      state => state,
      state => {
        this.props = state;
      }
    );

    DataStore.setData(
      {
        key,
        smoothImage,
        gameState: GAME_STATES.PLAY
      },
      'core'
    );

    this.initDomManager();
    this.initResourceManager();
    this.initEntityManager();
    this.initGridManager({ gridSize });
    this.initTimeManager({ timeScale, fps });
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

  initEntityManager() {
    const entityManager = new EntityManager({
      getData: () => ({
        core: this.props.core,
        entities: this.props.entities,
        entityManager: this.props.entityManager
      })
    });

    this.managers.entityManager = entityManager;
  }

  initGridManager(props) {
    const gridManager = new GridManager({
      data: props,
      getData: () => ({
        core: this.props.core,
        gridManager: this.props.gridManager
      })
    });

    this.managers.gridManager = gridManager;
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
    this.dispatchEvent(
      new CustomEvent('before_update', { detail: { deltaTime } })
    );

    this.managers.updateManager.updateTree(
      `world_${this.props.core.activeSceneId}`,
      deltaTime
    );

    this.dispatchEvent(new CustomEvent('on_update', { detail: { deltaTime } }));
  }

  render(interpolationTime) {
    this.dispatchEvent(
      new CustomEvent('before_render', { detail: { interpolationTime } })
    );

    this.managers.renderManager.renderTree(
      `world_${this.props.core.activeSceneId}`
    );

    this.dispatchEvent(
      new CustomEvent('on_render', { detail: { interpolationTime } })
    );
  }

  play() {
    DataStore.setData(core => {
      core.gameState = GAME_STATES.PLAY;
    }, 'core');

    DataStore.setData(timing => {
      timing.lastTime = (performance || Date).now();
    }, 'timing');

    !this.autoPilotCycle && this.autoPilot();
  }

  pause() {
    this.pauseRenderCycle && clearInterval(this.pauseRenderCycle);

    DataStore.setData(core => {
      core.gameState = GAME_STATES.PAUSE;
    }, 'core');

    cancelAnimationFrame(this.autoPilotCycle);

    this.autoPilotCycle = null;

    /**
     * @todo temporary jugaad */
    this.pauseRenderCycle = setInterval(() => {
      this.currTick();
    }, 16.6);
  }

  stop() {
    DataStore.setData(core => {
      core.gameState = GAME_STATES.STOP;
    }, 'core');

    cancelAnimationFrame(this.autoPilotCycle);

    this.autoPilotCycle = null;
  }

  rewind() {
    DataStore.setData(timing => {
      timing.timeScale = -1;
    }, 'timing');

    this.play();
  }

  forward() {
    DataStore.setData(timing => {
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

  changeActiveScene(id) {
    this.managers.entityManager.activeScene = { id };
  }

  getActiveScene() {
    return this.managers.entityManager.activeScene;
  }
}

export default Engine;
