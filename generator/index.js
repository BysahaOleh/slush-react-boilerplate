const constants = require('../constants');

const getPackageJSON = require('./generatePakageJson');
const getPresets = require('./generatePresets');

module.exports = function(answers) {
  let content = {
    packageJSON: getPackageJSON(answers)
  };

  if(answers.lang = constants.lang.babel) {
    content.presets = getPresets(answers.presets)
  }

  return content;
};