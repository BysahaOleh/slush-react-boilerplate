const constants = require('../constants');

module.exports = function(answers) {
  let config = {};

  if(answers.styleGuideESLint === constants.styleGuideEslint.airbnbReact) {
    config = {
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
      },
      "env": {
        "browser": true,
        "es6": true,
        "node": true
      },
      "parser": "babel-eslint",
      "rules": {
        "eol-last": 2,
        "max-len": [1, 120, 4],
        "no-underscore-dangle": [0],
        "no-var": 2,
        "react/display-name": 0,
        "react/jsx-boolean-value": 2,
        "react/jsx-quotes": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": 0,
        "react/no-unknown-property": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 2,
        "react/wrap-multilines": 2,
        "quotes": [2, "single"],
        "space-before-function-paren": [2, {
          "anonymous": "always",
          "named": "never"
        }],
        "strict": [2, "global"]
      },
      "plugins": [
        "react"
      ]
    }
  }

  if(answers.styleGuideESLint === constants.styleGuideEslint.airbnbJS) {
    config = {
      "extends": "standard"
    }
  }

  return JSON.stringify(config, null, 2);
};