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
    ],
    when: function(answers) {
      return answers.lang !== constants.lang.es5
    }
  },
  {
    type: 'checkbox',
    choices: [
      {
        name: constants.reduxTools.form
      }, {
        name: constants.reduxTools.saga
      },
      new inquirer.Separator('!!!Redux saga use babel plugin ' + constants.babelPlugins.regeneratorTransform ),
      {
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
      return answers.architecture === constants.architecture.redux && answers.lang !== constants.lang.es5
    }
  },
  {
    name: 'reactApolloUrl',
    message: 'React Apollo url:',
    when: function(answers) {
      return answers.architecture === constants.architecture.reactApollo && answers.lang !== constants.lang.es5
    }
  },
  {
    type: 'list',
    name: 'reactLocalization',
    message: 'Select localization library:',
    choices: [
      constants.reactLocalization.intl,
      //constants.reactLocalization.i18n,
      'Not'
    ],
    when: function(answers) {
      return answers.jsFramework === constants.jsFrameworks.react && answers.lang !== constants.lang.es5
    }
  }
];