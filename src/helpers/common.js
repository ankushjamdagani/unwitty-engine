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

export { roundOff, minimum, maximum, isOpposite };
