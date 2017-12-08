module.exports = function generatePresets(answers) {
  return JSON.stringify({
    presets: answers.presets,
    plugins: answers.babelPlugins
  }, null, 2);
};