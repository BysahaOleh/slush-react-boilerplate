let defaultDependencies = require('../default-dependecies');

const react = require('../helpers/react');
const css = require('../helpers/css-framework');

module.exports = function(answers) {
  let allDependencies = Object.assign({}, defaultDependencies);

  allDependencies.devDependencies['ts-loader'] = '^3.2.0';
  allDependencies.devDependencies['typescript'] = '^2.6.2';

  react(allDependencies.dependencies, answers);
  css(allDependencies.dependencies, answers);

  return allDependencies
};