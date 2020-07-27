import ball1 from "../assets/images/Ball1.svg";
import ball2 from "../assets/images/Ball2.svg";
import ball3 from "../assets/images/Ball3.svg";

import Animator from "../helpers/Animators";

class Ball {
  constructor(initialConfig, env) {
    const {
      type,
      x,
      y,
      radius,
      fillColor,
      initialSpeed,
      maxSpeed,
      ...options
    } = initialConfig;

    this.initialConfig = initialConfig;
    this.type = type;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillColor = fillColor;
    this.ux = initialSpeed.x;
    this.uy = initialSpeed.y;
    this.vx = maxSpeed.x;
    this.vy = maxSpeed.y;
    this.dx = initialSpeed.x;
    this.dy = initialSpeed.y;
    this.options = options;
    this.env = env;
    this.assets = {};

    this.preload([
      { key: 1, image: ball1 },
      { key: 2, image: ball2 },
      { key: 3, image: ball3 },
    ]);

    this.imageAnimator = new Animator({
      startVal: 1,
      minVal: 1,
      maxVal: 3,
      step: 1,
      ticksInterval: 5,
    });
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

  isTouchingBorder() {
    return (
      this.x - this.radius == 0 ||
      this.x + this.radius === this.env.width ||
      this.y - this.radius == 0 ||
      this.y + this.radius === this.env.height
    );
  }

  validatePosition() {
    const { x, y, radius } = this;
    if (this.env.boundary.x) {
      if (x - radius <= 0) {
        this.x = radius;
        this.dx = -this.dx;
      } else if (x + radius >= this.env.width) {
        this.x = this.env.width - radius;
        this.dx = -this.dx;
      }
    } else {
      if (x - radius <= 0) {
        this.x = this.env.width - radius;
      } else if (x + radius >= this.env.width) {
        this.x = radius;
      }
    }

    if (this.env.boundary.y) {
      if (y - radius <= 0) {
        this.y = radius;
        this.dy = -this.dy;
      } else if (y + radius >= this.env.height) {
        this.y = this.env.height - radius;
        this.dy = -this.dy;
      }
    } else {
      if (y - radius <= 0) {
        this.y = this.env.height - radius;
      } else if (y + radius >= this.env.height) {
        this.y = radius;
      }
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.validatePosition();
  }

  start() {
    this.dx = this.vx;
    this.dy = this.vy;
  }

  stop() {
    this.dx = this.ux;
    this.dy = this.uy;
  }

  reset() {
    this.x = this.initialConfig.x;
    this.y = this.initialConfig.y;
  }

  draw() {
    const { x, y, radius, fillColor } = this;
    const imageIndex = this.imageAnimator.update();

    this.assets[1] &&
      this.env.ctx.drawImage(
        this.assets[1],
        x - radius,
        y - radius,
        radius * 2,
        radius * 2
      );
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Ball;
