const THEME_LENGTH = 50;
const SIZE_MIN = 8;
const SPACE_MIN = 4;

const breakpoints = [768, 1024, 1280].map((elem) => `${elem}px`);

const sizes = Array.from(Array(THEME_LENGTH))
  .map((el, index) => SIZE_MIN * index)
  .map((elem) => `${elem}px`);

const space = Array.from(Array(THEME_LENGTH))
  .map((el, index) => SPACE_MIN * index)
  .map((elem) => `${elem}px`);

// const widths = Array.from(Array(THEME_LENGTH))
//   .map((el, index) => SPACE_MIN * index)
//   .map((elem) => `${elem}px`);

// const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map((elem) => `${elem}px`);

export default {
  breakpoints,
  sizes,
  space
  // widths
};
