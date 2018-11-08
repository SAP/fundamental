const gulp = require('gulp');

let environment = require('../lib/environment');

const paths = {
	src: 'scss',
	dest: environment.production ? 'dist' : 'tmp'
}

const task = () => {

	//watch docs templates and component templates
	//gulp.watch([`./docs/**/*.html`,`./src/**/*.html`]);

	//watch component styles
	gulp.watch([`./scss/**/*.scss`], gulp.series('pkg-css'));

	//update docs styles
	gulp.watch([`${paths.dest}/fundamntal-ui.css`], gulp.series('docs-css'));

	// update site styles
	gulp.watch([`./docs/scss/**/*.scss`], gulp.series('docs-site'));

	//update styleguide styles
	//gulp.watch([`./docs/styleguide/styles/**/*.scss`], ['docs-styleguide']);

}

gulp.task('dev-watch', task);
module.exports = task;
