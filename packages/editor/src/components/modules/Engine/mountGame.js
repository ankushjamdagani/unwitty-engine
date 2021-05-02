import { DataStore } from '@unwitty/core';
import Engine from '@unwitty/engine';

const { Body, Transform, Camera } = Engine.Entity;

export default function mountGame(engine, config) {
  const { entityManager, gridManager } = engine.managers;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // eslint-disable-next-line no-unused-vars
  const defaultScene = entityManager.createScene({ name: 'defaultScene' });
  const worldDefaultScene = entityManager.root;

  const transform1 = Transform.create({
    name: 'transform1',
    rotate: 1,
    origin: [width / 2 + 25, height / 2 + 25],
    transform: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
  });

  const transform2 = Transform.create({
    name: 'transform2',
    rotate: 0,
    origin: [width / 2 + 115, height / 2 + 115]
  });

  const sun = Body.createArc({
    name: 'sun',
    position: [width / 2, height / 2],
    radius: 25,
    styles: {
      backgroundColor: 'orange'
    },
    debug: true
  });

  const earth = Body.createArc({
    name: 'earth',
    position: [width / 2 + 100, height / 2 + 100],
    radius: 15,
    styles: {
      backgroundColor: 'green'
    },
    debug: true
  });

  const moon = Body.createArc({
    name: 'moon',
    position: [width / 2 + 130, height / 2 + 130],
    radius: 5,
    styles: {
      backgroundColor: '#fff'
    },
    debug: true
  });

  const bg = Body.createRectangle({
    name: 'bg',
    position: [0, 0],
    width: 1.5 * width,
    height: 1.5 * height,
    debug: true
  });

  entityManager.addChildren(worldDefaultScene, bg);
  entityManager.addChildren(worldDefaultScene, transform1);
  entityManager.addChildren(transform1, sun);
  entityManager.addChildren(sun, transform2);
  entityManager.addChildren(transform2, earth);
  entityManager.addChildren(earth, moon);

  // eslint-disable-next-line no-unused-vars
  const defaultScene1 = entityManager.createScene({ name: 'defaultScene1' });
  const worldDefaultScene1 = entityManager.root;

  const bg1 = Body.createRectangle({
    name: 'bg1',
    position: [0, 0],
    width: 1.5 * width,
    height: 1.5 * height,
    debug: true
  });

  const runner = Body.createArc({
    name: 'runner',
    position: [width / 2, height / 2],
    radius: 25,
    styles: {
      backgroundColor: 'red'
    },
    debug: true
  });

  entityManager.addChildren(worldDefaultScene1, bg1);
  entityManager.addChildren(worldDefaultScene1, runner);

  window.addEventListener('keydown', evt => {
    const { key } = evt;

    DataStore.setData(entities => {
      if (key === 'ArrowLeft') entities.runner.position.x -= 61;
      if (key === 'ArrowRight') entities.runner.position.x += 61;
      if (key === 'ArrowUp') entities.runner.position.y -= 61;
      if (key === 'ArrowDown') entities.runner.position.y += 61;
    }, 'entities');
  });

  window.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt;

    const {
      core: { activeSceneId },
      entities
    } = DataStore.getData();

    const camera = entities[`camera_${activeSceneId}`];

    DataStore.setData(entities => {
      entities.runner.position = gridManager.getPixelPositionFromGrid(
        gridManager.getGridPositionFromPixel(
          Camera.getAbsolutePosition(
            {
              x: clientX,
              y: clientY
            },
            camera
          )
        )
      );
    }, 'entities');
  });

  setInterval(() => {
    DataStore.setData(timing => {
      if (timing.timeScale < 1) {
        timing.timeScale = 1;
      } else {
        timing.timeScale = 0.05;
      }
    }, 'timing');
  }, 1500);

  engine.addEventListener('on_update', ({ detail }) => {
    const { deltaTime } = detail;

    DataStore.setData(entities => {
      entities.transform1.rotate += deltaTime / 10;
      entities.transform2.rotate += deltaTime / 10;
    }, 'entities');
  });

  entityManager.bindCamera(runner);
  engine.changeActiveScene(defaultScene1.id);
}
