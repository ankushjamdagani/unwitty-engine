import { GAME_STATES } from "./constants";

import HomeScene from "./scenes/Home";
import PlaygroundScene from "./scenes/Playground";
import ScoreBoardScene from "./scenes/ScoreBoard";

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let gameState = GAME_STATES.HOME;
let gameScore = 0;

function changeScore(score) {
  gameScore = score;
}

function getScore() {
  return gameScore;
}

function changeState(state) {
  gameState = state !== undefined ? state : gameState;
  if (gameState === GAME_STATES.HOME) {
    homeSceneInstance.start();
  } else if (gameState === GAME_STATES.PLAY) {
    playgroundSceneInstance.start();
    scoreBoardSceneInstance.start();
  }
}

const ENV_API = {
  changeState,
  changeScore,
  getScore,
};

const playgroundSceneInstance = new PlaygroundScene({
  ctx,
  width: canvas.width,
  height: canvas.height,
  envApi: ENV_API,
});

const homeSceneInstance = new HomeScene({
  ctx,
  width: canvas.width,
  height: canvas.height,
  envApi: ENV_API,
});

const scoreBoardSceneInstance = new ScoreBoardScene({
  ctx,
  width: canvas.width,
  height: canvas.height,
  envApi: ENV_API,
});

function startGame() {
  requestAnimationFrame(startGame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playgroundSceneInstance.update();
  scoreBoardSceneInstance.update();
  if (gameState === GAME_STATES.HOME) {
    homeSceneInstance.update();
  }
}

window.GameAPI = {
  Scenes: {
    homeSceneInstance,
    playgroundSceneInstance,
    scoreBoardSceneInstance,
  },
};

changeState();
startGame();
