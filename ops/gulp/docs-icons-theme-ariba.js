const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: environment.production ? './dist' : './tmp',
	dest: './docs/css'
}

var fundamentalIconCss = environment.production ? 'fundamental-ui-ariba-icons.min.css' : 'fundamental-ui-ariba-icons.css';

const task = (cb) => {
    return gulp.src([`${paths.src}/ariba/icons/*.woff`, `${paths.src}/ariba/icons/${fundamentalIconCss}`])
		.pipe(gulp.dest(paths.dest));
}

gulp.task('docs-icons-theme-ariba', task);
module.exports = task;
