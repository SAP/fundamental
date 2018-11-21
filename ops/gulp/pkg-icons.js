const gulp = require('gulp');
const config = require('../config');
const environment = require('../lib/environment');

const paths = {
	src: `${config.root.css}/icons`,
	dest: environment.production ? config.root.dest : config.root.tmp
}

const task = (cb) => {
	gulp.src([`${paths.src}/*`, `!${paths.src}/*.scss`])
		.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('pkg-icons', task);
module.exports = task;