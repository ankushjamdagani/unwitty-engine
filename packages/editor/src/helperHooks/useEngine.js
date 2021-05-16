import { useEffect, useState, useCallback } from 'react';
import Engine from '@unwitty/engine';

import mountGame from './mountGame';

export default function useEngine(props) {
  const [engine, setEngine] = useState();

  const mountEngine = useCallback(initialState => {
    const instance = Engine.init(initialState);

    instance.addEventListener('on_ready', () => {
      mountGame(instance);
      setEngine(instance);
      console.log('-> ENGINE READY');
    });
  }, []);

  const clearEngine = useCallback(() => {
    engine?.destroy();
    setEngine(null);
  }, [engine]);

  useEffect(() => {
    props && mountEngine(props);
  }, []);

  useEffect(() => {
    return () => {
      engine?.destroy();
    };
  }, [engine]);

  return [engine, mountEngine, clearEngine];
}
