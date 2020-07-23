import { GAME_STATES } from "../constants";

class HomeScene {
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
    this.ctx.fillStyle = "#ff5a3f";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 50, this.height / 2 - 200, 400, 200);
    this.ctx.closePath();

    this.ctx.fillStyle = "#3f8aff";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 350, this.height / 2, 400, 200);
    this.ctx.closePath();

    this.ctx.fillStyle = "#fffad0";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 250, this.height / 2 - 100, 500, 200);
    this.ctx.closePath();

    this.ctx.fillStyle = "#000";
    this.ctx.font = "50px monospace";
    this.ctx.fillText(
      "Brick Breaker",
      this.width / 2 - 200,
      this.height / 2 + 10
    );

    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 200, this.height / 2 + 20, 400, 2);
    this.ctx.closePath();

    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.font = "20px monospace";
    this.ctx.fillText(
      "Press SPACE to play.",
      this.width / 2 - 195,
      this.height / 2 + 45
    );
  }
}

export default HomeScene;
