const Point = (x, y, oldX, oldY, r) => {
  this.coords = [x, y];
  this.oldCoords = [oldX, oldY];
  this.r = r;
};

Point.distance(p1, p2) = () => {
  const dx = p1.coords[0] - p2.coords[0];
  const dy = p1.coords[1] - p2.coords[1];
  return Math.sqrt(dx * dx + dy * dy);
};

export default Point;
