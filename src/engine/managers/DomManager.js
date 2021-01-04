import { MID_CANVAS_KEY } from '../constants';

import { core, DataStore } from '../modules';

const { Base } = core;

class DomManager extends Base {
  constructor(props) {
    super(props);
    const { data, ...restProps } = props;

    this.props = restProps;

    this.initCoreStructure(data);
  }

  initCoreStructure({ key, width, height }) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', `wrapper_unwitty_game`);
    wrapper.setAttribute('id', `wrapper_${key}`);
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;

    const canvasWrapper = document.createElement('div');
    canvasWrapper.setAttribute('class', `wrapper_canvas_unwitty_game`);
    canvasWrapper.setAttribute('id', `wrapper_canvas_${key}`);

    wrapper.appendChild(canvasWrapper);

    (document.getElementById(key) || document.body).appendChild(wrapper);

    this.addCanvas(MID_CANVAS_KEY);
  }

  getCanvasWrapper() {
    const {
      core: { key }
    } = this.props.getData();
    return document.getElementById(`wrapper_canvas_${key}`);
  }

  getOverlaysWrapper() {
    const {
      core: { key }
    } = this.props.getData();
    return document.getElementById(`wrapper_overlays_${key}`);
  }

  addCanvas(key) {
    const { getData } = this.props;
    const {
      core: { width, height, smoothImage },
      canvasMap
    } = getData();

    if (canvasMap.get(key)) return;

    const wrapper = this.getCanvasWrapper();

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', key);

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

    DataStore.setData((canvasMap) => {
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
