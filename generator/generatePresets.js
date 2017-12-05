module.exports = function generatePresets(presets) {
  if(presets) {
    return presets.map(function (preset) {
      return '"' + preset + '"'
    }).join(', ').slice(1, -1)
  }
};