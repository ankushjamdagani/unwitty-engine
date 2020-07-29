import "./index.css";

import { GAME_STATES } from "./constants";

import Component from "./HOC/Component";

import HomeScene from "./scenes/Home";
import PlaygroundScene from "./scenes/Playground";
import ScoreBoardScene from "./scenes/ScoreBoard";
import GameDialogScene from "./scenes/GameDialog";
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
    const gameDialogSceneInstance = new GameDialogScene(env);
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
      gameDialogSceneInstance,
      resultsSceneInstance,
    };
  }

  init = () => {
    this.changeState();
    this.startGame();
    this.bindEvents();
  };

  bindEvents() {
    window.addEventListener("keyup", this.listenKeysUp);
  }

  unBindEvents() {
    window.removeEventListener("keyup", this.listenKeysUp);
  }

  listenKeysUp = (e) => {
    e.preventDefault();
    const { env, activeState } = this.state;
    if (e.which === 27 || e.keyCode === 27) {
      if (activeState !== GAME_STATES.PAUSE) {
        this.changeState(GAME_STATES.PAUSE);
      }
    } else if (e.which === 32 || e.keyCode === 32) {
      if (activeState !== GAME_STATES.PLAY) {
        this.changeState(GAME_STATES.PLAY);
      }
    } else if (e.which === 32 || e.keyCode === 32) {
      env.audioHandler.mute();
    }
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

  changeScore = (score) => {
    this.setState({
      score,
    });
  };

  changeState = (state) => {
    const { activeState, env } = this.state;
    const newState = state !== undefined ? state : activeState;
    this.setState({
      activeState: newState,
    });

    if (newState === GAME_STATES.HOME) {
      this.elements.homeSceneInstance.start();
    } else if (newState === GAME_STATES.PLAY) {
      if (activeState === GAME_STATES.PAUSE) {
        this.elements.playgroundSceneInstance.resume();
      } else {
        this.elements.playgroundSceneInstance.reset();
        this.elements.scoreBoardSceneInstance.reset();
      }
    } else if (newState === GAME_STATES.END) {
      this.elements.playgroundSceneInstance.stop();
    } else if (newState === GAME_STATES.PAUSE) {
      this.elements.playgroundSceneInstance.pause();
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
    } else if (activeState === GAME_STATES.PAUSE) {
      this.elements.scoreBoardSceneInstance.update();
      this.elements.gameDialogSceneInstance.update();
    }
  };
}

const gameEngine = new GameEngine();
gameEngine.init();

window.GameEngineApi = gameEngine;
