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
    inquirer = require('inquirer'),
    download = require('download-git-repo'),
    rimraf = require('rimraf');

const prompts = require('./questions/prompts');

const generator = require('./generator');

let ignoreFiles = [];

gulp.task('default', function (done) {
  inquirer
    .prompt(prompts)
    .then(function (answers) {

      console.log(generator(answers));
      if (!answers.moveon) {
        return done();
      }

      /*download('BysahaOleh/slush-react-boilerplate-source', './tmp', function (err) {
        if(err) {
          done()
        }
        gulp.src('./tmp/!**!/!**.*')
          .pipe(gulp.dest('./temp'))
          .on('end', function() {
            rimraf('./tmp', function () {
              console.log('done');
              done();
            });
          });
      });*/

      const content = generator(answers);

      gulp.src(__dirname + '/templates/**')
        .pipe(template(content))
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function () {
          done();
        });

    });
});