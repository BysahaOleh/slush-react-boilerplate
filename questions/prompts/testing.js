const constants = require('../../constants');

module.exports = [
  {
    type: 'list',
    name: 'testingTool',
    message: '',
    choices: [
      constants.testingTool.jest,
      constants.testingTool.karma,
      'Skip'
    ]
  }
];