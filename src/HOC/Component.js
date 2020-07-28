class Component {
  constructor(props) {
    this.props = props;
    this.assets = {};
    this.state = {};
    this.elements = {};
  }

  preload(assets) {
    assets.forEach((asset) => {
      const assetImage = new Image();
      assetImage.src = asset.image;
      assetImage.onload = () => {
        this.setAssets({ [asset.key]: assetImage });
      };
    });
  }

  setState(state = {}, cb) {
    this.state = {
      ...this.state,
      ...state,
    };

    cb && cb();
  }

  setAssets(assets = {}, cb) {
    this.assets = {
      ...this.assets,
      ...assets,
    };

    cb && cb();
  }

  setElements(elements = {}, cb) {
    this.elements = {
      ...this.elements,
      ...elements,
    };

    cb && cb();
  }

  start() {}

  stop() {}

  reset() {}

  update() {}
}

export default Component;
