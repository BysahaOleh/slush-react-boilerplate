let defaultDependencies = require('../default-dependecies');

const react = require('../helpers/react');
const css = require('../helpers/css-framework');
const babel = require('../helpers/babel');

module.exports = function(answers) {
  let allDependencies = Object.assign({}, defaultDependencies);

  babel(allDependencies.devDependencies, answers);
  react(allDependencies.dependencies, answers);
  css(allDependencies.dependencies, answers);

  return allDependencies
};