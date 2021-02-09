const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('./styles/vendor/fonts/*.{eot,ttf,woff,woff2}')
    .pipe(gulp.dest('build/vendor/fonts/'))
}