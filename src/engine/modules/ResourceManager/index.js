import { RESOURCE_TYPE } from '../../constants';
import { Base } from '../core';

class ResourceManager extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  loadResources(resources = [], cb) {
    const { resource: currResources } = this.props.getData();
    for (let i = 0; i < resources.length; i += 1) {
      const { type = RESOURCE_TYPE.IMAGE, key = Date.now(), src } = resources[
        i
      ];
      if (!type) {
        console.warn('Resource TYPE is required');
        return;
      }
      if (!src) {
        console.warn('Resource SRC is required');
        return;
      }
      if (currResources[key]) {
        return;
      }

      if (type === RESOURCE_TYPE.AUDIO) {
        const ro = new Audio(src);
        ro.addEventListener('canplaythrough', () => {
          this.props.syncData((resourceM) => {
            resourceM.resources[key] = ro;
          });
          cb && cb(key, ro);
        });
      } else if (type === RESOURCE_TYPE.IMAGE) {
        const ro = new Image();
        ro.src = src;
        ro.onload = () => {
          this.props.syncData((resourceM) => {
            resourceM.resources[key] = ro;
          });
          cb && cb(key, ro);
        };
      }
    }
  }

  removeResources(keys) {
    this.props.syncData((resourceM) => {
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        delete resourceM.resources[key];
      }
    });
  }

  removeAll() {
    this.props.clearData();
  }
}

export default ResourceManager;
