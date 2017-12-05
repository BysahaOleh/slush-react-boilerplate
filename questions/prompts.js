const main = require('./prompts/main');
const webpack = require('./prompts/webpack');
const core = require('./prompts/core');
const architecture = require('./prompts/architecture');
const styleGuide = require('./prompts/styleguade');

const confirm = [
  {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }
];

module.exports = [].concat(main, webpack, core, confirm);