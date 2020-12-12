const Vector2D = (x, y) => {
  this.x = x || 0;
  this.y = y || 0;
};

Vector2D.add = (v1, v2) => new Vector2D(v1.x + v2.x, v1.y + v2.y);

Vector2D.sub = (v1, v2) => new Vector2D(v1.x - v2.x, v1.y - v2.y);

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

Vector2D.getUnit = (v1) => {
  const mag = v1.mag();
  return new Vector2D(v1.x / mag, v1.y / mag);
};

Vector2D.getAngle = (v1, v2) =>
  Math.acos(Vector2D.dotProduct(v1, v2) / (v1.mag() * v2.mag()));

Vector2D.polarToCartesian = (r, theta) => [
  r * Math.cos(theta),
  r * Math.sin(theta)
];

Vector2D.cartesianToPolar = (v1) => [v1.mag(), Math.atan(v1.y / v1.x)];

Vector2D.prototype = {
  add(v1) {
    this.x += v1.x;
    this.y += v1.y;
    return this;
  },
  sub(v1) {
    this.x -= v1.x;
    this.y -= v1.y;
    return this;
  },
  mul(v1) {
    this.x *= v1.x;
    this.y *= v1.y;
    return this;
  },
  div(v1) {
    this.x /= v1.x;
    this.y /= v1.y;
    return this;
  },
  rev() {
    this.x *= -1;
    this.y *= -1;
    return this;
  },
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  magSq() {
    return this.x * this.x + this.y * this.y;
  },
  toString() {
    return `Vector2D(${this.x}, ${this.y})`;
  },
  toArray() {
    return [this.x, this.y];
  }
};

export default Vector2D;
