const gulp = require('gulp');
const sass = require('gulp-sass');

let environment = require('../lib/environment');

const paths = {
	src: environment.production ? './dist' : './tmp',
	dest: './docs/css'
}

let fundamentalCss = environment.production ? 'fiori-fundamentals.min.css' : 'fiori-fundamentals.css';

const task = (cb) => {
	console.log('--->', `${paths.src}/${fundamentalCss}`, paths.dest);
	
    gulp.src(`${paths.src}/${fundamentalCss}`)
		.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('docs-css', task);
module.exports = task;


// this task is possibally obsolete. investigate and remove
