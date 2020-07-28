import rover from "../assets/images/Board3.svg";

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

    this.assets = {};

    this.preload([{ key: "rover", image: rover }]);
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

    this.assets["rover"] &&
      this.env.ctx.drawImage(this.assets["rover"], x, y, width, height);
  }

  update() {
    this.move();
    this.draw();
  }
}

export default Breaker;
