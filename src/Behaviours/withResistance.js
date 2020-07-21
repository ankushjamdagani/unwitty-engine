const withResistance = (ObjectModel) => {
  const isNumberSmall = function (num) {
    return num < 0.001 || num > -0.001;
  };

  const applyGravity = function () {
    if (this.y !== 0) {
      this.dy += this.env.gravity;
    } else {
      this.dy = 0;
    }
  };

  const applyFluidResistance = function () {
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
  };

  const applySurfaceFriction = function () {
    if (this.isTouchingBorder()) {
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
  };

  const move = function () {
    this.env.gravity && this.applyGravity();
    this.env.fluidFriction && this.applyFluidResistance();
    this.env.surfaceFriction && this.applySurfaceFriction();
    this.withResistance_move.apply(this, arguments);
  };

  ObjectModel.prototype.isNumberSmall = isNumberSmall;
  ObjectModel.prototype.applyGravity = applyGravity;
  ObjectModel.prototype.applyFluidResistance = applyFluidResistance;
  ObjectModel.prototype.applySurfaceFriction = applySurfaceFriction;
  ObjectModel.prototype.withResistance_move = ObjectModel.prototype.move;
  ObjectModel.prototype.move = move;

  return ObjectModel;
};

export default withResistance;
