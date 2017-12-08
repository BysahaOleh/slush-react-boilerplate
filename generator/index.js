const getPackageJSON = require('./generatePakageJson');
const getPresets = require('./generateBabelConfig');
const getWebpackConfig = require('./generateWebpackConfig');
const getESLintConfig = require('./generateESlintConfig');
const getReducers = require('./generateReducer');
const getMiddleware = require('./generateMiddleware');
const getStore = require('./generateStore');
const getIndex = require('./generateIndex');

module.exports = function(answers) {
  return {
    packageJSON: getPackageJSON(answers),
    presets: getPresets(answers),
    webpackConfig: getWebpackConfig(answers),
    eslintConfig: getESLintConfig(answers),
    reducers: getReducers(answers),
    middleware: getMiddleware(answers),
    store: getStore(answers),
    index: getIndex(answers)
  };
};