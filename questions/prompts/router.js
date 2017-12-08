const constants = require('../../constants');

module.exports = [
  {
    type: 'confirm',
    name: 'reactRouter',
    message: 'Do you want install react-router for ReactJS?',
    when: function(answers) {
      return answers.jsFramework === constants.jsFrameworks.react &&
        answers.lang === constants.lang.babel
    }
  }
];