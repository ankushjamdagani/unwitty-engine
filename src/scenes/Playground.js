import { GAME_STATES } from "../constants";

import Ball from "../objects/Ball";
import Breaker from "../objects/Breaker";

import CollisionHandler from "../observers/CollisionHandler";

class PlaygroundScene {
  constructor({ ctx, width, height, envApi }) {
    const ball = new Ball(
      {
        type: "circle",
        x: 100,
        y: 100,
        radius: 10,
        fillColor: "#3f8aff",
        initialSpeed: {
          x: 0,
          y: 0,
        },
        maxSpeed: {
          x: 5,
          y: -5,
        },
      },
      {
        ctx,
        width,
        height,
      }
    );

    const breaker = new Breaker(
      {
        type: "rect",
        x: width / 2 - 120,
        y: height - 15,
        width: 120,
        height: 15,
        fillColor: "#ff5a3f",
        initialSpeed: 0,
        maxSpeed: 15,
      },
      {
        ctx,
        width,
        height,
      }
    );

    this.ball = ball;
    this.breaker = breaker;
    this.envApi = envApi;
  }

  bindEvents() {
    window.addEventListener("keydown", this.listenArrowKeysDown);
    window.addEventListener("keyup", this.listenArrowKeysUp);
  }

  unBindEvents() {
    window.removeEventListener("keydown", this.listenArrowKeysDown);
    window.removeEventListener("keyup", this.listenArrowKeysUp);
  }

  listenArrowKeysDown = (e) => {
    if (e.which === 37) {
      this.breaker.goLeft();
    } else if (e.which === 39) {
      this.breaker.goRight();
    }
  };

  listenArrowKeysUp = (e) => {
    if (e.which === 37 || e.which === 39) {
      this.breaker.stop();
    }
  };

  update() {
    const collisionCoords = CollisionHandler.isCircleCollidingRect(
      this.ball,
      this.breaker,
      4
    );
    if (collisionCoords) {
      this.ball.dy = -this.ball.dy;
      const currScore = this.envApi.getScore();
      this.envApi.changeScore(currScore + 1);
    } else if (this.ball.y > this.breaker.y) {
      this.stop();
      this.envApi.changeState(GAME_STATES.END);
    }

    this.ball.update();
    this.breaker.update();
  }

  start() {
    this.bindEvents();
    this.ball.start();
    this.breaker.start();
  }

  stop() {
    this.unBindEvents();
    this.ball.stop();
    this.breaker.stop();
  }
}

export default PlaygroundScene;
