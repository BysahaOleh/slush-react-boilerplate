const defaults = require('../default');
const origin = require('git-origin-url');
let repo = '';

origin(function (err, url) {
  if(!err) repo = url
});

module.exports = [
  {
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
  },
  {
    name: 'appDescription',
    message: 'What is the description?'
  },
  {
    name: 'appVersion',
    message: 'What is the version of your project?',
    default: '0.1.0'
  },
  {
    name: 'authorName',
    message: 'What is the author name?',
    default: defaults.authorName
  },
  {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
  },
  {
    name: 'appRepo',
    message: 'What is the repo url?',
    default: repo
  }
];