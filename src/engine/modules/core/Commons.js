// http://www.graphics.stanford.edu/~seander/bithacks.html#IntegerMinOrMax

const roundOff = (num) => {
  return ~~(0.5 + num);
  return (0.5 + num) | 0;
  return (0.5 + num) | 0;
  return (0.5 + num) << 0;
};

const minimum = (x, y) => {
  return y ^ ((x ^ y) & -(x < y));
};

const maximum = (x, y) => {
  return x ^ ((x ^ y) & -(x < y));
};

const isOpposite = (x, y) => {
  return (x ^ y) < 0;
};

const isPositive = (x) => {
  return x >= 0;
};

const isNegative = (x) => {
  return x < 0;
};

const hasValue = (x) => {
  return !(x === null || x === undefined || x === NaN);
};

export {
  roundOff,
  minimum,
  maximum,
  isOpposite,
  isPositive,
  isNegative,
  hasValue,
};
