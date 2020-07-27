import { GAME_STATES } from "../constants";
import Animator from "../helpers/Animators";

class HomeScene {
  constructor({ ctx, width, height, envApi }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.envApi = envApi;
    this.subTitleOpacityAnimator = new Animator({
      startVal: 0,
      minVal: 0,
      maxVal: 1,
      step: 0.1,
      ticksInterval: 2,
    });
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
    const subTitleOpacity = this.subTitleOpacityAnimator.update();

    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 230, this.height / 2 - 105, 500, 200);
    this.ctx.closePath();

    this.ctx.fillStyle = "#1c1d23";
    this.ctx.fillStyle = "#000";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width / 2 - 250, this.height / 2 - 85, 500, 200);
    this.ctx.closePath();

    this.ctx.fillStyle = "#fff";
    this.ctx.font = "30px primaryFont";
    this.ctx.fillText(
      "Bricks Breaker",
      this.width / 2 - 200,
      this.height / 2
    );

    this.ctx.fillStyle = "#fff";
    this.ctx.font = "30px primaryFont";
    this.ctx.fillText("--------", this.width / 2 - 205, this.height / 2 + 30);

    this.ctx.fillStyle = `rgba(255,255,255,${subTitleOpacity})`;
    this.ctx.font = "14px primaryFont";
    this.ctx.fillText(
      "Press SPACE to start.",
      this.width / 2 - 200,
      this.height / 2 + 45
    );
  }
}

export default HomeScene;
