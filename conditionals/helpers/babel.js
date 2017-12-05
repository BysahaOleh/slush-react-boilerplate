const presetsVersion = '^6.24.1';

module.exports = function(devDependencies, answers) {
  devDependencies['babel-core'] = '^6.26.0';
  devDependencies['babel-loader'] = '^7.1.2';

  if(answers.presets && answers.presets.length) {
    answers.presets.map(function(preset) {
      devDependencies['babel-preset-' + preset] = presetsVersion;
    })
  }
};
