import { constants, DataStore } from '@unwitty/core';
import { core } from '../modules';

const { RESOURCE_TYPE } = constants;
const { Base } = core;

class ResourceManager extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  loadResources(resources = [], cb) {
    const { resources: currResources } = this.props.getData();
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
          DataStore.setData(resources => {
            resources[key] = ro;
          }, 'resources');
          cb && cb(key, ro);
        });
      } else if (type === RESOURCE_TYPE.IMAGE) {
        const ro = new Image();
        ro.src = src;
        ro.onload = () => {
          DataStore.setData(resources => {
            resources[key] = ro;
          }, 'resources');
          cb && cb(key, ro);
        };
      }
    }
  }

  static removeResources(keys) {
    DataStore.setData(resources => {
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        delete resources[key];
      }
    }, 'resources');
  }

  static removeAll() {
    DataStore.clearData('resources');
  }
}

export default ResourceManager;
