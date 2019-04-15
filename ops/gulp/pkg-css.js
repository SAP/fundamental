const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const config = require('../config');
const environment = require('../lib/environment');
const signale = require('signale');
const paths = {
    src: config.root.css,
    dest: './dist'
}

//compile top-level files
const sassTask = () => {
    const prefix = config.tasks.css.prefix;
    const files = [`${paths.src}/*.${config.tasks.css.extensions}`,`!${paths.src}/*.less.${config.tasks.css.extensions}`];

    const isAllCss = file => file.path.includes('all.css');
    const isAllIE11Css = file => file.path.includes('all-ie11.css');


    return gulp.src(files)
        .pipe(gulpif(environment.development, sourcemaps.init()))
        .pipe(sass().on('error', (e) => {
			signale.error(e);
			return sass.logError;
		}))
        .pipe(autoprefixer(config.tasks.css.autoprefixer))
        .pipe(gulpif(environment.production, cleanCSS(config.tasks.css.cleanCSS)))
        .pipe(gulpif(isAllCss, rename({
            basename: prefix
        })))
        .pipe(gulpif(isAllIE11Css, rename({
            basename: `${prefix}-ie11`
        })))
        .pipe(gulpif(environment.development, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest));
};
gulp.task('pkg-sass', sassTask);

//main css task
module.exports = gulp.task('pkg-css', gulp.series('pkg-sass'));
