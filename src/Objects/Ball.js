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

    this.env.ctx.beginPath();
    this.env.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.env.ctx.closePath();

    this.env.ctx.fillStyle = fillColor;
    this.env.ctx.fill();
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Ball;
