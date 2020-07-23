class ScoreBoardScene {
  constructor({ ctx, width, height, envApi }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.envApi = envApi;
  }

  start() {
    this.envApi.changeScore(0);
  }

  stop() {}

  update() {
    this.ctx.fillStyle = "rgba(0,0,0,.1)";
    this.ctx.beginPath();
    this.ctx.fillRect(this.width - 210, 10, 200, 80);
    this.ctx.closePath();

    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.font = "20px monospace";
    this.ctx.fillText("SCORE", this.width - 200, 36);

    this.ctx.font = "40px monospace";
    this.ctx.fillText(this.envApi.getScore(), this.width - 200, 74);
  }
}

export default ScoreBoardScene;
