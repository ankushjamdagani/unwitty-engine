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

  /**
   * DOM structure
   * =============
   * key
   *    .unwitty_game_wrapper
   *        .unwitty_game_overlays_wrapper
   *        .unwitty_game_canvas_wrapper
   *            .unwitty_game_canvas
   */

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

    const style = document.createElement('style');
    // style.sheet.insertRule(`
    style.innerHTML = `
      .unwitty_game_wrapper {
        // background: #212121;
        // background: #232a2e;
        // background: #1e2528;
        // /* background: white; */
        position: relative;
      }
      
      .unwitty_game_canvas_wrapper {
        height: 100%;
        width: 100%;
        position: relative;
      }
      
      .unwitty_game_canvas_wrapper canvas {
        background: transparent;
        margin: 0 auto;
        display: block;
        cursor: crosshair;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        font-smooth: never;
        -webkit-font-smoothing: none;
        height: 100%;
        width: 100%;
      }
      
      .unwitty_game_overlays_wrapper {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `;
    document.head.appendChild(style);

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
