import { GAME_STATES } from "./constants";

import HomeScene from "./scenes/Home";
import PlaygroundScene from "./scenes/Playground";
import ScoreBoardScene from "./scenes/ScoreBoard";
import ResultsScene from "./scenes/Results";

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
    playgroundSceneInstance.reset();
    scoreBoardSceneInstance.reset();
  } else if (gameState === GAME_STATES.END) {
    resultsSceneInstance.start();
  }
}

const ENV_API = {
  changeState,
  changeScore,
  getScore,
};

const envInstance = {
  ctx,
  width: canvas.width,
  height: canvas.height,
  boundary: { x: true, y: true },
  envApi: ENV_API,
};

const playgroundSceneInstance = new PlaygroundScene(envInstance);

const homeSceneInstance = new HomeScene(envInstance);

const scoreBoardSceneInstance = new ScoreBoardScene(envInstance);

const resultsSceneInstance = new ResultsScene(envInstance);

function startGame() {
  requestAnimationFrame(startGame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  playgroundSceneInstance.update();
  if (gameState === GAME_STATES.HOME) {
    homeSceneInstance.update();
  } else if (gameState === GAME_STATES.PLAY) {
    scoreBoardSceneInstance.update();
  } else if (gameState === GAME_STATES.END) {
    resultsSceneInstance.update();
  }
}

window.GameAPI = {
  Scenes: {
    homeSceneInstance,
    playgroundSceneInstance,
    scoreBoardSceneInstance,
    resultsSceneInstance,
  },
};

changeState();
startGame();
