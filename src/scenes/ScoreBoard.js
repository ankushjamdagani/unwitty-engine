import ball1 from "../assets/images/Ball1.svg";

class ScoreBoardScene {
  constructor({ ctx, width, height, envApi }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.envApi = envApi;

    this.assets = {};

    this.preload([{ key: 1, image: ball1 }]);
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

  reset() {
    this.envApi.changeScore(0);
  }

  update() {
    this.ctx.strokeStyle = "rgba(0,0,0,1)";
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.strokeRect(this.width - 210, 10, 200, 80);
    this.ctx.closePath();

    this.ctx.fillStyle = "#000 ";
    this.ctx.font = "14px primaryFont";
    this.ctx.fillText("SCORE", this.width - 190, 40);

    this.ctx.font = "30px primaryFont";
    this.ctx.fillText(this.envApi.getScore(), this.width - 190, 80);
  }
}

export default ScoreBoardScene;
