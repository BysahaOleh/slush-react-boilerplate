const constants = require('../constants');

module.exports = function(answers) {
  let openingTags = [];
  let closingTags = [];
  let tabCounter = 1;

  if(answers.architecture === constants.architecture.redux && answers.jsFramework === constants.jsFrameworks.react) {
    openingTags.push(`${createTabs('  ', tabCounter)}<Provider store={store}>`);
    closingTags.push(`${createTabs('  ', tabCounter)}</Provider>`);
    tabCounter++
  }

  if(answers.reactLocalization === constants.reactLocalization.intl) {
    openingTags.push(`${createTabs('  ', tabCounter)}<IntlProvider locale="en">`);
    closingTags.push(`${createTabs('  ', tabCounter)}</IntlProvider>`);
  }

  if(answers.lang === constants.lang.es5 || answers.jsFramework === constants.jsFrameworks.react) {
    return `console.log('App ready')`
  }

  return  (
`import React from 'react';
import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl';
import { render } from 'react-dom';
import App from './containers/App';

import store from './store';

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