// eslint-disable-next-line import/no-named-as-default-member
import ResourceManager from './modules/ResourceManager';
import EntityManager from './modules/EntityManager';
import Renderer from './modules/Renderer';
import { Vector2D } from './modules/core';

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
   * @prop { name, width, height, smoothImage, containerDOM, timeSpeed, fps }
   */
  constructor({
    name = 'demo_game',
    width = window.innerWidth,
    height = window.innerHeight,
    smoothImage = false,
    timeSpeed = 1,
    fps = 100,
    store,
    containerDOM
  } = {}) {
    this.props = {};
    this.state = {};
    this.managers = {};
    this.store = store;

    // @TODO :: maybe // if not performance concerns
    // this.props = this.store.getState();
    this.store.subscribe(() => {
      this.props = this.store.getState();
    });

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
    this.initTimer(timeSpeed, fps);
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
  initTimer(timeSpeed, fps) {
    const currTime = (performance || Date).now();

    this.syncStore(
      {
        timeSpeed,
        lastTime: currTime,
        currTime,
        deltaTime: 1000 / fps,
        fps: 0,
        fpsLastTick: 0,
        fpsHistory: []
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
        ...this.props.core
      })
    });
  }

  // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  autoPilot() {
    requestAnimationFrame(this.autoPilot.bind(this));

    this.update();
  }

  update() {
    /**
     * ============ RENDER STEP
     */
    const {
      timer: { ...timerClone },
      entityManager: { entities }
    } = this.props;

    const now = (performance || Date).now();
    const elapsed = now - timerClone.lastTime;

    timerClone.currTime = now;
    if (elapsed >= timerClone.deltaTime) {
      // compute FPS
      while (
        timerClone.fpsHistory.length > 0 &&
        timerClone.fpsHistory[0] <= now - 1000
      ) {
        timerClone.fpsHistory.shift();
      }
      timerClone.fpsHistory.push(now);

      timerClone.lastTime = now - (elapsed % 10);

      if (timerClone.currTime - timerClone.fpsLastTick >= 500) {
        timerClone.fps = timerClone.fpsHistory.length;
        timerClone.fpsLastTick = timerClone.currTime;
      }

      // Game Loop
      this.managers.renderer.renderTree('world', timerClone.currTime, entities);
    }

    this.syncStore(timerClone, 'timer');
  }
}

export default Engine;
