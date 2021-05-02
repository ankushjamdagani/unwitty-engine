import { useEffect, useRef } from 'react';
import Engine from '@unwitty/engine';

import mountGame from './mountGame';

export default function EngineComp({ key, config, onReady: cb }) {
  const engine = useRef();

  useEffect(() => {
    const onReady = () => {
      console.log('------------ ENGINE READY ------------');
      mountGame(engine.current, config);
      cb(engine.current);
    };

    Engine.init({
      key,
      smoothImage: false,
      timeScale: 1,
      fps: 60,
      debug: true,
      gridSize: 80
    });

    engine.current = Engine.getInstance(key);

    engine.current.addEventListener('on_ready', onReady);

    return () => {
      engine.current.removeEventListener('on_ready', onReady);
    };
  }, [key, config, cb]);

  return null;
}
