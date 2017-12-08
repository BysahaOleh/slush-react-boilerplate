const presetsVersion = '^6.24.1';

const pluginVersions = {
  ['syntax-async-generators']: '^6.13.0',
  ['transform-regenerator']: '^6.26.0'
};

module.exports = function(devDependencies, answers) {
  devDependencies['babel-core'] = '^6.26.0';
  devDependencies['babel-loader'] = '^7.1.2';

  if(answers.presets && answers.presets.length) {
    answers.presets.map(function(preset) {
      devDependencies['babel-preset-' + preset] = presetsVersion;
    })
  }

  if(answers.babelPlugins && answers.babelPlugins.length) {
    answers.presets.map(function(plugin) {
      devDependencies['babel-plugin-' + plugin] = pluginVersions[plugin];
    })
  }
};
