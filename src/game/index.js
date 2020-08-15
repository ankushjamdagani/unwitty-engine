import GameEngine from "../engine";

const { Element } = GameEngine.API;

const WIDHT = window.innerWidth;
const HEIGHT = window.innerHeight;

const engine = new GameEngine({ canvasId: "test-1", timeSpeed: 1 });
const { world, canvas } = engine.state;
const { renderer } = engine.managers;

const crosshair = Element.createRectangle({
  name: "Player1",
  position: {
    x: WIDHT / 2,
    y: HEIGHT / 2,
  },
  width: 10,
  height: 10,
  renderProps: {
    fillColor: "red",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

const bg = Element.createRectangle({
  name: "bg",
  position: {
    x: 0,
    y: 0,
  },
  width: WIDHT,
  height: HEIGHT,
  renderProps: {
    fillColor: "#eee",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

window.addEventListener("mousemove", (evt) => {
  const { clientX, clientY } = evt;
  crosshair.position = {
    x: clientX,
    y: clientY,
  };
});

renderer.camera.bindTarget(crosshair);

world.add(bg);
world.add(crosshair);

engine.autoPilot();
