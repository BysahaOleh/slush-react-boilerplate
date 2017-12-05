const getDependencies = require('../conditionals/getDependencies');


module.exports = function generatePackageJSON(answers) {

  const allDependencies = getDependencies(answers);

  let packages = {
    name: answers.appName,
    version: answers.appVersion,
    description: answers.appDescription,
    main: "index.js",
    scripts: {
      "start": "node ./node_modules/webpack/bin/webpack.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    author: answers.authorName + ' <' + answers.authorEmail + '>',
    license: "MIT",
    devDependencies: allDependencies.devDependencies,
    dependencies: allDependencies.dependencies
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

  return packages
};