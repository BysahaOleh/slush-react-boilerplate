const main = require('./prompts/main');
const webpack = require('./prompts/webpack');
const core = require('./prompts/core');
const architecture = require('./prompts/architecture');
const styleGuide = require('./prompts/styleguade');
const routing = require('./prompts/router');
const styles = require('./prompts/styles');

const confirm = [
  {
    type: 'confirm',
    name: 'moveon',
    message: 'Finish installation and create project with selected values?'
  }
];

module.exports = [].concat(main, webpack, core, architecture, routing, styles, styleGuide, confirm);