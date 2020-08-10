const withAcceleration = (ObjectModel) => {
  const accelerate = function (dirX, dirY) {
    const { x, y, maxX, maxY } = this.options.acceleration;
    if (x && dirX) {
      this.dx += x * dirX;
      if (this.dx > maxX || this.dx < -maxX) {
        this.dx = maxX * dirX;
      }
    }
    if (y && dirY) {
      this.dy += y * dirY;
      if (this.dy > maxY || this.dy < -maxY) {
        this.dy = maxY * dirY;
      }
    }
  };
  const move = function () {
    this.options.acceleration && this.accelerate();
    this.withAcceleration_move.apply(this, arguments);
  };

  ObjectModel.prototype.accelerate = accelerate;
  ObjectModel.prototype.withAcceleration_move = ObjectModel.prototype.move;
  ObjectModel.prototype.move = move;

  return ObjectModel;
};

export default withAcceleration;
