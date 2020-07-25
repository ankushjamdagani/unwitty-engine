import rover from "../assets/images/rover-1.png";

import Animator from "../helpers/Animators";

class Breaker {
  constructor(initialConfig, env) {
    const {
      type,
      x,
      y,
      width,
      height,
      initialSpeed,
      maxSpeed,
      tyreRadius,
      ...options
    } = initialConfig;

    this.initialConfig = initialConfig;
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.u = initialSpeed;
    this.v = maxSpeed;
    this.dx = initialSpeed;
    this.options = options;
    this.env = env;

    const roverImage = new Image();
    roverImage.src = rover;
    roverImage.onload = () => {
      this.roverImage = roverImage;
    };

    this.floatingAnimator = new Animator({
      startVal: 0,
      minVal: 0,
      maxVal: 10,
      step: 0.1,
      ticksInterval: 1,
    });
  }

  isTouchingBorder() {
    return (
      this.x === 0 ||
      this.y === 0 ||
      this.x + this.width === this.env.width ||
      this.y + this.height === this.env.height
    );
  }

  validatePosition() {
    const { x, width } = this;
    if (this.env.boundary.x) {
      if (x <= 0) {
        this.x = 0;
      } else if (x + width >= this.env.width) {
        this.x = this.env.width - width;
      }
    } else {
      if (x <= 0) {
        this.x = this.env.width - width;
      } else if (x + width >= this.env.width) {
        this.x = 0;
      }
    }
  }

  move() {
    this.x += this.dx;
    this.validatePosition();
  }

  goLeft() {
    this.dx = -this.v;
  }

  goRight() {
    this.dx = this.v;
  }

  start() {}

  stop() {
    this.dx = this.u;
  }

  reset() {
    this.x = this.initialConfig.x;
    this.y = this.initialConfig.y;
  }

  draw() {
    const { x, y, width, height } = this;
    const floatValue = this.floatingAnimator.update();

    this.roverImage &&
      this.env.ctx.drawImage(
        this.roverImage,
        x,
        y + floatValue,
        width,
        height - 15
      );
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Breaker;
