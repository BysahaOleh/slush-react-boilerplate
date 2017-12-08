const constants = require('../../constants');

module.exports = function(dependencies, answers) {

  if(answers.style !== 'Not') {
    dependencies['style-loader'] = '^0.19.0';
    dependencies['css-loader'] = '^0.28.7';
  }

  if(answers.style === constants.styles.less) {
    dependencies['less'] = '^2.7.3';
    dependencies['less-loader'] = '^4.0.5';
  }

  if(answers.style === constants.styles.stylus) {
    dependencies['stylus'] = '^0.54.5';
    dependencies['stylus-loader'] = '^3.0.1';
  }

  if(answers.style === constants.styles.scss) {
    dependencies['node-sass'] = '^4.7.25';
    dependencies['sass-loader'] = '^6.0.6';
    dependencies['resolve-url-loader'] = '^2.2.0';
  }
};