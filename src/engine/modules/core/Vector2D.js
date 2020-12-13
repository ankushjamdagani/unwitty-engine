// https://gamedevelopertips.com/vector-in-game-development/
import Commons from './Commons';

class Vector2D {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  // scalar arithmetics
  add(a) {
    this.x += a;
    this.y += a;
    return this;
  }

  sub(a) {
    this.x -= a;
    this.y -= a;
    return this;
  }

  mul(a) {
    this.x *= a;
    this.y *= a;
    return this;
  }

  div(a) {
    this.x /= a;
    this.y /= a;
    return this;
  }

  // vector arithmetics
  static add(v1, v2) {
    return new Vector2D(v1.x + v2.x, v1.y + v2.y);
  }

  static sub(v1, v2) {
    return new Vector2D(v1.x - v2.x, v1.y - v2.y);
  }

  static mul(v1, v2) {
    return new Vector2D(v1.x * v2.x, v1.y * v2.y);
  }

  static div(v1, v2) {
    return new Vector2D(v1.x / v2.x, v1.y / v2.y);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  normalise() {
    const mag = this.mag();
    return this.div(mag);
  }

  setMag(mag) {
    const currMag = this.mag();
    return this.div(currMag).mul(mag);
  }

  // setMag2(mag) {
  //   const theta = this.getAngle();
  //   this.x = Math.cos(theta) * mag;
  //   this.y = Math.sin(theta) * mag;
  //   return this;
  // }

  limitMag(limitAmt = { min: null, max: null }) {
    const mag = this.mag();
    if (
      (Commons.hasValue(limitAmt.max) && mag > limitAmt.max) ||
      (Commons.hasValue(limitAmt.min) && mag < limitAmt.min)
    ) {
      this.normalise().mul(limitAmt);
    }
  }

  rotate(theta) {
    const { x, y } = this;

    this.x = Math.cos(theta) * x - Math.sin(theta) * y;
    this.y = Math.sin(theta) * x + Math.cos(theta) * y;

    return this;
  }

  setAngle(theta) {
    const mag = this.mag();
    this.x = Math.cos(theta) * mag;
    this.y = Math.sin(theta) * mag;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  rev() {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  revX() {
    this.x *= -1;
    return this;
  }

  revY() {
    this.y *= -1;
    return this;
  }

  clone() {
    return new Vector2D(this.x, this.y);
  }

  toString() {
    return `Vector2D(${this.x}, ${this.y})`;
  }

  toArray() {
    return [this.x, this.y];
  }
}
/**
 * https://www.mathsisfun.com/algebra/vectors-dot-product.html
 * or |v1| * |v2| * cos(theta)
 */
Vector2D.dotProduct = (v1, v2) => v1.x * v2.x + v1.y * v2.y;

/**
 * https://www.mathsisfun.com/algebra/vectors-cross-product.html
 * or |v1| * |v2| * sin(theta) * UnitVector
 */
Vector2D.crossProduct = (v1, v2) => v1.x * v2.y - v1.y * v2.x;

// Projecting v2 onto v1
Vector2D.project = (v1, v2) => {
  const shadow = Vector2D.dotProduct(v1, v2) / v1.magSq();
  return new Vector2D(v1.x * shadow, v1.y * shadow);
};

Vector2D.dist = (v1, v2) => {
  const dx = v1.x - v2.x;
  const dy = v1.y - v2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

Vector2D.distSq = (v1, v2) => {
  const dx = v1.x - v2.x;
  const dy = v1.y - v2.y;
  return dx * dx + dy * dy;
};

Vector2D.getAngle = (v1, v2) =>
  Math.acos(Vector2D.dotProduct(v1, v2) / (v1.mag() * v2.mag()));

Vector2D.polarToCartesian = (r, theta) => [
  r * Math.cos(theta),
  r * Math.sin(theta)
];

Vector2D.cartesianToPolar = (v1) => [v1.mag(), Math.atan(v1.y / v1.x)];

// returns unit vector pointing in random direction
Vector2D.getRandom = (mag = 1) => {
  const [x, y] = Vector2D.polarToCartesian(mag, Math.random() * Math.PI * 2);
  return new Vector2D(x, y);
};

Vector2D.zero = () => new Vector2D(0, 0);

export default Vector2D;
