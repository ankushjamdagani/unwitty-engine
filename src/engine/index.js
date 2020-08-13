import ResourceManager from "./modules/ResourceManager";
import EntityManager from "./modules/EntityManager";
// Initialise
// Load Resources
// Set camera
// Set Light**
// Load world
// Add elements / constraints / elements-groups / styles / transformations / forces
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
  // { canvasId, canvasWidth, canvasHeight, timeSpeed }
  constructor(props = {}) {
    this.props = props;

    this.initCanvas();
    this.initTimer();
    this.initResourceManager();
    this.initEntityManager();
  }

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
    this.ellapsedTime = 0;
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
  }

  autoPilot() {
    requestAnimationFrame(this.autoPilot);

    // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
    if (this.ellapsedTime % 1 == 0) {
      for (let i = 0; i < this.timeSpeed; i += 1) {
        this.update();
      }
    }

    this.ellapsedTime += this.timeSpeed;
  }

  update() {
    console.log("PLAYING......");
  }
}

export default Engine;
