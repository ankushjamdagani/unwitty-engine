import { DataStore } from '@unwitty/core';
import { core } from '../modules';

const { Base } = core;

class GridManager extends Base {
  constructor(props) {
    super(props);

    this.props = props;

    this.changeGridSize(props.data.gridSize);
  }

  changeGridSize(gridSize) {
    if (!gridSize) throw Error(`Invalid gridSize - ${gridSize}`);

    DataStore.setData(core => {
      core.gridSize = gridSize;
    }, 'core');

    return this;
  }

  gridToPixel(grid) {
    const {
      core: { gridSize }
    } = this.props.getData();

    return grid * gridSize;
  }

  pixelToGrid(grid) {
    const {
      core: { gridSize }
    } = this.props.getData();

    return Math.floor(grid / gridSize);
  }

  getGridPositionFromPixel(pos) {
    return core.Vector2D.create([
      this.pixelToGrid(pos.x),
      this.pixelToGrid(pos.y)
    ]);
  }

  getPixelPositionFromGrid(pos) {
    return core.Vector2D.create([
      this.gridToPixel(pos.x),
      this.gridToPixel(pos.y)
    ]);
  }

  isOutOfBound(pos, unit = 'grid') {
    return [this.isOutOfBoundX(pos, unit), this.isOutOfBoundY(pos, unit)];
  }

  // done w.r.t screen position
  isOutOfBoundX(pos, unit = 'grid') {
    const {
      core: { width }
    } = this.props.getData();

    if (unit === 'grid') {
      return pos.x < 0 || this.gridToPixel(pos.x) > width;
    }

    if (unit === 'px') {
      return pos.x < 0 || pos.x > width;
    }

    return false;
  }

  // done w.r.t screen position
  isOutOfBoundY(pos, unit = 'grid') {
    const {
      core: { height }
    } = this.props.getData();

    if (unit === 'grid') {
      return pos.y < 0 || this.gridToPixel(pos.y) > height;
    }

    if (unit === 'px') {
      return pos.y < 0 || pos.y > height;
    }

    return false;
  }
}

export default GridManager;
