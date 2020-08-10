class Component {
  constructor(props) {
    this.props = props;
    this.assets = {};
    this.state = {};
    this.elements = {};
  }

  preload(assets, cb) {
    assets.forEach((asset) => {
      if (asset.type && asset.type === "audio") {
        const assetAudio = new Audio(asset.src);
        assetAudio.addEventListener("canplaythrough", () => {
          if (this.assets[asset.key]) {
            return;
          }
          this.setAssets({ [asset.key]: assetAudio });
          cb && cb(asset.key, assetAudio);
        });
      } else {
        const assetImage = new Image();
        assetImage.src = asset.src;
        assetImage.onload = () => {
          this.setAssets({ [asset.key]: assetImage });
          cb && cb(asset.key, assetImage);
        };
      }
    });
  }

  setState(state = {}, cb) {
    this.state = {
      ...this.state,
      ...state,
    };

    cb && cb(this.state);
  }

  setAssets(assets = {}, cb) {
    this.assets = {
      ...this.assets,
      ...assets,
    };

    cb && cb(this.assets);
  }

  setElements(elements = {}, cb) {
    this.elements = {
      ...this.elements,
      ...elements,
    };

    cb && cb(this.elements);
  }
}

export default Component;
