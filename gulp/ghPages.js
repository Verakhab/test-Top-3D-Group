const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

module.exports = function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
}