const constants = require('../constants');

module.exports = function(answers) {
  let imports = [];
  let variables = [];
  let middleware = [];

  if(answers.reactRouter) {
    imports.push(
      'import { useRouterHistory } from \'react-router\';',
      'import { routerMiddleware } from \'react-router-redux\';',
      'import { createHashHistory } from \'history\';'
    );
    variables.push(
      'const appHistory = useRouterHistory(createHashHistory)();',
      'const routing = routerMiddleware(appHistory);'
    );
    middleware.push('routing');
  }

  if(answers.reduxTools) {
    answers.reduxTools.map(function(tool) {
      if(tool === constants.reduxTools.saga) {
        imports.push('import sagaMiddleware from \'./saga\';');
        middleware.push('sagaMiddleware')
      }
    });
  }

  return  (
`import { applyMiddleware, compose } from 'redux';
${imports.join('\n')}

${variables.join('\n')}

const middleware = compose(
    applyMiddleware(
        ${middleware.join(',\n')}
    ),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

export default middleware;`
  );
};