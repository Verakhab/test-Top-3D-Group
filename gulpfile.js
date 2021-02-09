const gulp = require('gulp');

const html = require('./gulp/html');
const styles = require('./gulp/styles');
const fonts = require('./gulp/fonts');
const imageMinify = require('./gulp/imageMinify');
const clean = require('./gulp/clean');

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(html, styles, fonts, imageMinify);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setMode(), build);
module.exports.build = gulp.series(setMode(true), build);
