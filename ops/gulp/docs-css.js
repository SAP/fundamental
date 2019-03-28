const gulp = require('gulp');
const environment = require('../lib/environment');
const paths = {
	src: './dist',
	dest: './docs/css'
}

const fundamentalCss = environment.production ? 'fiori-fundamentals.min.css' : 'fiori-fundamentals.css';

const task = (cb) => {
    gulp.src(`${paths.src}/${fundamentalCss}`)
		.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('docs-css', task);
module.exports = task;


// this task is possibally obsolete. investigate and remove
