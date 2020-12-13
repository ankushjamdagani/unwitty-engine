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
   * @prop { canvasId, canvasWidth, canvasHeight, timeSpeed }
   */
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.managers = {};

    this.init();
    this.postInit();
  }

  init() {
    this.initCanvas();
    this.initTimer();
    this.initResourceManager();
    this.initEntityManager();
    this.initRenderer();
  }

  postInit() {
    this.managers.resourceManager.init &&
      this.managers.resourceManager.init(this);
    this.managers.entityManager.init && this.managers.entityManager.init(this);
    this.managers.renderer.init && this.managers.renderer.init(this);
  }

  destroy() {}

  initCanvas() {
    const { canvasId, canvasWidth, canvasHeight, smoothImage } = this.props;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', canvasId);
    canvas.style.cursor = 'crosshair'; // or none
    canvas.width = canvasWidth || window.innerWidth;
    canvas.height = canvasHeight || window.innerHeight;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.mozImageSmoothingEnabled = !!smoothImage;
    ctx.webkitImageSmoothingEnabled = !!smoothImage;
    ctx.msImageSmoothingEnabled = !!smoothImage;
    ctx.imageSmoothingEnabled = !!smoothImage;

    this.state.canvas = {
      element: canvas,
      context: ctx
    };

    this.state.screen = {
      width: canvas.width,
      height: canvas.height,
      aspectRatio: canvas.width / canvas.height
    };
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

  initRenderer() {
    this.managers.renderer = new Renderer();
  }

  // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  autoPilot() {
    requestAnimationFrame(this.autoPilot.bind(this));

    const { timer } = this.state;
    const now = (performance || Date).now();
    const elapsed = now - timer.lastTime;

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
