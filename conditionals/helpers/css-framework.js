const constants = require('../../constants');

module.exports = function(dependencies, answers) {
  if(answers.cssFramework === constants.cssFrameworks.bootstrap) {
    dependencies['bootstrap'] = '^4.0.0-beta.2';
    dependencies['jquery'] = '^1.9.1';
    dependencies['popper.js'] = '^1.12.3';
  }

  if(answers.bootstrapReact === constants.bootstrapReact.reactBootstrap) {
    dependencies['react-bootstrap'] = '^0.31.5';
  }

  if(answers.bootstrapReact === constants.bootstrapReact.reactstrap) {
    dependencies['reactstrap'] = '^5.0.0-alpha.4';
  }

  if(answers.foundationReact) {
    dependencies['react-foundation'] = '^0.9.2';
  }
};