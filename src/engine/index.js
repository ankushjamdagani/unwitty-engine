import * as Constants from "./constants";

import ResourceManager from "./modules/ResourceManager";
import EntityManager from "./modules/EntityManager";
import Renderer from "./modules/Renderer";
import { Vector2D } from "./modules/core";

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

    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", canvasId);
    canvas.style.cursor = "crosshair"; // or none
    canvas.width = canvasWidth || window.innerWidth;
    canvas.height = canvasHeight || window.innerHeight;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.mozImageSmoothingEnabled = !!smoothImage;
    ctx.webkitImageSmoothingEnabled = !!smoothImage;
    ctx.msImageSmoothingEnabled = !!smoothImage;
    ctx.imageSmoothingEnabled = !!smoothImage;

    this.state.canvas = {
      element: canvas,
      context: ctx,
    };

    this.state.screen = {
      width: canvas.width,
      height: canvas.height,
      aspectRatio: canvas.width / canvas.height,
    };
  }

  // Take frame per second in consideration
  initTimer() {
    const { timeSpeed = 1 } = this.props;

    this.state.timer = {
      timeSpeed: timeSpeed,
      lastTick: 0,
      currTick: 0,
    };
  }

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
        new Vector2D(Infinity, Infinity),
      ],
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
  autoPilot = () => {
    requestAnimationFrame(this.autoPilot);

    const { currTick, lastTick, timeSpeed } = this.state.timer;

    const ticksPassed = currTick - lastTick;

    if (!ticksPassed || ticksPassed >= 1) {
      for (let i = 0; i < timeSpeed; i += 1) {
        this.state.timer.lastTick = currTick;
        this.update();
      }
    }

    this.state.timer.currTick += timeSpeed;
  };

  update() {
    /**
     * ============ RENDER STEP
     */
    this.managers.renderer.renderTree(this.state.world);
  }
}

Engine.Constants = Constants;
Engine.helpers = {
  ...EntityManager,
};

export default Engine;
