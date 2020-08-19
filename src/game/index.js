import GameEngine from "../engine";

import Image from "../game1/assets/images/Ball1.svg";

const { Body } = GameEngine.helpers;

const WIDHT = window.innerWidth;
const HEIGHT = window.innerHeight;

const engine = new GameEngine({ canvasId: "test-1", timeSpeed: 1 });
const { world } = engine.state;
const { renderer, resourceManager } = engine.managers;

resourceManager.loadResources([{ type: "image", key: "bg1", src: Image }]);

const mouse = {
  position: { x: 0, y: 0 },
};

const Player1 = Body.createRectangle({
  label: "Player1",
  position: [0, 0],
  width: 50,
  height: 50,
  styles: {
    backgroundColor: "orange",
  },
  debug: true,
});

const Player2 = Body.createArc({
  label: "Player2",
  position: [25, 25],
  radius: 25,
  styles: {
    image: "bg1",
    backgroundColor: "green",
    backgroundImage: "bg1",
  },
  debug: true,
});

const bg = Body.createRectangle({
  label: "bg",
  position: [0, 0],
  width: WIDHT,
  height: HEIGHT,
  styles: {
    backgroundColor: "#eee",
  },
  debug: true,
});

window.addEventListener("mousemove", (evt) => {
  const { clientX, clientY } = evt;
  mouse.position = {
    x: clientX,
    y: clientY,
  };
});

renderer.camera.bindTarget(mouse);

world.add(bg);
world.add(Player1);
world.add(Player2);

console.log(engine);

engine.autoPilot();
