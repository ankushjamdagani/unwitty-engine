function Animator({
  startVal = 0,
  minVal = 0,
  maxVal = 1,
  step = 0.1,
  ticksInterval = 1,
  direction = "alternate", // straight | alternate
}) {
  this.activeVal =
    startVal === null || startVal === undefined ? minVal : startVal;
  this.minVal = minVal;
  this.maxVal = maxVal;
  this.step = step;
  this.ticksInterval = ticksInterval;
  this.referenceTick = 0;
  this.currentTick = 0;

  const get = () => this.activeVal;
  const set = (val) => (this.activeVal = val);
  const update = () => {
    this.currentTick += 1;
    const ticksDiff = this.currentTick - this.referenceTick;

    if (ticksDiff < this.ticksInterval) {
      return this.activeVal;
    } else {
      this.referenceTick = this.currentTick;
    }
    this.activeVal += this.step;

    if (this.activeVal >= this.maxVal || this.activeVal <= this.minVal) {
      if (direction === "alternate") {
        this.step = -this.step;
      } else if (direction === "straight") {
        this.activeVal = this.minVal;
      }
    }
    return this.activeVal;
  };

  return {
    get,
    set,
    update,
  };
}

export default Animator;
