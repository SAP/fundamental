const gulp = require('gulp');
const config = require('../config');

let environment = require('../lib/environment');

const paths = {
	src: `${config.root.css}/theme/ariba/icons`,
	dest: (environment.production ? config.root.dest : config.root.tmp ) + '/ariba/icons'
}

const task = (cb) => {
	return gulp.src([`${paths.src}/*.woff`, `!${paths.src}/icon.scss`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('pkg-icons-ariba', task);
module.exports = task;