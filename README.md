**DEPRECATED**

# slush-react-boilerplate
Slush React simple boilerplate generator

It is a generator for simple creation setup React projects.

### Install

`
[sudo] npm i -g slush slush-react-boilerplate
`

### Run

`mkdir myProject`

`cd myProject`

`slush react-boilerplate`


### Description
In the generator there is:

The generator used Webpack for build project.

You can select the desired config from presented below.

JavaScript type:
- ES5
- Babel
- TypeScript

Babel Presets(only for Babel):
- es2015
- es2016
- es2017
- react
- stage-0
- state-1

Babel plugin(only for Babel):
- syntax-async-generators
- transform-regenerator

JavaScript Framework:
- React
- or without framework

CSS Framework:
- Bootstrap
- Foundation

If you choose React and any CSS Framework, you will be choose:
- for Bootstrap:
  - reactstrap
  - react-bootstrap
- for Foundation:
  - react-foundation
  
Architecture (only for React):
- Redux
- React Apollo

Redux tools(only for Redux):
- redux-saga
- redux-thunk
- redux-localstorage
- redux-form
- redux-logger

Localization (only for React):
- react-intl

Style guilde tools:
- ESLint

ESLint Presets (only for ESLint):
- React
- Standart

Testing:
- Jest

CSS Pre-processor
- Stylus
- LESS
- SCSS/SASS

