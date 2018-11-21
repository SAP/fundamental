const gulp = require('gulp');
const config = require('../config');
const pkg = require('../../package');
const paths = {
	src: `${config.root.resources}`,
	dest: `${config.root.dest}`
}

const task = (cb) => {
	gulp.src([
			`${paths.src}/**/*`,
		])
		.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('pkg-resources', task);
module.exports = task;
