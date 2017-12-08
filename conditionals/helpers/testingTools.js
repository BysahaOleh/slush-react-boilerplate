const constants = require('../../constants');

module.exports = function(dependencies, answers) {

  if(answers.testingTool === constants.testingTool.jest) {
    dependencies['jest'] = '^21.2.1';
    dependencies['regenerator-runtime'] = '^0.11.1';
    dependencies['babel-jest'] = '^21.2.0';
    dependencies['ts-jest'] = '^21.2.4';
    dependencies['react-test-renderer'] = '^16.2.0';
  }
};