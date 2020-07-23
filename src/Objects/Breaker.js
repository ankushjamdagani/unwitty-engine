class Breaker {
  constructor(initialConfig, env) {
    const {
      type,
      x,
      y,
      width,
      height,
      fillColor,
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
    this.fillColor = fillColor;
    this.u = initialSpeed;
    this.v = maxSpeed;
    this.dx = initialSpeed;
    this.options = options;
    this.env = env;
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
    if (x <= 0) {
      this.x = 0;
    } else if (x + width >= this.env.width) {
      this.x = this.env.width - width;
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
    const { x, y, width, height, fillColor } = this;

    this.env.ctx.fillStyle = fillColor;
    this.env.ctx.beginPath();
    this.env.ctx.fillRect(x, y, width, height);
    this.env.ctx.closePath();
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Breaker;
