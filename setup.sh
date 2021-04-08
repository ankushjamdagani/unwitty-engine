#!/bin/sh
npm install --global lerna
lerna clean --yes
lerna bootstrap
yarn prepare
