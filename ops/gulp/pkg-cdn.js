const gulp = require('gulp');
const config = require('../config');
const pkg = require('../../package');

let environment = require('../lib/environment');

const paths = {
	src: `${config.root.dest}`,
	dest: `${config.root.cdn}/${pkg.version}`
}

const task = (cb) => {
    return gulp.src([
			`${paths.src}/*.woff`,
			`${paths.src}/*.woff2`,
			`${paths.src}/techne.min.css`
		])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('pkg-cdn', task);
module.exports = task;
