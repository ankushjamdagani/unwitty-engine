import * as Constants from './constants';

import ResourceManager from './modules/ResourceManager';
import EntityManager from './modules/EntityManager';
import Renderer from './modules/Renderer';
import { Vector2D } from './modules/core';

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
   * @prop { id, width, height, smoothImage, containerDOM, timeSpeed, fps }
   */
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.managers = {};

    this.init();
  }

  init() {
    this.initDomManager();
    this.initTimer();
    this.initResourceManager();
    this.initEntityManager();
    this.initGameRenderer();

    // this.initControlsBar();
  }

  destroy() {}

  initDomManager() {
    const { id, width, height, containerDOM } = this.props;
    const uniqueKey = id || 'game_canvas';
    const _width = width || window.innerWidth;
    const _height = height || window.innerHeight;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', `wrapper_${uniqueKey}`);
    wrapper.style.width = `${_width}px`;
    wrapper.style.height = `${_height}px`;

    const canvasWrapper = document.createElement('div');
    canvasWrapper.setAttribute('id', `wrapper_canvas_${uniqueKey}`);
    canvasWrapper.style.width = `${_width}px`;
    canvasWrapper.style.height = `${_height}px`;

    const overlaysWrapper = document.createElement('div');
    overlaysWrapper.setAttribute('id', `wrapper_overlays_${uniqueKey}`);
    overlaysWrapper.style.width = `${_width}px`;
    overlaysWrapper.style.height = `${_height}px`;

    wrapper.appendChild(canvasWrapper);
    wrapper.appendChild(overlaysWrapper);

    (containerDOM || document.body).appendChild(wrapper);
  }

  getCanvasWrapper() {
    const { id } = this.props;
    const uniqueKey = id || 'game_canvas';
    return document.getElementById(`wrapper_canvas_${uniqueKey}`);
  }

  getOverlaysWrapper() {
    const { id } = this.props;
    const uniqueKey = id || 'game_canvas';
    return document.getElementById(`wrapper_overlays_${uniqueKey}`);
  }

  initGameRenderer() {
    const { id, width, height, smoothImage } = this.props;
    const uniqueKey = id || 'game_canvas';
    const _width = width || window.innerWidth;
    const _height = height || window.innerHeight;

    const canvasWrapper = this.getCanvasWrapper();

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', uniqueKey);
    canvas.style.cursor = 'crosshair'; // or none
    canvas.width = _width;
    canvas.height = _height;

    canvasWrapper.appendChild(canvas);

    const context = canvas.getContext('2d');
    context.mozImageSmoothingEnabled = !!smoothImage;
    context.webkitImageSmoothingEnabled = !!smoothImage;
    context.msImageSmoothingEnabled = !!smoothImage;
    context.imageSmoothingEnabled = !!smoothImage;

    this.managers.renderer = new Renderer({
      key: uniqueKey,
      canvas,
      context,
      engine: this
    });
  }

  // Take frame per second in consideration
  initTimer() {
    const { timeSpeed = 1, fps = 100 } = this.props;
    const currTime = (performance || Date).now();

    this.state.timer = {
      timeSpeed: timeSpeed,
      lastTime: currTime,
      currTime: currTime,
      deltaTime: 1000 / fps,
      fps: 0,
      fpsLastTick: 0,
      fpsHistory: []
    };
  }

  //          |--------------------|
  //          last                  now

  /**
   * ------------ RESOURCE MANGER -------------
   */
  initResourceManager() {
    const resourceManager = new ResourceManager();

    this.managers.resourceManager = resourceManager;
  }

  initEntityManager() {
    const entityManager = new EntityManager();
    const world = EntityManager.createWorld({
      gravity: 0,
      bounds: [
        new Vector2D(-Infinity, -Infinity),
        new Vector2D(Infinity, Infinity)
      ]
    });
    const light = EntityManager.createLight({ position: Vector2D.zero() });

    entityManager.setRoot(world);
    world.add(light);

    this.managers.entityManager = entityManager;
    this.state.world = world;
    this.state.light = light;
  }

  // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  autoPilot() {
    requestAnimationFrame(this.autoPilot.bind(this));

    const { timer } = this.state;
    const now = (performance || Date).now();
    const elapsed = now - timer.lastTime;

    console.log(elapsed);

    timer.currTime = now;
    if (elapsed >= timer.deltaTime) {
      // compute FPS
      while (timer.fpsHistory.length > 0 && timer.fpsHistory[0] <= now - 1000) {
        timer.fpsHistory.shift();
      }
      timer.fpsHistory.push(now);

      timer.lastTime = now - (elapsed % 10);

      if (timer.currTime - timer.fpsLastTick >= 500) {
        timer.fps = timer.fpsHistory.length;
        timer.fpsLastTick = timer.currTime;
      }

      console.log('FPS :: ', timer.fps);

      // Game Loop
      this.update(timer.currTime);
    }
  }

  update() {
    /**
     * ============ RENDER STEP
     */
    this.managers.renderer.renderTree(
      this.state.world,
      this.state.timer.currTime
    );
  }
}

Engine.Constants = Constants;
Engine.helpers = {
  ...EntityManager
};

export default Engine;
