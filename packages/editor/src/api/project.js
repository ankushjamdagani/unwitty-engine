const ProjectAPI = {
  saveProject: config => {
    return fetch('/api/project/save', {
      method: 'POST',
      body: JSON.stringify({ config })
    }).then(res => res.json());
  },

  loadProject: slug => {
    return fetch('/api/project/load?slug=' + slug).then(res => res.json());
  },

  listProjects: () => {
    return fetch('/api/project/list').then(res => res.json());
  }
};

export default ProjectAPI;
