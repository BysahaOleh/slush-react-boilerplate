const constants = require('../../constants');

module.exports = [
  {
    type: 'list',
    name: 'styleGuideTools',
    message: 'Select style guide tools:',
    choices: [
      constants.styleGuide.eslint,
      'Not'
    ]
  },
  {
    type: 'list',
    name: 'styleGuideESLint',
    message: 'Select  style guide preset:',
    choices: [
      constants.styleGuideEslint.airbnbJS,
      constants.styleGuideEslint.airbnbReact,
      'Not'
    ],
    when: function(answers) {
      return answers.styleGuideTools === constants.styleGuide.eslint
    }
  }
];