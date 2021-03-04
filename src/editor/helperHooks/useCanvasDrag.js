import { useEffect, useContext } from 'react';
import DataStoreContext from '../dataStore/context';

const useCanvasDrag = (enabled, { activeSceneId }) => {
  const { DataStore } = useContext(DataStoreContext);
  useEffect(() => {
    if (!enabled) {
      return;
    }
    let dragging = false;
    let lastX;
    let lastY;
    const onMouseDown = (evt) => {
      dragging = true;
      lastX = evt.clientX;
      lastY = evt.clientY;
    };
    const onMouseUp = () => {
      dragging = false;
    };
    const onMouseMove = (evt) => {
      if (dragging) {
        const deltaX = evt.clientX - lastX;
        const deltaY = evt.clientY - lastY;

        lastX = evt.clientX;
        lastY = evt.clientY;

        DataStore.setData((entities) => {
          entities[`camera_${activeSceneId}`].position.x -= deltaX;
          entities[`camera_${activeSceneId}`].position.y -= deltaY;
        }, 'entities');
      }
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [enabled, activeSceneId]);
};

export default useCanvasDrag;
