import mountEditor from '../editor';
import GameEngine, { store, Helpers } from '../engine';

// import Image from "../examples/brick-breaker/assets/images/Ball1.svg";

// const { SHAPES } = Constants;
const {
  EntityManager: { Body, Transform }
} = Helpers;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const engine = new GameEngine({
  timeScale: 1,
  fps: 60,
  width: WIDTH,
  height: HEIGHT,
  debug: true
});
const { entityManager, renderer } = engine.managers;
const world = entityManager.getRoot();

mountEditor(store, engine);

const transform1 = Transform.create({
  name: 'transform1',
  rotate: 1,
  origin: [WIDTH / 2 + 25, HEIGHT / 2 + 25],
  transform: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
});

const transform2 = Transform.create({
  name: 'transform2',
  rotate: 0,
  origin: [WIDTH / 2 + 115, HEIGHT / 2 + 115]
});

const sun = Body.createArc({
  name: 'sun',
  position: [WIDTH / 2, HEIGHT / 2],
  radius: 25,
  styles: {
    backgroundColor: 'orange'
  },
  debug: true
});

const earth = Body.createArc({
  name: 'earth',
  position: [WIDTH / 2 + 100, HEIGHT / 2 + 100],
  radius: 15,
  styles: {
    backgroundColor: 'green'
  },
  debug: true
});

const moon = Body.createArc({
  name: 'moon',
  position: [WIDTH / 2 + 130, HEIGHT / 2 + 130],
  radius: 5,
  styles: {
    backgroundColor: '#fff'
  },
  debug: true
});

const bg = Body.createRectangle({
  name: 'bg',
  position: [0, 0],
  width: WIDTH,
  height: HEIGHT,
  styles: {
    backgroundColor: '#000'
  },
  debug: true
});

const runner = Body.createArc({
  name: 'runner',
  position: [WIDTH / 2, HEIGHT / 2],
  radius: 25,
  styles: {
    backgroundColor: 'red'
  },
  debug: true
});

entityManager.addChildren(world, bg);
entityManager.addChildren(world, transform1);
entityManager.addChildren(world, runner);
entityManager.addChildren(transform1, sun);
entityManager.addChildren(sun, transform2);
entityManager.addChildren(transform2, earth);
entityManager.addChildren(earth, moon);

engine.autoPilot();
// engine.update();
// setTimeout(() => {
//   engine.update();
// }, 100);

// engine.addEventListener('on_update', (evt) => {
//   console.log(evt.target);
// });

window.addEventListener('keydown', (evt) => {
  const { key } = evt;
  const { entities } = store.getState().entityManager;
  let { x, y } = entities.runner.position;

  if (key === 'ArrowLeft') x = entities.runner.position.x - 50;
  if (key === 'ArrowRight') x = entities.runner.position.x + 50;
  if (key === 'ArrowUp') y = entities.runner.position.y - 50;
  if (key === 'ArrowDown') y = entities.runner.position.y + 50;

  store.dispatch({
    type: 'CORE_SYNC',
    data: {
      entities: {
        ...entities,
        runner: {
          ...entities.runner,
          position: {
            x,
            y
          }
        }
      }
    },
    context: 'entityManager'
  });
});

setInterval(() => {
  const data = store.getState().timer;
  if (data.timeScale < 1) {
    store.dispatch({
      type: 'CORE_SYNC',
      data: {
        ...data,
        timeScale: 1
      },
      context: 'timer'
    });
  } else {
    store.dispatch({
      type: 'CORE_SYNC',
      data: {
        ...data,
        timeScale: 0.05
      },
      context: 'timer'
    });
  }
}, 1500);

renderer.bindCamera(runner);

console.log(engine);
