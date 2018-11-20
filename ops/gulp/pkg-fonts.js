const gulp = require('gulp');
const config = require('../config');
const paths = {
	src: `${config.tasks.fonts}`,
	dest: `${config.root.dest}`
}

const task = (cb) => {
	gulp.src([
			`${config.root.css}/${config.tasks.fonts.src}/**/*`,
			`!${config.root.css}/${config.tasks.fonts.src}/*.scss`,
		])
		.pipe(gulp.dest(`${paths.dest}/${config.tasks.fonts.dest}`));
	cb();
}

gulp.task('pkg-fonts', task);
module.exports = task;

// this task is no longer used since we are using unpkg.com for CDN