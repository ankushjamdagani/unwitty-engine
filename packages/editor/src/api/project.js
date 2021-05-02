import defaultProjectConfig from '../constants/default-project-config';

const ProjectAPI = {
  saveProject: config => {
    return new Promise(r => {
      setTimeout(() => {
        r(config);
      }, 1000);
    });
  },

  loadProject: key => {
    return new Promise(r => {
      setTimeout(() => {
        r({
          data: {
            ...defaultProjectConfig,
            key
          }
        });
      }, 1000);
    });
  }
};

export default ProjectAPI;
