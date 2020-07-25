import { GAME_STATES } from "../constants";

import bg1 from "../assets/images/bg-1.png";
import bg2 from "../assets/images/bg-2.png";
import bg3 from "../assets/images/bg-3.png";

import road from "../assets/images/road-2.png";
import wall from "../assets/images/wall-1.png";
import sky from "../assets/images/sky-1.png";

import Ball from "../objects/Ball";
import Breaker from "../objects/Breaker";

import CollisionHandler from "../observers/CollisionHandler";

class PlaygroundScene {
  constructor({ ctx, width, height, boundary, envApi }) {
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
        boundary,
      }
    );

    const breaker = new Breaker(
      {
        type: "rect",
        x: width / 2 - 120,
        y: height - 140,
        width: 120,
        height: 40,
        initialSpeed: 0,
        maxSpeed: 15,
      },
      {
        ctx,
        width,
        height,
        boundary,
      }
    );

    this.playing = false;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.ball = ball;
    this.breaker = breaker;
    this.envApi = envApi;
    this.assets = {};

    this.preload([
      { key: "road", image: road },
      { key: "wall", image: wall },
      { key: "sky", image: sky },
    ]);
  }

  preload(assets) {
    assets.forEach((asset) => {
      const assetImage = new Image();
      assetImage.src = asset.image;
      assetImage.onload = () => {
        this.assets[asset.key] = assetImage;
      };
    });
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
    if (this.playing) {
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
    }

    if (this.assets["sky"]) {
      const pattern = this.ctx.createPattern(this.assets["sky"], "repeat");
      this.ctx.fillStyle = pattern;
      this.ctx.beginPath();
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.closePath();
    }

    if (this.assets["wall"]) {
      const pattern = this.ctx.createPattern(this.assets["wall"], "repeat");
      this.ctx.fillStyle = pattern;
      this.ctx.beginPath();
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.closePath();
    }

    if (this.assets["road"]) {
      const pattern = this.ctx.createPattern(this.assets["road"], "repeat");
      this.ctx.fillStyle = pattern;
      this.ctx.beginPath();
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.closePath();
    }

    this.ball.update();
    this.breaker.update();
  }

  start() {
    this.playing = true;
    this.ball.start();
    this.breaker.start();

    this.bindEvents();
  }

  stop() {
    this.playing = false;
    this.ball.stop();
    this.breaker.stop();

    this.unBindEvents();
  }

  reset() {
    this.playing = true;
    this.ball.reset();
    this.breaker.reset();

    this.start();
  }
}

export default PlaygroundScene;
