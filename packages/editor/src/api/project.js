const serverURL = process.env.SNOWPACK_PUBLIC_SERVER_URL;

const ProjectAPI = {
  saveProject: config => {
    return fetch(serverURL + '/api/project/save', {
      method: 'POST',
      body: JSON.stringify({ config })
    }).then(res => res.json());
  },

  loadProject: slug => {
    return fetch(serverURL + '/api/project/load?slug=' + slug).then(res =>
      res.json()
    );
  },

  listProjects: () => {
    return fetch(serverURL + '/api/project/list').then(res => res.json());
  }
};

export default ProjectAPI;
