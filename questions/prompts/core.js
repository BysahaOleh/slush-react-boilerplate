const constants = require('../../constants');

module.exports = [
  {
    type: 'list',
    name: 'lang',
    message: 'Select need',
    choices: [
      constants.lang.es5,
      constants.lang.babel,
      constants.lang.ts
    ]
  },
  {
    type: 'checkbox',
    choices: [
      {
        name: constants.babelPresets.es2015
      }, {
        name: constants.babelPresets.es2016
      }, {
        name: constants.babelPresets.es2017
      }, {
        name: constants.babelPresets.react
      }, {
        name: constants.babelPresets.stage0
      }, {
        name: constants.babelPresets.stage1
      }
    ],
    name: 'presets',
    message: 'Select Babel presets',
    when: function(answers) {
      return answers.lang === constants.lang.babel
    },
    validate: function(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one preset.';
      }
      return true;
    }
  },
  {
    type: 'checkbox',
    choices: [
      {
        name: constants.babelPlugins.asyncGenerators
      }, {
        name: constants.babelPlugins.regeneratorTransform
      }
    ],
    name: 'babelPlugins',
    message: 'Select Babel plugins',
    when: function(answers) {
      return answers.lang === constants.lang.babel
    }
  },
  {
    type: 'list',
    name: 'jsFramework',
    message: 'Select JS Framework',
    choices: [
      constants.jsFrameworks.react,
      'Not'
    ]
  },
  {
    type: 'list',
    name: 'cssFramework',
    message: 'Select CSS Framework',
    choices: [
      constants.cssFrameworks.bootstrap,
      constants.cssFrameworks.foundation,
      'Not'
    ]
  },
  {
    type: 'list',
    name: 'bootstrapReact',
    message: 'Do you want install addition library for ReactJS?',
    choices: [
      constants.bootstrapReact.reactstrap,
      constants.bootstrapReact.reactBootstrap,
      'Not'
    ],
    when: function(answers) {
      return answers.jsFramework === constants.jsFrameworks.react &&
        answers.cssFramework === constants.cssFrameworks.bootstrap
    }
  },
  {
    type: 'confirm',
    name: 'foundationReact',
    message: 'Do you want install react-foundation for ReactJS?',
    when: function(answers) {
      return answers.jsFramework === constants.jsFrameworks.react &&
        answers.cssFramework === constants.cssFrameworks.foundation
    }
  }
];