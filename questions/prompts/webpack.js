module.exports = [
  {
    type: 'confirm',
    name: 'webpackDevServer',
    message: 'Do you want install webpack-dev-server?'
  },
  {
    name: 'webpackDevServerPort',
    message: 'What is the port for server dev?',
    default: '3001',
    when: function(answers) {
      return answers.webpackDevServer
    }
  }
];