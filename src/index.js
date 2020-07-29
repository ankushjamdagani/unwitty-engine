import "./index.css";

import { GAME_STATES } from "./constants";

import Component from "./HOC/Component";

import HomeScene from "./scenes/Home";
import PlaygroundScene from "./scenes/Playground";
import ScoreBoardScene from "./scenes/ScoreBoard";
import ResultsScene from "./scenes/Results";

import AudioHandler from "./objects/AudioHandler";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

class GameEngine extends Component {
  constructor(props) {
    super(props);
    const canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const ctx = canvas.getContext("2d");
    const audioHandler = new AudioHandler();

    const env = {
      ctx,
      audioHandler,
      width: canvas.width,
      height: canvas.height,
      boundary: { x: true, y: true },
      gameInstance: this,
    };

    const playgroundSceneInstance = new PlaygroundScene(env);
    const homeSceneInstance = new HomeScene(env);
    const scoreBoardSceneInstance = new ScoreBoardScene(env);
    const resultsSceneInstance = new ResultsScene(env);

    this.state = {
      activeState: GAME_STATES.HOME,
      score: 0,
      level: 1,
      lives: 3,
      env,
    };

    this.elements = {
      homeSceneInstance,
      playgroundSceneInstance,
      scoreBoardSceneInstance,
      resultsSceneInstance,
    };
  }

  init = () => {
    this.changeState();
    this.startGame();
  };

  changeScore = (score) => {
    this.setState({
      score,
    });
  };

  getScore = () => {
    return this.state.score;
  };

  getState = () => {
    return this.state.activeState;
  };

  getLevel = () => {
    return this.state.level;
  };

  changeState = (state) => {
    const { activeState } = this.state;
    const newState = state !== undefined ? state : activeState;
    this.setState({
      activeState: newState,
    });

    if (newState === GAME_STATES.HOME) {
      this.elements.homeSceneInstance.start();
    } else if (newState === GAME_STATES.PLAY) {
      this.elements.playgroundSceneInstance.reset();
      this.elements.scoreBoardSceneInstance.reset();
    } else if (newState === GAME_STATES.END) {
      this.elements.resultsSceneInstance.start();
    }
  };

  startGame = () => {
    const { env, activeState } = this.state;
    requestAnimationFrame(this.startGame);

    env.ctx.clearRect(0, 0, WIDTH, HEIGHT);

    this.elements.playgroundSceneInstance.update();
    if (activeState === GAME_STATES.HOME) {
      this.elements.homeSceneInstance.update();
    } else if (activeState === GAME_STATES.PLAY) {
      this.elements.scoreBoardSceneInstance.update();
    } else if (activeState === GAME_STATES.END) {
      this.elements.resultsSceneInstance.update();
    }
  };
}

const gameEngine = new GameEngine();
gameEngine.init();

window.GameEngineApi = gameEngine;
