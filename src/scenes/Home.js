import { GAME_STATES } from "../constants";
import Animator from "../helpers/Animator";
import { CreatRect, CreateText } from "../helpers/Creator";

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

    CreatRect({
      ctx: this.ctx,
      x: this.width / 2 - 260,
      y: this.height / 2 - 85,
      width: 20,
      height: 200,
      fillColor: "#000",
    });

    CreatRect({
      ctx: this.ctx,
      x: this.width / 2 - 260,
      y: this.height / 2 + 104,
      width: 500,
      height: 20,
      fillColor: "#000",
    });

    CreatRect({
      ctx: this.ctx,
      x: this.width / 2 - 230,
      y: this.height / 2 - 105,
      width: 500,
      height: 200,
      fillColor: "#000",
    });

    CreateText({
      ctx: this.ctx,
      x: this.width / 2 - 190,
      y: this.height / 2,
      text: "Bricks Breaker",
      font: "30px primaryFont",
      fontColor: "#fff",
    });

    CreateText({
      ctx: this.ctx,
      x: this.width / 2 - 235,
      y: this.height / 2 + 70,
      text: "-----------------",
      font: "30px primaryFont",
      fontColor: "#fff",
    });

    CreateText({
      ctx: this.ctx,
      x: this.width / 2 - 140,
      y: this.height / 2 + 84,
      text: "Press SPACE to start.",
      font: "14px primaryFont",
      fontColor: `rgba(255,255,255,${subTitleOpacity})`,
    });
  }
}

export default HomeScene;
