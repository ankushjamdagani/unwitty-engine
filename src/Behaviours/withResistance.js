import { maximum, minimum } from "../helpers/Math";

const withResistance = (ObjectModel) => {
  const isNumberSmall = function (num) {
    return num < 0.001 || num > -0.001;
  };

  const applyGravity = function () {
    const { env } = this.props;
    const { y, dy } = this.state;
    if (y !== 0) {
      this.setState({
        dy: dy + env.gravity,
      });
    } else {
      this.setState({
        dy: 0,
      });
    }
  };

  const applyFluidResistance = function () {
    const { env } = this.props;
    const { dx, dy } = this.state;
    if (dx !== 0) {
      const speed = dx * env.fluidFriction;
      const isPositive = speed > 0;
      this.setState({
        dx: isPositive
          ? maximum(dx * env.fluidFriction, 5)
          : minimum(dx * env.fluidFriction, -5),
      });
    }
    if (dy !== 0) {
      const speed = dy * env.fluidFriction;
      const isPositive = speed > 0;
      this.setState({
        dy: isPositive
          ? maximum(dy * env.fluidFriction, 5)
          : minimum(dy * env.fluidFriction, -5),
      });
    }
  };

  const applySurfaceFriction = function () {
    const { env } = this.props;
    const { dx, dy } = this.state;
    if (this.isTouchingBorder()) {
      if (dx !== 0) {
        this.setState({
          dx: maximum(dx * env.surfaceFriction, 5),
        });
      }
      if (dy !== 0) {
        this.setState({
          dy: maximum(dy * env.surfaceFriction, 5),
        });
      }
    }
  };

  const move = function () {
    const { env } = this.props;
    env.gravity && this.applyGravity();
    env.fluidFriction && this.applyFluidResistance();
    env.surfaceFriction && this.applySurfaceFriction();
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
