import GameEngine from '../engine';

// import Image from "../examples/brick-breaker/assets/images/Ball1.svg";

// const { SHAPES } = GameEngine.Constants;
const { Body, Transform } = GameEngine.helpers;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const engine = new GameEngine({
  timeSpeed: 1,
  fps: 60,
  width: WIDTH,
  height: HEIGHT,
  debug: true
});
const { world } = engine.state;
const { renderer } = engine.managers;

const mouse = {
  position: { x: WIDTH / 2, y: HEIGHT / 2 }
};

const transform1 = new Transform({
  label: 'transform1',
  rotate: 1,
  origin: [WIDTH / 2 + 25, HEIGHT / 2 + 25],
  transform: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
});

const transform2 = new Transform({
  label: 'transform2',
  rotate: 0,
  origin: [WIDTH / 2 + 115, HEIGHT / 2 + 115]
});

const sun = new Body.createArc({
  label: 'sun',
  position: [WIDTH / 2, HEIGHT / 2],
  radius: 25,
  styles: {
    backgroundColor: 'orange'
  },
  debug: true
});

const earth = new Body.createArc({
  label: 'earth',
  position: [WIDTH / 2 + 100, HEIGHT / 2 + 100],
  radius: 15,
  styles: {
    backgroundColor: 'green'
  },
  debug: true
});

const moon = new Body.createArc({
  label: 'moon',
  position: [WIDTH / 2 + 130, HEIGHT / 2 + 130],
  radius: 5,
  styles: {
    backgroundColor: '#fff'
  },
  debug: true
});

const bg = Body.createRectangle({
  label: 'bg',
  position: [0, 0],
  width: WIDTH,
  height: HEIGHT,
  styles: {
    backgroundColor: '#000'
  },
  debug: true
});

window.addEventListener('mousemove', (evt) => {
  const { clientX, clientY } = evt;
  mouse.position = {
    x: clientX,
    y: clientY
  };
});

renderer.bindCamera(mouse);

world.add(bg);
world.add(transform1);
transform1.add(sun);
sun.add(transform2);
transform2.add(earth);
earth.add(moon);

setInterval(() => {
  transform1.rotate += 1;
  transform2.rotate += 1;
});

// world.add(bg);
// world.add(sun);
// sun.add(earth);
// earth.add(moon);

console.log(engine);

engine.autoPilot();
