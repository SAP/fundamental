const gulp = require('gulp');
const sass = require('gulp-sass');

let environment = require('../lib/environment');

const paths = {
	src: environment.production ? './dist' : './tmp',
	dest: './docs/css'
}

let fundamentalCss = environment.production ? 'fundamental-ui.min.css' : 'fundamental-ui.css';

const task = (cb) => {
    return gulp.src([`${paths.src}/${fundamentalCss}`])
		.pipe(gulp.dest(paths.dest));

}

gulp.task('docs-css', task);
module.exports = task;


// this task is possibally obsolete. investigate and remove
