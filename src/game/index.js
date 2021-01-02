import Editor from '../editor';
import Engine from '../engine';

const {
  DataStore,
  Entity: { Body, Transform }
} = Engine;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const engine = Engine.init({
  timeScale: 1,
  fps: 60,
  width: WIDTH,
  height: HEIGHT,
  debug: true
});

Editor.init(DataStore, engine);

const { entityManager } = engine.managers;
const world = entityManager.root;

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
  width: 1.5 * WIDTH,
  height: 1.5 * HEIGHT,
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

engine.addEventListener('on_ready', () => {
  window.addEventListener('keydown', (evt) => {
    const { key } = evt;

    DataStore.setData((entities) => {
      if (key === 'ArrowLeft') entities.runner.position.x -= 50;
      if (key === 'ArrowRight') entities.runner.position.x += 50;
      if (key === 'ArrowUp') entities.runner.position.y -= 50;
      if (key === 'ArrowDown') entities.runner.position.y += 50;
    }, 'entities');
  });
  setInterval(() => {
    DataStore.setData((timing) => {
      if (timing.timeScale < 1) {
        timing.timeScale = 1;
      } else {
        timing.timeScale = 0.05;
      }
    }, 'timing');
  }, 1500);
});

entityManager.bindCamera(runner);

console.log(engine);
