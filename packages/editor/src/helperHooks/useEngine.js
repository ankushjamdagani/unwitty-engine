import { useEffect, useState, useCallback } from 'react';
import Engine from '@unwitty/engine';

import mountGame from './mountGame';

export default function useEngine(props) {
  const [engine, setEngine] = useState();

  const mountEngine = useCallback(
    config => {
      const instance = Engine.init(config);

      instance.addEventListener('on_ready', () => {
        mountGame(instance, props);
        setEngine(instance);
        console.log('-> ENGINE READY');
      });
    },
    [props]
  );

  useEffect(() => {
    props && mountEngine(props);
  }, []);

  useEffect(() => {
    return () => {
      engine?.destroy();
    };
  }, [engine]);

  return [engine, mountEngine];
}
