#!/bin/sh
npm install --g lerna commitizen @commitlint/cli @commitlint/config-conventional
lerna clean --yes
lerna bootstrap
yarn prepare
