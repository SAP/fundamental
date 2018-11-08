const gulp = require('gulp')
const sass = require('gulp-sass');

const task = (cb) => {
	gulp.src(['./docs/styles/*.scss', './docs/styles/_*.scss'])
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./docs/css'));
	cb();
}

gulp.task('docs-styleguide', task)
module.exports = task