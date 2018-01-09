const gulp = require('gulp');
const config = require('../config');

let environment = require('../lib/environment');

const paths = {
	src: `${config.root.css}/icons`,
	dest: environment.production ? config.root.dest : config.root.tmp
}

const task = (cb) => {
    let prefix = config.tasks.css.prefix;
    return gulp.src([`${paths.src}/*`, `!${paths.src}/*.scss`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('pkg-icons', task);
module.exports = task;
