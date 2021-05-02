/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
    '../../node_modules/@fontsource/raleway/files': '/files',
    '../../node_modules/@fontsource/open-sans/files': '/files',
    '../../node_modules/@fontsource/press-start-2p/files': '/files',
    '../../node_modules/@fontsource/roboto-mono/files': '/files'
  },
  plugins: [
    ['@snowpack/plugin-dotenv', { dir: '../../' }],
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
    open: 'brave'
  },
  buildOptions: {
    out: '../../build/app',
    sourcemap: true
  },

  alias: {},

  workspaceRoot: '../..'
};
