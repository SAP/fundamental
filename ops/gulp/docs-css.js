const gulp = require('gulp');
const sass = require('gulp-sass');

let environment = require('../lib/environment');

const paths = {
	src: environment.production ? './dist' : './tmp',
	dest: './docs/css'
}

let techneCss = environment.production ? 'techne.min.css' : 'techne.css';

const task = (cb) => {
    return gulp.src([`${paths.src}/${techneCss}`])
		.pipe(gulp.dest(paths.dest));

}

gulp.task('docs-css', task);
module.exports = task;
