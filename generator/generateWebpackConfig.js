const constants = require('../constants');

module.exports = function (answers) {
  let devServer = answers.webpackDevServer ? `
  devServer: {
    contentBase: __dirname + '/src/',
    publicPath: '/',
    port: ${answers.webpackDevServerPort}
  },` : '';

  let entryFile = answers.lang === constants.lang.ts ? 'index.ts' : 'index.js';


  return `
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname + '/src',

  entry: {
    bundle: './${entryFile}'
  },

  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },

  devtool: 'inline-source-map',
  ${getModules(answers)}
  ${devServer}
  
  resolve: {
    extensions: ${getExtensions(answers)}
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
  `
};

function getExtensions(answers) {
  if (answers.lang === constants.lang.babel) return `['.js', '.jsx']`;
  if (answers.lang === constants.lang.ts) return `['.js', '.ts', '.tsx']`;
  return `['.js']`;
}

function getModules(answers) {
  let modules = [];

  if(answers.lang === constants.lang.babel) {
    modules.push(`
      {
        test: /\\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }`)
  }

  if(answers.lang === constants.lang.ts) {
    modules.push(`
      { test: /\\.(ts|tsx)?$/, loader: 'ts-loader' }`)
  }


  return `
  module: {
    rules: [
      ${modules.join(',\n')}
    ]
  },`
}