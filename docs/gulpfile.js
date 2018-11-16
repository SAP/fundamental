const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const path = require("path");

const paths = {
	src: './scss/**/*.scss',
	dest: './css/'
}

const task = (cb) => {	
    gulp.src(paths.src)
	.pipe(sourcemaps.init())
	.pipe(sass({
    includePaths: [ path.join(__dirname, '..')]
  }).on('error', sass.logError))
	.pipe(rename("fui-site.css"))
	.pipe(gulp.dest(paths.dest));
	cb();

}

gulp.task('docs-site', task);
module.exports = task;