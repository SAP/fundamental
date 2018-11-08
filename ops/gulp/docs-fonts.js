const gulp = require('gulp');
const config = require('../config');

const paths = {
	src: `${config.tasks.fonts}`,
	dest: './docs/css'
}

const task = (cb) => {
	gulp.src([
			`${config.root.css}/${config.tasks.fonts.src}/**/*`,
			`!${config.root.css}/${config.tasks.fonts.src}/*.scss`,
		])
		.pipe(gulp.dest(`${paths.dest}/${config.tasks.fonts.dest}`));
	cb();
}

gulp.task('docs-fonts', task);
module.exports = task;