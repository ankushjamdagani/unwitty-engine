import { GAME_STATES } from "./constants";

import HomeScene from "./scenes/Home";
import PlaygroundScene from "./scenes/Playground";

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let gameState = GAME_STATES.HOME;

function changeState(state) {
  gameState = state !== undefined ? state : gameState;
  if (gameState === GAME_STATES.HOME) {
    homeScene.start();
  } else if (gameState === GAME_STATES.PLAY) {
    playgroundSceneInstance.start();
  }
}

const playgroundSceneInstance = new PlaygroundScene({
  ctx,
  width: canvas.width,
  height: canvas.height,
  envApi: {
    changeState,
  },
});

const homeScene = new HomeScene({
  ctx,
  width: canvas.width,
  height: canvas.height,
  envApi: {
    changeState,
  },
});

function startGame() {
  requestAnimationFrame(startGame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playgroundSceneInstance.update();
  if (gameState === GAME_STATES.HOME) {
    homeScene.update();
  }
}

window.GameAPI = { Scenes: { playgroundSceneInstance } };

changeState();
startGame();
