const constants = require('../constants');

const baseDir = '!' + __dirname.slice(0, __dirname.lastIndexOf('/')) + '/templates/';

module.exports = function(answers) {

  let ignoreFiles = [];

  if(answers.lang !== constants.lang.es5 && answers.lang !== constants.lang.babel) {
    ignoreFiles.push('src/**/**.js')
  }

  if(answers.lang !== constants.lang.babel) {
    ignoreFiles.push('src/**/**.jsx')
  }

  if(answers.lang !== constants.lang.babel) {
    ignoreFiles.push('_babelrc')
  }

  if(answers.lang !== constants.lang.ts) {
    ignoreFiles.push('tsconfig.json', 'src/**/**.ts', 'src/**/**.d.ts', 'src/**/**.tsx')
  }

  if(answers.architecture !== constants.architecture.redux) {
    ignoreFiles.push('src/actions', 'src/reducers', 'src/middleware', 'src/store.*')
  }

  if(answers.reduxTools !== constants.reduxTools.saga)  {
    ignoreFiles.push('src/sagas', 'src/middleware/saga.*')
  }

  if(answers.testingTool === 'Not') {
    ignoreFiles.push('src/test.spec.js')
  }

  return ignoreFiles.map(function(file) {
    return baseDir + file
  })
};