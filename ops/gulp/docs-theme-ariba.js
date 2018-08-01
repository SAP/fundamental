const gulp = require('gulp');
const sass = require('gulp-sass');

let environment = require('../lib/environment');

const paths = {
	src: environment.production ? './dist' : './tmp',
	dest: './docs/css/theme/ariba'
}

const taskCopyAll = (cb) => {
	return gulp.src([`${paths.src}/theme/ariba/**/*.*`])
		.pipe(gulp.dest(paths.dest ));
}

gulp.task('docs-theme-ariba', taskCopyAll);
module.exports = taskCopyAll;
