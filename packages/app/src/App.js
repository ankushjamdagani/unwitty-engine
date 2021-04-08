import React, { useRef, useEffect } from 'react';

import Editor from '@unwitty/editor';
import Engine from '@unwitty/engine';

const {
  DataStore,
  Entity: { Body, Transform, Camera }
} = Engine;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const mountGame = engine => {
  const { entityManager, gridManager } = engine.managers;

  // eslint-disable-next-line no-unused-vars
  const defaultScene = entityManager.createScene({ name: 'defaultScene' });
  const worldDefaultScene = entityManager.root;

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
};

const App = () => {
  const game_id = 'demo_game';
  const engine = useRef();

  const onReady = () => {
    Editor.init(game_id);
    mountGame(engine.current);
  };

  useEffect(() => {
    Engine.init({
      key: game_id,
      timeScale: 1,
      fps: 60,
      width: WIDTH,
      height: HEIGHT,
      debug: true,
      gridSize: 80
    });

    engine.current = Engine.getInstance(game_id);

    engine.current.addEventListener('on_ready', onReady);

    return () => {
      engine.current.removeEventListener('onReady', onReady);
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Game App</h1>
      {/* @todo: use SHADOW DOM for engine and editor?! */}
      {/* <div
        id={game_id}
        style={{
          margin: '100px auto',
          width: '80%',
          height: 'calc(100% - 224px)',
          position: 'relative'
        }}
      ></div> */}
      <div
        id={game_id}
        style={{
          width: '100%',
          height: 'calc(100% - 24px)',
          position: 'relative'
        }}
      ></div>
    </>
  );
};

export default App;
