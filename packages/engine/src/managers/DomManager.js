import { constants, DataStore } from '@unwitty/core';

import { core } from '../modules';

const { MID_CANVAS_KEY } = constants;
const { Base } = core;

class DomManager extends Base {
  constructor(props) {
    super(props);
    const { data, ...restProps } = props;

    this.props = restProps;

    this.initCoreStructure(data);
  }

  initCoreStructure({ key }) {
    const gameWrapper = document.getElementById(key) || document.body;
    const { width, height } = gameWrapper.getBoundingClientRect();

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', `unwitty_game_wrapper`);
    wrapper.setAttribute('id', `${key}_wrapper`);
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;

    const overlaysWrapper = document.createElement('div');
    overlaysWrapper.setAttribute('class', `unwitty_game_overlays_wrapper`);
    overlaysWrapper.setAttribute('id', `${key}_overlays_wrapper`);

    const canvasWrapper = document.createElement('div');
    canvasWrapper.setAttribute('class', `unwitty_game_canvas_wrapper`);
    canvasWrapper.setAttribute('id', `${key}_canvas_wrapper`);

    wrapper.appendChild(overlaysWrapper);
    wrapper.appendChild(canvasWrapper);

    DataStore.setData(core => {
      core.width = width;
      core.height = height;
      core.aspectRatio = width / height;
    }, 'core');

    gameWrapper.appendChild(wrapper);

    this.addCanvas(MID_CANVAS_KEY);
  }

  getCanvasWrapper() {
    const {
      core: { key }
    } = this.props.getData();
    return document.getElementById(`${key}_canvas_wrapper`);
  }

  addCanvas(key) {
    const { getData } = this.props;
    const {
      core: { key: gameKey, width, height, smoothImage },
      canvasMap
    } = getData();

    if (canvasMap.get(key)) return;

    const wrapper = this.getCanvasWrapper();

    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'unwitty_game_canvas');
    canvas.setAttribute('id', `unwitty_game_canvas_${gameKey}_${key}`);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const context = canvas.getContext('2d');
    context.mozImageSmoothingEnabled = !!smoothImage;
    context.webkitImageSmoothingEnabled = !!smoothImage;
    context.msImageSmoothingEnabled = !!smoothImage;
    context.imageSmoothingEnabled = !!smoothImage;
    context.scale(dpr, dpr);

    wrapper.appendChild(canvas);

    DataStore.setData(canvasMap => {
      canvasMap.set(
        key,
        new Map([
          ['canvasId', key],
          ['context', context],
          ['lastUpdatedAt', null],
          ['isActive', true]
        ])
      );
    }, 'canvasMap');
  }
}

export default DomManager;
