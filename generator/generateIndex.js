const constants = require('../constants');

module.exports = function(answers) {
  let imports = [];
  let vars = [];
  let openingTags = [];
  let closingTags = [];
  let tabCounter = 1;


  if(answers.architecture === constants.architecture.redux && answers.jsFramework === constants.jsFrameworks.react) {
    imports.push('import { Provider } from \'react-redux\';', 'import store from \'./store\';');
    openingTags.push(`${createTabs('  ', tabCounter)}<Provider store={store}>`);
    closingTags.push(`${createTabs('  ', tabCounter)}</Provider>`);
    tabCounter++
  }

  if(answers.reactLocalization === constants.reactLocalization.intl) {
    imports.push('import {IntlProvider} from \'react-intl\';');
    openingTags.push(`${createTabs('  ', tabCounter)}<IntlProvider locale="en">`);
    closingTags.push(`${createTabs('  ', tabCounter)}</IntlProvider>`);
    tabCounter++
  }

  if(answers.architecture === constants.architecture.reactApollo && answers.jsFramework === constants.jsFrameworks.react) {
    imports.push('import { ApolloClient, createNetworkInterface } from \'apollo-client\';', 'import { ApolloProvider } from \'react-apollo\';');
    openingTags.push(`${createTabs('  ', tabCounter)}<Provider store={store}>`);
    closingTags.push(`${createTabs('  ', tabCounter)}</Provider>`);
    vars.push('const client = new ApolloClient({\n' +
      '  networkInterface: createNetworkInterface({\n' +
      '    uri: \'' +answers.reactApolloUrl + '\',\n' +
      '  }),\n' +
      '});');
    tabCounter++
  }

  if(answers.lang === constants.lang.es5 || answers.jsFramework === constants.jsFrameworks.react) {
    return `console.log('App ready')`
  }

  return  (
`import React from 'react';
import { render } from 'react-dom';

${imports.join('\n')}

import App from './containers/App';

${vars.join('\n')}

render(
${openingTags.join('\n')}
${createTabs('  ', tabCounter)}<App/>
${closingTags.reverse().join('\n')}
, document.getElementById('app'));
`
  );
};

function createTabs(tab, count) {
  let tabs = '';
  for(let i = 0; i < count; i++) {
    tabs = tabs + tab
  }
  return tabs
}