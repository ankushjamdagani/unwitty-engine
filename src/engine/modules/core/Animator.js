function Animator({
  startVal = 0,
  minVal = 0,
  maxVal = 1,
  step = 0.1,
  ticksInterval = 1,
  direction = 'alternate', // normal | reverse | alternate | alternate-reverse,
  iterationCount = Infinity
  // fillMode = 'forwards'
}) {
  this.activeVal =
    startVal === null || startVal === undefined ? minVal : startVal;
  this.step = step;
  this.referenceTick = 0;
  this.currentTick = 0;
  this.iterationCount = 0;

  const get = () => this.activeVal;
  const set = (val) => {
    this.activeVal = val;
  };
  const update = () => {
    if (this.iterationCount > iterationCount) {
      return;
    }

    this.iterationCount += 1;
    this.currentTick += 1;

    const ticksDiff = this.currentTick - this.referenceTick;
    if (ticksDiff < ticksInterval) {
      return this.activeVal;
    }
    this.referenceTick = this.currentTick;

    this.activeVal += this.step;

    if (this.activeVal > maxVal || this.activeVal < minVal) {
      if (direction === 'alternate') {
        this.step = -this.step;
      } else if (direction === 'normal') {
        this.activeVal = minVal;
      }
    }
    return this.activeVal;
  };

  return {
    get,
    set,
    update
  };
}

export default Animator;
