import ResourceManager from "./modules/ResourceManager";
import EntityManager from "./modules/EntityManager";
import { Vector2D, Commons } from "./modules/core";

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

    this.init();
  }

  init() {
    this.initCanvas();
    this.initTimer();
    this.initResourceManager();
    this.initEntityManager();
  }

  destroy() {}

  initCanvas() {
    const { canvasId, canvasWidth, canvasHeight } = this.props;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", canvasId);
    canvas.width = canvasWidth || window.innerWidth;
    canvas.height = canvasHeight || window.innerHeight;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    this.canvas = {
      element: canvas,
      context: ctx,
    };

    this.screen = { width: canvas.width, height: canvas.height };
  }

  // Take frame per second in consideration
  initTimer() {
    const { timeSpeed = 1 } = this.props;

    this.timeSpeed = timeSpeed;
    this.lastTick = 0;
    this.currTick = 0;
  }

  /**
   * ------------ RESOURCE MANGER -------------
   */
  initResourceManager() {
    const resourceManager = new ResourceManager();

    this.resourceManager = resourceManager;
    this.loadResources = resourceManager.addResources;
    this.unLoadResources = resourceManager.removeResources;
  }

  initEntityManager() {
    this.entityManager = new EntityManager();

    const world = EntityManager.createWorld({
      gravity: 0,
      bounds: [
        new Vector2D(-Infinity, -Infinity),
        new Vector2D(Infinity, Infinity),
      ],
    });
    const camera = EntityManager.createCamera({
      position: new Vector2D(0, 0),
      rotation: 0,
    });
    const light = EntityManager.createLight({ position: new Vector2D(0, 0) });

    this.entityManager.setRoot(world);
    world.add(camera);
    world.add(light);
  }

  // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  autoPilot = () => {
    requestAnimationFrame(this.autoPilot);

    const ticksPassed = this.currTick - this.lastTick;

    if (!ticksPassed || ticksPassed >= 1) {
      for (let i = 0; i < this.timeSpeed; i += 1) {
        this.lastTick = this.currTick;
        this.update();
      }
    }

    this.currTick += this.timeSpeed;
  };

  update() {
    console.log("PLAYING......", this.currTick);
  }
}

export default Engine;
