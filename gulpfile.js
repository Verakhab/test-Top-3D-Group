const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');

gulp.task('default', function(done) {
	console.log("Gulp is running!");
	done();
});


gulp.task ('styles', function(done) {
	console.log("style is running!");

	return gulp.src('./styles/*/*.css')


	.pipe(postcss([autoprefixer]))
	.pipe(cleancss())
	.pipe(concat('style.css'))


    .pipe(gulp.dest('styles'))
    done();
});