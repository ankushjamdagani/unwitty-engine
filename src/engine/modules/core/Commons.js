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

const hasValue = (x) => {
  return !(x === null || x === undefined || isNaN(x));
};

// https://gist.github.com/gordonbrander/2230317#gistcomment-3404537
const uid = () => {
  return (
    String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
    Math.random().toString(16).slice(2) +
    Date.now().toString(16).slice(4)
  );
};

export default {
  roundOff,
  minimum,
  maximum,
  isOpposite,
  isPositive,
  isNegative,
  hasValue,
  uid
};
