// http://www.graphics.stanford.edu/~seander/bithacks.html#IntegerMinOrMax

const roundOff = (num) => {
  return ~~(0.5 + num);
  // return (0.5 + num) | 0;
  // return (0.5 + num) | 0;
  // return (0.5 + num) << 0;
};

const minimum = (x, y) => y ^ ((x ^ y) & -(x < y));

const maximum = (x, y) => x ^ ((x ^ y) & -(x < y));

const isOpposite = (x, y) => (x ^ y) < 0;

const isPositive = (x) => x >= 0;

const isNegative = (x) => x < 0;

export { roundOff, minimum, maximum, isOpposite, isPositive, isNegative };
