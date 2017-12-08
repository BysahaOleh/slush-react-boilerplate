const constants = require('../../constants');

const libraries = {
  [constants.reduxTools.form]: '^7.2.0',
  [constants.reduxTools.thunk]: '^2.2.0',
  [constants.reduxTools.localstorage]: '^0.4.1',
  [constants.reduxTools.saga]: '^0.16.0',
  [constants.reduxTools.logger]: '^3.0.6'
};

module.exports = function(dependencies, answers) {
  if(answers.architecture === constants.architecture.redux) {
    dependencies['redux'] = '^3.7.2';

    if(answers.jsFramework === constants.jsFrameworks.react) {
      dependencies['react-redux'] = '^5.0.6';
    }
  }

  if(answers.reduxTools && answers.reduxTools.length) {
    answers.reduxTools.map(function(tool) {
      dependencies[tool] = libraries[tool]
    });
  }
};