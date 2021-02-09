const gulp = require('gulp');
const plumber = require('gulp-plumber');
const { htmlValidator } = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');

module.exports = function html() {
  return gulp.src('./*.html')
    .pipe(plumber())
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter())
    .pipe(bemValidator())
    .pipe(gulp.dest('dist'));
}