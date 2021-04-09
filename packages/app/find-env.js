/* eslint @typescript-eslint/no-var-requires: "off" */
const find = require('find-up');
const dotenv = require('dotenv');

const findEnv = () => find.sync(process.env.ENV_FILE || '.env');

dotenv.config({ path: findEnv() });
