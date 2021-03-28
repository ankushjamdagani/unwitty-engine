import { core, DataStore } from '../modules';

const { Base } = core;

class GridManager extends Base {
  constructor(props) {
    super(props);

    this.props = props;

    this.changeGridSize(props.data.gridSize);
  }

  changeGridSize(gridSize) {
    if (!gridSize) throw Error(`Invalid gridSize - ${gridSize}`);

    DataStore.setData((core) => {
      core.gridSize = gridSize;
    }, 'core');

    return this;
  }

  getGridPositionFromPixel(pos) {
    const {
      core: { gridSize }
    } = this.props.getData();

    const xPos = Math.floor(pos.x / gridSize);
    const yPos = Math.floor(pos.y / gridSize);

    return core.Vector2D.create([xPos, yPos]);
  }

  getPixelPositionFromGrid(pos) {
    const {
      core: { gridSize }
    } = this.props.getData();

    const xPos = pos.x * gridSize;
    const yPos = pos.y * gridSize;

    return core.Vector2D.create([xPos, yPos]);
  }

  isOutOfBound(pos, unit = 'grid') {
    return [this.isOutOfBoundX(pos, unit), this.isOutOfBoundY(pos, unit)];
  }

  // done w.r.t screen position
  isOutOfBoundX(pos, unit = 'grid') {
    const {
      core: { gridSize, width }
    } = this.props.getData();

    if (unit === 'grid') {
      return pos.x < 0 || pos.x * gridSize > width;
    }

    if (unit === 'px') {
      return pos.x < 0 || pos.x / gridSize > width;
    }

    return false;
  }

  // done w.r.t screen position
  isOutOfBoundY(pos, unit = 'grid') {
    const {
      core: { gridSize, height }
    } = this.props.getData();

    if (unit === 'grid') {
      return pos.y < 0 || pos.y * gridSize > height;
    }

    if (unit === 'px') {
      return pos.y < 0 || pos.y / gridSize > height;
    }

    return false;
  }
}

export default GridManager;
