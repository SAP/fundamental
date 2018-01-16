const gulp = require('gulp')
const sass = require('gulp-sass')

const config = require('../config')
let environment = require('../lib/environment')

const debug = require('gulp-debug');

const task = (cb) => {
	return gulp.src(['./docs/styles/*.scss', './docs/styles/_*.scss'])
    	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    	.pipe(gulp.dest('./docs/css'));
}

gulp.task('docs-styleguide', task)
module.exports = task
