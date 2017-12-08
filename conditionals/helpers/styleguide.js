const constants = require('../../constants');

module.exports = function(dependencies, answers) {
  if(answers.styleGuideTools === constants.styleGuide.eslint) {
    dependencies['eslint'] = '^4.12.1';
  }

  if(answers.styleGuideESLint === constants.styleGuideEslint.airbnbReact) {
    dependencies['eslint-plugin-react'] = '^7.5.1';
  }

  if(answers.styleGuideESLint === constants.styleGuideEslint.airbnbJS) {
    dependencies['eslint-config-standard'] = '^10.2.1';
    dependencies['eslint-plugin-import'] = '^2.8.0';
    dependencies['eslint-plugin-node'] = '^5.2.1';
    dependencies['eslint-plugin-promise'] = '^3.6.0';
    dependencies['eslint-plugin-standard'] = '^3.0.1';
  }

};