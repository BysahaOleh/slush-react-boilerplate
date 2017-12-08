let defaultDependencies = require('../default-dependecies');

const react = require('../helpers/react');
const css = require('../helpers/css-framework');
const styleGuide = require('../helpers/styleguide');

module.exports = function(answers) {
  let allDependencies = Object.assign({}, defaultDependencies);
  react(allDependencies.dependencies, answers);
  css(allDependencies.dependencies, answers);
  styleGuide(allDependencies.devDependencies, answers);

  return allDependencies
};