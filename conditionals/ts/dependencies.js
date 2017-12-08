let defaultDependencies = require('../default-dependecies');

const react = require('../helpers/react');
const css = require('../helpers/css-framework');
const architecture = require('../helpers/architecture');
const localization = require('../helpers/localization');
const styleGuide = require('../helpers/styleguide');

module.exports = function(answers) {
  let allDependencies = Object.assign({}, defaultDependencies);

  allDependencies.devDependencies['ts-loader'] = '^3.2.0';
  allDependencies.devDependencies['typescript'] = '^2.6.2';

  react(allDependencies.dependencies, answers);
  css(allDependencies.dependencies, answers);
  architecture(allDependencies.dependencies, answers);
  localization(allDependencies.dependencies, answers);
  styleGuide(allDependencies.devDependencies, answers);

  return allDependencies
};