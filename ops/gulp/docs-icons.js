const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: './dist',
	dest: './docs/css'
}

const task = (cb) => {
    return gulp.src([`${paths.src}/*.woff`, `${paths.src}/*.woff2`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('docs-icons', task);
module.exports = task;
