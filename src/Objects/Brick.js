import BrickSmall3 from "../assets/images/Brick - Small - Strong.svg";
import BrickSmall2 from "../assets/images/Brick - Small - Weak.svg";
import BrickSmall1 from "../assets/images/Brick - Small - Weakest.svg";

import BrickMedium3 from "../assets/images/Brick - Medium - Strong.svg";
import BrickMedium2 from "../assets/images/Brick - Medium - Weak.svg";
import BrickMedium1 from "../assets/images/Brick - Medium - Weakest.svg";

import BrickLarge3 from "../assets/images/Brick - Large - Strong.svg";
import BrickLarge2 from "../assets/images/Brick - Large - Weak.svg";
import BrickLarge1 from "../assets/images/Brick - Large - Weakest.svg";

const ImageSizeMap = [
  [BrickSmall3, BrickSmall2, BrickSmall1],
  [BrickMedium3, BrickMedium2, BrickMedium1],
  [BrickLarge3, BrickLarge2, BrickLarge1],
];

const ImageStrenghtMap = {
  0: "weakest",
  1: "weak",
  2: "strong",
};

class Brick {
  constructor(initialConfig, env) {
    const { size, strength, x, y, width, height, ...options } = initialConfig;

    this.initialConfig = initialConfig;
    this.strength = strength;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.options = options;
    this.env = env;

    this.assets = {};

    this.preload([
      {
        key: "strong",
        image: ImageSizeMap[size][0],
      },
      {
        key: "weak",
        image: ImageSizeMap[size][1],
      },
      {
        key: "weakest",
        image: ImageSizeMap[size][2],
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
    const { x, y, width, height, strength } = this;

    const image = this.assets[ImageStrenghtMap[strength]];

    image && this.env.ctx.drawImage(image, x, y, width, height);
  }

  onCollision() {
    this.strength -= 1;

    if (this.strength < 0) {
      this.disabled = true;
    }
  }

  update() {
    this.draw();
  }
}

export default Brick;
