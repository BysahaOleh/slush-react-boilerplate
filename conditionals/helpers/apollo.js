const constants = require('../../constants');

module.exports = function(dependencies, answers) {
  if(answers.architecture === constants.architecture.reactApollo) {
    dependencies['apollo-client'] = '^2.0.4';
    dependencies['graphql-tag'] = '^2.6.0';
    dependencies['react-apollo'] = '^2.0.4';
  }
};