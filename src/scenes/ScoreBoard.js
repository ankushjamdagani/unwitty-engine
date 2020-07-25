class ScoreBoardScene {
  constructor({ ctx, width, height, envApi }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.envApi = envApi;
  }

  start() {}

  stop() {}

  reset() {
    this.envApi.changeScore(0);
  }

  update() {
    this.ctx.fillStyle = "rgba(0,0,0,.2)";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width - 210, 10, 200, 80);
    this.ctx.closePath();

    this.ctx.fillStyle = "#fff";
    this.ctx.font = "14px primaryFont";
    this.ctx.fillText("SCORE", this.width - 190, 40);

    this.ctx.font = "30px primaryFont";
    this.ctx.fillText(this.envApi.getScore(), this.width - 190, 80);
  }
}

export default ScoreBoardScene;
