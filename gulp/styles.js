const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const gulpAutoprefixer = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const gulpStylelint = require('gulp-stylelint');

module.exports = function styles() {
  return gulp.src('./styles/**/*.css')
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(gulpAutoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`
      ${details.name}: Original size:
      ${details.stats.originalSize} - Minified size:
      ${details.stats.minifiedSize}`)
    }))
    .pipe(sourcemaps.write())
    .pipe(postcss([autoprefixer]))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist/styles'));
}