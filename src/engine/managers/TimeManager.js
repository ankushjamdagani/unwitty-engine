import { core, DataStore } from '../modules';

const { Base, Commons } = core;

class TimeManager extends Base {
  constructor(props) {
    super(props);
    const { data, ...restProps } = props;
    const { timeScale, fps } = data;

    this.props = restProps;

    const currTime = (performance || Date).now();

    DataStore.setData(
      {
        timeScale,
        lastTime: 0,
        currTime,
        deltaTime: 1000 / fps,
        deltaTimeMin: 1000 / fps,
        deltaTimeMax: 1000 / (fps * 0.5),
        timestep: 1000 / fps,
        fps,
        fpsLastTick: 0,
        fpsHistory: [],
        fpsUpdateTime: 500
      },
      'timing'
    );
  }

  // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  update(fromTime, toTime) {
    const { timing: currData } = this.props.getData();

    const currTime = toTime || (performance || Date).now();
    let lastTime = fromTime || currData.lastTime;
    const elapsedTime = Math.abs(currTime - lastTime);
    const timeDirection = Math.sign(currTime - lastTime);

    if (elapsedTime >= currData.timestep) {
      const {
        timestep,
        timeScale,
        fpsUpdateTime,
        deltaTime: prevDeltaTime
      } = currData;
      let { fpsHistory, fps, fpsLastTick } = currData;

      let deltaTime = prevDeltaTime + elapsedTime;

      /**
       * @DANGER
       * elapsed time can be huge, because RAF get's paused when out of focus
       * - pause the game on out of focus
       * - maybe - keep update running with a slightly bigger steps and render only when on next focus
       * - optionally - can limit delta in a range but this somehow lowers FPS
       */
      // deltaTime = deltaTime < deltaTimeMin ? deltaTimeMin : deltaTime;
      // deltaTime = deltaTime > deltaTimeMax ? deltaTimeMax : deltaTime;

      // compute FPS
      // fps buffer have frames for 1sec. Length of it will give FPS
      while (fpsHistory.length > 0 && fpsHistory[0] <= currTime - 1000) {
        const [, ...restFpsHistory] = fpsHistory;
        fpsHistory = restFpsHistory;
      }
      fpsHistory = [...fpsHistory, currTime];
      if (currTime - fpsLastTick >= fpsUpdateTime) {
        fps = fpsHistory.length;
        fpsLastTick = currTime;
      }

      const MAX_FRAMES_TO_SKIP = 100;
      const updateCount = Commons.minimum(
        Math.floor(deltaTime / timestep),
        MAX_FRAMES_TO_SKIP
      );

      deltaTime -= updateCount * timestep;
      deltaTime = deltaTime < 0 ? 0 : deltaTime;
      lastTime = currTime - (deltaTime % 10);

      DataStore.setData((timing) => {
        timing.lastTime = lastTime;
        timing.fps = fps;
        timing.fpsLastTick = fpsLastTick;
        timing.fpsHistory = fpsHistory;
        timing.deltaTime = deltaTime;
      }, 'timing');
      return [
        true,
        {
          updateCount,
          fixedDelta: timestep * timeScale * timeDirection,
          interpolationTime: deltaTime / timestep
        }
      ];
    }
    return [false];
  }
}

export default TimeManager;
