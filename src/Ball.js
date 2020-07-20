class Ball {
  constructor(
    { x, y, radius, fillColor, initialSpeed },
    /**
     * ---- ENV ----
     * ctx, width, height, gravity, fluidFriction, surfaceFriction
     */
    env
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillColor = fillColor;
    this.dx = initialSpeed;
    this.dy = initialSpeed;
    this.env = env;
  }

  draw() {
    const { x, y, radius, fillColor } = this;
    this.env.ctx.beginPath();
    this.env.ctx.fillStyle = fillColor;
    this.env.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.env.ctx.fill();
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

  applyGravity() {
    this.dy += this.env.gravity;
  }

  applyFluidResistance() {
    if (this.dy > 0) {
      this.dy -= this.env.fluidFriction;
    } else if (this.dy < 0) {
      this.dy += this.env.fluidFriction;
    }
    if (this.dx > 0) {
      this.dx -= this.env.fluidFriction;
    } else if (this.dx < 0) {
      this.dx += this.env.fluidFriction;
    }
  }

  applySurfaceFriction() {
    if (
      this.x - this.radius == 0 ||
      this.x + this.radius === this.env.width ||
      this.y - this.radius == 0 ||
      this.y + this.radius === this.env.height
    ) {
      if (this.dx > 0) {
        this.dx -= this.env.surfaceFriction;
      } else if (this.dx < 0) {
        this.dx += this.env.surfaceFriction;
      }
      if (this.dy > 0) {
        this.dy -= this.env.surfaceFriction;
      } else if (this.dy < 0) {
        this.dy += this.env.surfaceFriction;
      }
    }
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.validatePosition();
    this.applyGravity();
    this.applyFluidResistance();
    this.applySurfaceFriction();
    this.draw();
  }
}

export default Ball;
