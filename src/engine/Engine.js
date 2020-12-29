// eslint-disable-next-line import/no-named-as-default-member
import ResourceManager from './modules/ResourceManager';
import EntityManager from './modules/EntityManager';
import Renderer from './modules/Renderer';
import { Vector2D } from './modules/core';

import observeStore from './DataStore/observeStore';
import { syncStore, clearStore } from './DataStore/reducers/core.actions';

import './styles.css';

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

class Engine {
  /**
   * @prop { name, width, height, smoothImage, containerDOM, timeScale, fps }
   */
  constructor({
    name = 'demo_game',
    width = window.innerWidth,
    height = window.innerHeight,
    smoothImage = false,
    timeScale = 1,
    fps = 100,
    store,
    containerDOM
  } = {}) {
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

    this.initDomManager(containerDOM);
    this.initTimer(timeScale, fps);
    this.initResourceManager();
    this.initEntityManager();
    this.initGameRenderer();
  }

  destroy() {
    return this;
  }

  syncStore(...args) {
    this.store.dispatch(syncStore.apply(this, args));
  }

  clearStore(...args) {
    this.store.dispatch(clearStore.apply(this, args));
  }

  initDomManager(containerDOM) {
    const {
      core: { key, width, height }
    } = this.props;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', `wrapper_demo_game`);
    wrapper.setAttribute('id', `wrapper_${key}`);
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;

    const canvasWrapper = document.createElement('div');
    canvasWrapper.setAttribute('class', `wrapper_canvas_demo_game`);
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
  initTimer(timeScale, fps) {
    const currTime = (performance || Date).now();

    this.syncStore(
      {
        timeScale,
        lastTime: 0,
        currTime,
        deltaTime: 1000 / fps,
        deltaTimeMin: 1000 / fps,
        deltaTimeMax: 1000 / (fps * 0.5),
        timestep: 1000 / fps,
        fps,
        fpsLastTick: 0,
        fpsHistory: [],
        fpsUpdateTime: 500
      },
      'timer'
    );
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
    const world = EntityManager.createWorld({
      gravity: 0,
      bounds: [
        Vector2D.create([-Infinity, -Infinity]),
        Vector2D.create([Infinity, Infinity])
      ]
    });
    const light = EntityManager.createLight({
      name: 'primary_light',
      position: Vector2D.zero()
    });

    entityManager.setRoot(world);
    entityManager.addChildren(world, light);

    this.managers.entityManager = entityManager;
  }

  initGameRenderer() {
    this.managers.renderer = new Renderer({
      engine: this,
      syncData: (data) => this.syncStore(data, 'renderManager'),
      clearData: () => this.clearStore('renderManager'),
      getData: () => ({
        ...this.props.renderManager,
        ...this.props.core,
        ...this.props.entityManager
      })
    });
  }

  /**
   * ============ RENDER STEP
   * https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
   */
  autoPilot() {
    requestAnimationFrame(this.autoPilot.bind(this));

    const { timer } = this.props;

    const currTime = (performance || Date).now();
    const elapsedTime = currTime - timer.lastTime;

    if (elapsedTime >= timer.timestep) {
      const {
        timestep,
        timeScale,
        fpsUpdateTime,
        fpsHistory,
        deltaTime: prevDeltaTime
      } = timer;
      let { lastTime, fps, fpsLastTick } = timer;

      let deltaTime = prevDeltaTime + elapsedTime;

      /**
       * @DANGER
       * elapsed time can be huge, because RAF get's paused when out of focus
       * - pause the game on out of focus
       * - maybe - keep update running with a slightly bigger steps and render only when on next focus
       * - optionally - can limit delta in a range but this somehow lowers FPS
       */
      // deltaTime = deltaTime < deltaTimeMin ? deltaTimeMin : deltaTime;
      // deltaTime = deltaTime > deltaTimeMax ? deltaTimeMax : deltaTime;

      // compute FPS
      // fps buffer have frames for 1sec. Length of it will give FPS
      while (fpsHistory.length > 0 && fpsHistory[0] <= currTime - 1000) {
        fpsHistory.shift();
      }
      fpsHistory.push(currTime);
      if (currTime - fpsLastTick >= fpsUpdateTime) {
        fps = fpsHistory.length;
        fpsLastTick = currTime;
      }

      // processInput

      // update
      let ctr = 0;
      const MAX_FRAMES_TO_SKIP = 5;
      while (deltaTime >= timestep && ctr < MAX_FRAMES_TO_SKIP) {
        this.update(timestep * timeScale);
        deltaTime -= timestep;
        ctr += 1;
      }

      deltaTime = deltaTime < 0 ? 0 : deltaTime;
      lastTime = currTime - (deltaTime % 10);

      // render
      // @todo :: add interpolation to remove stutter
      this.render(deltaTime / timestep);

      this.syncStore(
        {
          lastTime,
          fps,
          fpsLastTick,
          fpsHistory,
          deltaTime
        },
        'timer'
      );
    }
  }

  update(deltaTime) {
    const { entityManager } = this.store.getState();
    const _transform1 = entityManager.entities.transform1;
    const _transform2 = entityManager.entities.transform2;

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
  }

  render() {
    this.managers.renderer.renderTree('world');
  }
}

export default Engine;
