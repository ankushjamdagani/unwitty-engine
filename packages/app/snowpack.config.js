/** @type {import("snowpack").SnowpackUserConfig } */

/** LOAD ENV_VARIABLES */
require('./find-env');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-react-refresh',
    // For JSX Transform support - https://github.com/snowpackjs/snowpack/discussions/1681
    '@snowpack/plugin-babel',
    ['@snowpack/plugin-typescript', { tsc: 'tsc' }]
    // [
    //   '@snowpack/plugin-run-script',
    //   {
    //     cmd: 'eslint src --ext .js,.jsx,.ts,.tsx'
    //     // Optional: Use npm package "eslint-watch" to run on every file change
    //     // watch: 'esw -w --clear src --ext .js,.jsx,.ts,.tsx'
    //   }
    // ]
    // '@snowpack/plugin-dotenv',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    treeshake: true
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },

  alias: {},

  workspaceRoot: '../..'
};
