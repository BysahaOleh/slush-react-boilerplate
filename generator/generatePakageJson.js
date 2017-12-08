const getDependencies = require('../conditionals/getDependencies');
const constants = require('../constants');

module.exports = function generatePackageJSON(answers) {

  const allDependencies = getDependencies(answers);

  let packages = {
    name: answers.appName,
    version: answers.appVersion,
    description: answers.appDescription,
    main: "index.js",
    scripts: {
      "start": "node ./node_modules/webpack/bin/webpack.js"
    },
    author: answers.authorName + ' <' + answers.authorEmail + '>',
    license: "MIT",
    devDependencies: sortDependencies(allDependencies.devDependencies),
    dependencies: sortDependencies(allDependencies.dependencies)
  };

  if(answers.repo && answers.repo.length > 0) {
    packages.repository = {
      "type": "git",
        "url": answers.repo
    }
  }

  if(answers.webpackDevServer) {
    packages.scripts['start:dev'] = "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js";
  }

  switch(answers.styleGuideTools) {
    case constants.styleGuide.eslint:
      packages.scripts['test'] = './node_modules/.bin/eslint .'
  }

  return JSON.stringify(packages, null, 2);
};


function sortDependencies(dependencies) {
  let keys = Object.keys(dependencies).sort();


  let result = {};

  keys.map(function(item) {
    result[item] = dependencies[item]
  });

  return result
}