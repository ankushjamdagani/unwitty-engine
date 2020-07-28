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

  setState(state = {}) {
    this.state = {
      ...this.state,
      ...state,
    };
  }

  setAssets(assets = {}) {
    this.assets = {
      ...this.assets,
      ...assets,
    };
  }

  setElements(elements = {}) {
    this.elements = {
      ...this.elements,
      ...elements,
    };
  }

  start() {}

  stop() {}

  reset() {}

  update() {}
}

export default Component;
