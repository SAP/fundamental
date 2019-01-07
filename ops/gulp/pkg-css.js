const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');
const config = require('../config');
const pkg = require('../../package');
const environment = require('../lib/environment');
const signale = require('signale');
const paths = {
    src: config.root.css,
    dest: environment.production ? config.root.dest : config.root.tmp
}

const d = new Date();
const y = d.getFullYear();
const banner = `/*!
* Fiori Fundamentals v${pkg.version}
* Copyright (c) ${y} SAP SE or an SAP affiliate company.
* Licensed under Apache License 2.0 (https://github.com/SAP/Fundamental/blob/master/LICENSE)
*/\n`;

//compile top-level files
const sassTask = () => {
    const prefix = config.tasks.css.prefix;
    const files = environment.production ? [`${paths.src}/*.${config.tasks.css.extensions}`,`!${paths.src}/*.less.${config.tasks.css.extensions}`] : `${paths.src}/all.scss`;

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

//compile top-level (dark) files
const darkSassTask = () => {
    const prefix = config.tasks.css.prefix;
    const files = environment.production ? `${paths.src}/*.${config.tasks.css.extensions}` : `${paths.src}/all-dark.scss`;

    const isAllCss = file => file.path.includes('all-dark');
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
        .pipe(gulpif(environment.development, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest));
};
gulp.task('pkg-dark-sass', darkSassTask);

//compile individual component files
const componentsTask = () => {
    const files = [
        `${paths.src}/components/*.${config.tasks.css.extensions}`,
        `!${paths.src}/components/_*.${config.tasks.css.extensions}`
    ];
    return gulp.src(files)
        .pipe(sass().on('error', (e) => {
			signale.error(e);
			return sass.logError;
		}))
        .pipe(autoprefixer(config.tasks.css.autoprefixer))
        .pipe(gulpif(environment.production, cleanCSS(config.tasks.css.cleanCSS)))
        .pipe(gulp.dest(`${paths.dest}/components`));
};
gulp.task('pkg-css-components', componentsTask);

//create minify versions
const minifyTask = () => {
    return gulp.src([`${paths.dest}/**/*.css`])
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: false
                }
            }
        }))
        .pipe(rename({
            suffix: `.min`
        }))
        .pipe(gulp.dest(paths.dest));
}
gulp.task('pkg-css-minify', minifyTask);

//add banner
const bannerTask = () => {
    return gulp.src([`${paths.dest}/**/*.css`])
        .pipe(header(banner))
        .pipe(gulp.dest(paths.dest));
};
gulp.task('pkg-css-banner', bannerTask);

//main css task
module.exports = gulp.task('pkg-css', environment.production ?
    gulp.series('pkg-sass', 'pkg-less', 'pkg-css-components', 'pkg-css-minify', 'pkg-css-banner') :
    gulp.series('pkg-sass'));
