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
  timeSpeed: 1,
  fps: 60,
  width: WIDTH,
  height: HEIGHT,
  debug: true
});
const { entityManager, renderer } = engine.managers;
const world = entityManager.getRoot();

mountEditor(store, engine);

const mouse = {
  position: { x: WIDTH / 2, y: HEIGHT / 2 }
};

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

entityManager.addChildren(world, bg);
entityManager.addChildren(world, transform1);
entityManager.addChildren(transform1, sun);
entityManager.addChildren(sun, transform2);
entityManager.addChildren(transform2, earth);
entityManager.addChildren(earth, moon);

// world.add(bg);
// world.add(sun);
// sun.add(earth);
// earth.add(moon);

engine.autoPilot();

// engine.update();
// setTimeout(() => {
//   engine.update();
// }, 100);

window.addEventListener('mousemove', (evt) => {
  const { clientX, clientY } = evt;
  const data = store.getState().renderManager;
  store.dispatch({
    type: 'CORE_SYNC',
    data: {
      ...data,
      camera: {
        ...data.camera,
        target: {
          position: {
            x: clientX,
            y: clientY
          }
        }
      }
    },
    context: 'renderManager'
  });
});

renderer.bindCamera(mouse);

console.log(engine);
