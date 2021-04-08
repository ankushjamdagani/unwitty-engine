// https://gamedevelopertips.com/vector-in-game-development/
import Commons from './Commons';

const Vector2D = {
  create([x, y]) {
    return {
      x: x || 0,
      y: y || 0
    };
  },

  // vector arithmetics
  add(v1, v2) {
    return Vector2D.create([v1.x + v2.x, v1.y + v2.y]);
  },

  sub(v1, v2) {
    return Vector2D.create([v1.x - v2.x, v1.y - v2.y]);
  },

  mul(v1, v2) {
    return Vector2D.create([v1.x * v2.x, v1.y * v2.y]);
  },

  div(v1, v2) {
    return Vector2D.create([v1.x / v2.x, v1.y / v2.y]);
  },

  mag(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  },

  magSq(v) {
    return v.x * v.x + v.y * v.y;
  },

  normalise(v) {
    const mag = Vector2D.mag(v);
    return Vector2D.div(v, Vector2D.create([mag, mag]));
  },

  setMag(v, mag) {
    const currMag = Vector2D.mag(v);
    const currMagVector = Vector2D.create([currMag, currMag]);
    const magVector = Vector2D.create([mag, mag]);
    return Vector2D.mul(Vector2D.div(v, currMagVector), magVector);
  },

  // setMag2(mag) {
  //   const theta = this.getAngle();
  //   this.x = Math.cos(theta) * mag;
  //   this.y = Math.sin(theta) * mag;
  //   return this;
  // }

  limitMag(v, limitAmt = { min: null, max: null }) {
    const mag = Vector2D.mag(v);
    let limitVector = null;
    if (Commons.hasValue(limitAmt.max) && mag > limitAmt.max) {
      limitVector = Vector2D.create([limitAmt.max, limitAmt.max]);
    }

    if (Commons.hasValue(limitAmt.min) && mag < limitAmt.min) {
      limitVector = Vector2D.create([limitAmt.min, limitAmt.min]);
    }

    return limitVector ? Vector2D.mul(Vector2D.normalise(v), limitVector) : v;
  },

  rotate(v, theta) {
    const { x, y } = v;

    return {
      x: Math.cos(theta) * x - Math.sin(theta) * y,
      y: Math.sin(theta) * x + Math.cos(theta) * y
    };
  },

  setAngle(v, theta) {
    const mag = Vector2D.mag(v);
    return {
      x: Math.cos(theta) * mag,
      y: Math.sin(theta) * mag
    };
  },

  getAngle(v) {
    return Math.atan2(v.y, v.x);
  },

  getAngle1(v1, v2) {
    return Math.acos(Vector2D.dotProduct(v1, v2) / (v1.mag() * v2.mag()));
  },

  rev(v) {
    return {
      x: v.x * -1,
      y: v.y * -1
    };
  },

  revX(v) {
    return {
      x: v.x * -1,
      y: v.y
    };
  },

  revY(v) {
    return {
      x: v.x,
      y: v.y * -1
    };
  },

  clone(v) {
    return Vector2D.create([v.x, v.y]);
  },

  toString(v) {
    return `Vector2D(${v.x}, ${v.y})`;
  },

  toArray(v) {
    return [v.x, v.y];
  },

  /**
   * https://www.mathsisfun.com/algebra/vectors-dot-product.html
   * or |v1| * |v2| * cos(theta)
   */
  dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  },

  /**
   * https://www.mathsisfun.com/algebra/vectors-cross-product.html
   * or |v1| * |v2| * sin(theta) * UnitVector
   */
  crossProduct(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
  },

  // Projecting v2 onto v1
  project(v1, v2) {
    const shadow = Vector2D.dotProduct(v1, v2) / v1.magSq();
    return Vector2D.create(v1.x * shadow, v1.y * shadow);
  },

  dist(v1, v2) {
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  distSq(v1, v2) {
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    return dx * dx + dy * dy;
  },

  polarToCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
  },

  cartesianToPolar(v1) {
    return [v1.mag(), Math.atan(v1.y / v1.x)];
  },

  // returns unit vector pointing in random direction
  getRandom(mag = 1) {
    const [x, y] = Vector2D.polarToCartesian(mag, Math.random() * Math.PI * 2);
    return Vector2D.create(x, y);
  },

  zero() {
    return Vector2D.create([0, 0]);
  }
};

export default Vector2D;
