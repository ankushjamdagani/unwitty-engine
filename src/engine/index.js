import ResourceManager from "./modules/ResourceManager";
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

function Engine(props) {
  // init phase
  this.props = props;

  /**
   * ------------ TIME CONTROLS ------------
   */
  this.timeSpeed = 1;
  this.ellapsedTime = 0; // might get computed based on frameRate

  /**
   * ------------ RESOURCE MANGER -------------
   */
  this.resourceManager = new ResourceManager();

  this.loadResources = (resources = []) => {
    resourceManager.addResources(resources);
  };

  this.unLoadResources = (resources = []) => {
    if (resources.length) {
      resourceManager.removeResources(resources);
    } else {
      resourceManager.removeAll();
    }
  };

  this.elements = []; // should itbe a <Map />

  function addElement(element) {
    this.elements.push(element);
  }

  function removeElement(id) {
    this.elements = this.elements.filter((el) => el.id === id);
  }

  function update() {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];

      element.update();
      element.render();
    }
  }

  function autoPilot() {
    requestAnimationFrame(autoPilot);

    // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
    if (this.ellapsedTime % 1 == 0) {
      for (let i = 0; i < this.timeSpeed; i += 1) {
        update();
      }
    }

    this.ellapsedTime += this.timeSpeed;
  }

  return {
    update,
    autoPilot,
    addElement,
    removeElement,
  };
}

export default Engine;
