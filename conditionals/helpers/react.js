const constants = require('../../constants');

module.exports = function(dependencies, answers) {
  if(answers.jsFramework === constants.jsFrameworks.react) {
    dependencies['react'] = '^16.2.0';
    dependencies['react-dom'] = '^16.2.0';
  }
};