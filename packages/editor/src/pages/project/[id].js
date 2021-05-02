import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import useEngine from '../../helperHooks/useEngine';
import ProjectAPI from '../../api/project';

import { Editor } from '../../components/modules';
import { LoaderBasic } from '../../components/_shared';

const defaultStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

export default function ProjectPage() {
  const router = useRouter();
  const [projectId, setProjectId] = useState();
  const [loading, setLoaading] = useState();
  const [engine, mountEngine] = useEngine();

  useEffect(() => {
    if (loading || !projectId || engine) {
      return;
    }

    setLoaading(true);
    ProjectAPI.loadProject(projectId).then(res => {
      mountEngine(res.data);
      setTimeout(() => {
        setLoaading(false);
      }, 0);
    });
  }, [loading, projectId, mountEngine, engine]);

  useEffect(() => {
    if (router.isReady) {
      setProjectId(router.query.id);
    }
  }, [router.isReady, router.query.id]);

  return projectId ? (
    <div
      id={projectId}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <div
        id={`${projectId}_unwitty_editor_wrapper`}
        className='unwitty_editor_wrapper'
        style={defaultStyles}
      >
        <div id='unwitty_editor_app_wrapper' style={defaultStyles}>
          <Editor projectId={projectId} engine={engine} />
        </div>
        <div id='unwitty_editor_canvas_wrapper' style={defaultStyles}>
          <canvas
            id='unwitty_editor_canvas_base'
            className='unwitty_editor_canvas'
            style={defaultStyles}
          ></canvas>
        </div>
      </div>
    </div>
  ) : (
    <LoaderBasic />
  );
}
