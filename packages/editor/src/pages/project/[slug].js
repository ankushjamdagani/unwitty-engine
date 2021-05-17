import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import usePrevious from '../../helperHooks/usePrevious';
import ProjectAPI from '../../api/project';

import { Editor, Engine } from '../../components/modules';
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

  const [loading, setLoading] = useState();

  const [projectId, setProjectId] = useState();
  const prevProjectId = usePrevious(projectId);

  const [projectConfig, setProjectConfig] = useState();

  const [engine, setEngine] = useState();

  useEffect(() => {
    if (prevProjectId === projectId) {
      return;
    }

    setLoading(true);
    ProjectAPI.loadProject(projectId).then(res => {
      if (!res.data) {
        router.push('/');
      } else {
        setProjectConfig(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      }
    });
  }, [router, projectId, prevProjectId]);

  useEffect(() => {
    if (router.isReady) {
      setProjectId(router.query.slug);
    }
  }, [router.isReady, router.query.slug]);

  return projectId && !loading ? (
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
          {projectConfig && (
            <Editor
              projectId={projectId}
              engine={engine}
              config={projectConfig}
            />
          )}
        </div>
        <div id='unwitty_editor_canvas_wrapper' style={defaultStyles}>
          <canvas
            id='unwitty_editor_canvas_base'
            className='unwitty_editor_canvas'
            style={defaultStyles}
          ></canvas>
        </div>
      </div>
      {projectConfig && (
        <Engine
          engine={engine}
          projectId={projectId}
          config={projectConfig.config.engine}
          setEngine={setEngine}
        />
      )}
    </div>
  ) : (
    <LoaderBasic />
  );
}
