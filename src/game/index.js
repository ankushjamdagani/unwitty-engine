import GameEngine from "../engine";

const { Element } = GameEngine.API;

const engine = new GameEngine({ canvasId: "test-1", timeSpeed: 1 });
const world = engine.world;
const camera = engine.camera;

const player1 = Element.createRectangle({
  name: "Player1",
  position: {
    x: 0,
    y: 0,
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

const player2 = Element.createRectangle({
  name: "Player2",
  position: {
    x: 0,
    y: 0,
  },
  width: 200,
  height: 100,
  renderProps: {
    fillColor: "green",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

const player3 = Element.createRectangle({
  name: "Player3",
  position: {
    x: window.innerWidth - 200,
    y: window.innerHeight - 200,
  },
  width: 200,
  height: 200,
  renderProps: {
    fillColor: "blue",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

const player4 = Element.createRectangle({
  name: "Player4",
  position: {
    x: 0,
    y: window.innerHeight - 200,
  },
  width: 200,
  height: 200,
  renderProps: {
    fillColor: "blue",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

const player5 = Element.createRectangle({
  name: "Player5",
  position: {
    x: window.innerWidth - 200,
    y: 0,
  },
  width: 200,
  height: 200,
  renderProps: {
    fillColor: "blue",
    strokeColor: "black",
    strokeSize: 2,
    shapeStyle: 1,
  },
});

window.addEventListener("mousemove", (evt) => {
  const { clientX, clientY } = evt;
  player1.position = {
    x: clientX - player1.props.width / 2,
    y: clientY - player1.props.height / 2,
  };
});

camera.bindTarget(player1);

player3.add(player1);
player1.add(player2);
player1.add(player4);
player1.add(player5);

world.add(player3);

engine.autoPilot();
