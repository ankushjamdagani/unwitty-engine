import { GAME_STATES } from "../constants";

import Animator from "../helpers/Animator";
import { CreateRect, CreateText } from "../helpers/Creator";

class ResultsScene {
  constructor(props) {
    this.props = props;
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
    const { envApi } = this.props;
    e.preventDefault();
    if (e.which === 32 || e.keyCode === 32) {
      envApi.changeState(GAME_STATES.PLAY);
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
    const { ctx, width, height, envApi } = this.props;
    const subTitleOpacity = this.subTitleOpacityAnimator.update();

    CreateRect({
      ctx,
      x: width / 2 - 260,
      y: height / 2 - 85,
      width: 20,
      height: 200,
      fillColor: "#000",
    });

    CreateRect({
      ctx,
      x: width / 2 - 260,
      y: height / 2 + 104,
      width: 500,
      height: 20,
      fillColor: "#000",
    });

    CreateRect({
      ctx,
      x: width / 2 - 230,
      y: height / 2 - 105,
      width: 500,
      height: 200,
      fillColor: "#000",
    });

    CreateText({
      ctx,
      x: width / 2 - 190,
      y: height / 2,
      text: "SCORE :: " + envApi.getScore(),
      font: "30px primaryFont",
      fontColor: "#fff",
    });

    CreateText({
      ctx,
      x: width / 2 - 235,
      y: height / 2 + 70,
      text: "-----------------",
      font: "30px primaryFont",
      fontColor: "#fff",
    });

    CreateText({
      ctx,
      x: width / 2 - 140,
      y: height / 2 + 84,
      text: "Press SPACE to start.",
      font: "14px primaryFont",
      fontColor: `rgba(255,255,255,${subTitleOpacity})`,
    });
  }
}

export default ResultsScene;
