/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    src: '/src'
  },
  plugins: [
    ['@snowpack/plugin-dotenv', { dir: '../../' }],
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
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    treeshake: true,
    entrypoints: ['src/index.js']
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    open: 'brave'
  },
  buildOptions: {
    out: '../../build/engine',
    sourcemap: true
  },

  alias: {},

  workspaceRoot: '../..'
};
