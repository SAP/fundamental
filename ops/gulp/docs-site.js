const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");

const paths = {
	src: './docs/scss/**/*.scss',
	dest: './docs/css/'
}

const task = (cb) => {
    return gulp.src(paths.src)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(rename("fui-site.css"))
	.pipe(gulp.dest(paths.dest));

}

gulp.task('docs-site', task);
module.exports = task;
