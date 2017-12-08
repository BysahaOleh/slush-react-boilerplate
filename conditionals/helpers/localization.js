const constants = require('../../constants');

const libraries = {
  [constants.reactLocalization.intl]: '^2.4.0',
  [constants.reactLocalization.i18n]: '0.0.6'
};

module.exports = function(dependencies, answers) {
  if(answers.reactLocalization) {
    dependencies[answers.reactLocalization] = libraries[answers.reactLocalization]
  }
};