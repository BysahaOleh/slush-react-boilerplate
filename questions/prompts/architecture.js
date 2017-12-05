const inquirer = require('inquirer');

const constants = require('../../constants');

module.exports = [
  {
    type: 'list',
    name: 'architecture',
    message: 'Select:',
    choices: [
      constants.architecture.redux,
      constants.architecture.reactApollo,
      'Not'
    ]
  },
  {
    type: 'checkbox',
    choices: [
      {
        name: constants.reduxTools.form
      }, {
        name: constants.reduxTools.saga
      }, {
        name: constants.reduxTools.thunk
      }, {
        name: constants.reduxTools.localstorage
      },
      new inquirer.Separator(' = DEV = '),
      {
        name: constants.reduxTools.logger
      }
    ],
    name: 'reduxTools',
    message: 'Select Redux tools',
    when: function(answers) {
      return answers.architecture === constants.architecture.redux
    }
  },
  {
    type: 'list',
    name: 'reactLocalization',
    message: 'Select localization library:',
    choices: [
      constants.reactLocalization.intl,
      constants.reactLocalization.i18n,
      'Not'
    ],
    when: function(answers) {
      return answers.jsFramework === constants.jsFrameworks.react
    }
  }
];