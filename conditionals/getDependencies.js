const constants = require('../constants');

const defaultDependencies = require('./default-dependecies');

const es5 = require('./es5/dependencies');
const babel = require('./es6/dependencies');
const ts = require('./ts/dependencies');

module.exports = function(answers) {
  switch (answers.lang) {
    case constants.lang.es5:
      return es5(answers);
    case constants.lang.babel:
      return babel(answers);
    case constants.lang.ts:
      return ts(answers);
    default:
      return defaultDependencies;
  }
};