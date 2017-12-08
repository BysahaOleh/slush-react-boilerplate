const constants = require('../constants');

module.exports = function(answers) {
  let imports = [];
  let end = [];

  if(answers.reduxTools) {
    answers.reduxTools.map(function(tool) {
      if(tool === constants.reduxTools.saga) {
        imports.push('import { runSaga } from \'./middlewares/saga\'');
        end.push('runSaga();')
      }
    });
  }

  return  (
`import { createStore } from 'redux';
import rootReducer from './reducers';
import middleware from './middlewares'
${imports.join('\n')}

const store = createStore( rootReducer, middleware);

${end.join('\n')}

export default store;`
  );
};

