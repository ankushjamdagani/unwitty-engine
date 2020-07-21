class Ball {
  constructor(
    { type, x, y, radius, fillColor, initialSpeed, ...options },
    env
  ) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillColor = fillColor;
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
    if (x - radius <= 0) {
      this.x = radius;
      this.dx = -this.dx;
    } else if (x + radius >= this.env.width) {
      this.x = this.env.width - radius;
      this.dx = -this.dx;
    }

    if (y - radius <= 0) {
      this.y = radius;
      this.dy = -this.dy;
    } else if (y + radius >= this.env.height) {
      this.y = this.env.height - radius;
      this.dy = -this.dy;
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.validatePosition();
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
    this.draw();
  }
}

export default Ball;
