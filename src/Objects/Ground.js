// import bg from "../assets/images/Brick - Small - Strong.svg";
// import bg from "../assets/images/Brick - Medium - Strong.svg";
import bg from "../assets/images/Brick - Large - Strong.svg";

class Ground {
  constructor(initialConfig, env) {
    const { type, x, y, width, height, ...options } = initialConfig;

    this.initialConfig = initialConfig;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.options = options;
    this.env = env;

    this.assets = {};

    this.preload([
      {
        key: "bg",
        image: bg,
      },
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

  start() {}

  stop() {}

  reset() {}

  draw() {
    const { x, y, width, height } = this;

    if (this.assets["bg"]) {
      const pattern = this.env.ctx.createPattern(this.assets["bg"], "repeat");
      this.env.ctx.fillStyle = pattern;
    //   this.env.ctx.fillStyle = 'red';
      this.env.ctx.beginPath();
      //   this.env.ctx.drawImage(this.assets["bg"], x, y, width, height);
      this.env.ctx.fillRect(x, y, width, height);
      this.env.ctx.closePath();
    }
  }

  update() {
    this.draw();
  }
}

export default Ground;
