const constants = require('../../constants');

module.exports = [
  {
    type: 'confirm',
    name: 'reactRouter',
    message: 'Do you want install react-router?',
    when: function(answers) {
      return answers.jsFramework !== constants.jsFrameworks.react
    }
  }
];