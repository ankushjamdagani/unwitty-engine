import { GAME_STATES } from "../constants";

import Ball from "../objects/Ball";
import Breaker from "../objects/Breaker";
import Brick from "../objects/Brick";
import Ground from "../objects/Ground";

import CollisionHandler from "../observers/CollisionHandler";

class PlaygroundScene {
  constructor({ ctx, width, height, boundary, envApi }) {
    const ball = new Ball(
      {
        type: "circle",
        x: 100,
        y: 100,
        radius: 15,
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
        y: height - 40 - 100,
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

    const ground = new Ground(
      {
        x: 0,
        y: height - 100,
        width: width,
        height: 100,
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

    this.brickMatrix = [
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    ];

    this.playing = false;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.envApi = envApi;
    this.assets = {};

    this.ball = ball;
    this.breaker = breaker;
    this.bricks = [];
    this.ground = ground;

    this.mountBricks();
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

  mountBricks() {
    const unitWidth = this.width / 40;
    const unitHeight = this.height / 30;

    let y = 0;
    this.brickMatrix.forEach((row) => {
      let x = 0;
      y += unitHeight + 4;
      row.forEach((colVal) => {
        if (colVal) {
          const brick = new Brick(
            {
              type: colVal - 1,
              width: unitWidth * colVal,
              height: unitHeight,
              x,
              y,
            },
            {
              ctx: this.ctx,
              width: this.width,
              height: this.height,
            }
          );
          this.bricks.push(brick);
        }
        x += unitWidth * (colVal || 1) + 4;
      });
    });
  }

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

    this.ground.update();
    this.bricks.forEach((br) => br.update());
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
