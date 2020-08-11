import { RESOURCE_TYPE } from "../../constants";

const ResourceManager = () => {
  this.resources = new Map();

  this.addResources = (resources = [], cb) => {
    for (let i = 0; i < resources.length; i++) {
      const { type = RESOURCE_TYPE.IMAGE, key = Date.now(), src } = resources[
        i
      ];
      if (!type) {
        console.warn("Resource TYPE is required");
        return;
      }
      if (!src) {
        console.warn("Resource SRC is required");
        return;
      }
      if (type === RESOURCE_TYPE.AUDIO) {
        const ro = new Audio(src);
        ro.addEventListener("canplaythrough", () => {
          if (this.assets[key]) {
            return;
          }
          this.resources.set(key, ro);
          cb && cb(key, ro);
        });
      } else if (type === RESOURCE_TYPE.IMAGE) {
        const ro = new Image();
        ro.src = src;
        ro.onload = () => {
          this.resources.set(key, ro);
          cb && cb(key, ro);
        };
      }
    }
  };

  this.hasResource = (key) => this.resources.has(key);

  this.removeResources = (keys) => {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      this.resources.delete(key);
    }
  };

  this.removeAll = () => this.resources.clear();
};

export default ResourceManager;
