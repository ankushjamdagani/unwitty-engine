import { GAME_STATES } from "../constants";

class ResultsScene {
  constructor({ ctx, width, height, envApi }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.envApi = envApi;
  }

  bindEvents() {
    window.addEventListener("keyup", this.listenKeysUp);
  }

  unBindEvents() {
    window.removeEventListener("keyup", this.listenKeysUp);
  }

  listenKeysUp = (e) => {
    e.preventDefault();
    if (e.which === 32 || e.keyCode === 32) {
      this.envApi.changeState(GAME_STATES.PLAY);
      this.stop();
    }
  };

  start() {
    this.bindEvents();
  }

  stop() {
    this.unBindEvents();
  }

  update() {
    this.ctx.fillStyle = "#000";
    this.ctx.font = "50px monospace";
    this.ctx.fillText(
      "SCORE :: " + this.envApi.getScore(),
      this.width / 2 - 200,
      this.height / 2 - 10
    );

    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 200, this.height / 2 + 20, 400, 2);
    this.ctx.closePath();

    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.font = "20px monospace";
    this.ctx.fillText(
      "Press SPACE to start.",
      this.width / 2 - 195,
      this.height / 2 + 45
    );
  }
}

export default ResultsScene;
