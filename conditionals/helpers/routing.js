module.exports = function(dependencies, answers) {
  if(answers.reactRouter) {
    dependencies['react-router-dom'] = '^4.2.2';
    dependencies['react-router-redux'] = '^4.0.8';
  }
};