const constants = require('../../constants');

module.exports = [
  {
    type: 'list',
    name: 'style',
    message: 'Select need:',
    choices: [
      {
        name: 'Stylus',
        value: constants.styles.stylus
      },
      {
        name: 'LESS',
        value: constants.styles.less
      },
      {
        name: 'SCSS',
        value: constants.styles.scss
      },
      'Not'
    ]
  }
];