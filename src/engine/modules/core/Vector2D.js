// https://gamedevelopertips.com/vector-in-game-development/
import Commons from "./Commons";

class Vector2D {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  add(v1) {
    this.x += v1.x;
    this.y += v1.y;
    return this;
  }

  sub(v1) {
    this.x -= v1.x;
    this.y -= v1.y;
    return this;
  }

  mul(v1) {
    this.x *= v1.x;
    this.y *= v1.y;
    return this;
  }

  div(v1) {
    this.x /= v1.x;
    this.y /= v1.y;
    return this;
  }

  rev() {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  normalise() {
    const mag = this.mag();
    return this.div(this, { x: mag, y: mag });
  }

  setMag(mag) {
    return this.normalise().mul({ x: mag, y: mag });
  }

  limitMag(limitAmt = { min: null, max: null }) {
    const mag = this.mag();
    if (
      (Commons.hasValue(limitAmt.max) && mag > limitAmt.max) ||
      (Commons.hasValue(limitAmt.min) && mag < limitAmt.min)
    ) {
      this.normalise().mul({ x: limitAmt, y: limitAmt });
    }
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

  static add = (v1, v2) => {
    return new Vector2D(v1.x + v2.x, v1.y + v2.y);
  };

  static sub = (v1, v2) => {
    return new Vector2D(v1.x - v2.x, v1.y - v2.y);
  };

  static mul = (v1, v2) => {
    return new Vector2D(v1.x * v2.x, v1.y * v2.y);
  };

  static div = (v1, v2) => {
    return new Vector2D(v1.x / v2.x, v1.y / v2.y);
  };

  /**
   * https://www.mathsisfun.com/algebra/vectors-dot-product.html
   * or |v1| * |v2| * cos(theta)
   */
  static dotProduct = (v1, v2) => {
    return v1.x * v2.x + v1.y * v2.y;
  };

  /**
   * https://www.mathsisfun.com/algebra/vectors-cross-product.html
   * or |v1| * |v2| * sin(theta) * UnitVector
   */
  static crossProduct = (v1, v2) => {
    return v1.x * v2.y - v1.y * v2.x;
  };

  // Projecting v2 onto v1
  static project = (v1, v2) => {
    const shadow = Vector2D.dotProduct(v1, v2) / v1.magSq();
    return new Vector2D(v1.x * shadow, v1.y * shadow);
  };

  static dist = (v1, v2) => {
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  static distSq = (v1, v2) => {
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    return dx * dx + dy * dy;
  };

  static getAngle = (v1, v2) => {
    return Math.acos(Vector2D.dotProduct(v1, v2) / (v1.mag() * v2.mag()));
  };

  static polarToCartesian = (r, theta) => {
    return [r * Math.cos(theta), r * Math.sin(theta)];
  };

  static cartesianToPolar = (v1) => {
    return [v1.mag(), Math.atan(v1.y / v1.x)];
  };

  // returns unit vector pointing in random direction
  static getRandom = (mag = 1) => {
    const [x, y] = Vector2D.polarToCartesian(mag, Math.random() * Math.PI * 2);
    return new Vector2D(x, y);
  };

  static zero = () => {
    return new Vector2D(0, 0);
  };
}

export default Vector2D;
