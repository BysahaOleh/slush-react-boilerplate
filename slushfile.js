/*
 * slush-react-boilerplate
 * https://github.com/BysahaOleh/slush-slush-react-boilerplate
 *
 * Copyright (c) 2017, Bysaha Oleh
 * Licensed under the MIT license.
 */
'use strict';

const gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer');

const prompts = require('./questions/prompts');

const constants = require('./constants');

const generator = require('./generator');
const getIgnoreFiles = require('./generator/getIgnoreFiles');

gulp.task('default', function (done) {
  inquirer
    .prompt(prompts)
    .then(function (answers) {

      if (!answers.moveon) {
        return done();
      }

      const content = generator(answers);
      const ignoreFiles = getIgnoreFiles(answers);

      gulp.src([__dirname + '/templates/**'].concat(ignoreFiles))
        .pipe(template(content))
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install(function() {
          done()
        }));
    });
});