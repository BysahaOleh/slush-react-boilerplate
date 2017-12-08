const constants = require('../constants');

module.exports = function(answers) {
  let imports = [];
  let reducers = [];

  if(answers.reduxTools === constants.reduxTools.form) {
    imports.push('import { reducer as formReducer } from \'redux-form\';');
    reducers.push('form: formReducer.plugin({})')
  }

  return  (
`import { combineReducers } from 'redux';
${imports.join('\n')}

const rootReducer =  combineReducers({
  ${reducers.join('\n\t')
});

export default rootReducer;`
  );
};