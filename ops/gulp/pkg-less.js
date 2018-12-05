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
const debug = require('gulp-debug');
const replace = require('gulp-replace')
const del    = require('del');
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
const lessTask = () => {
    if (environment.production) {
      del([`./less/**/fiori-fundamentals-*.less`]);
    }
    const prefix = config.tasks.css.prefix;
    let files = [`${paths.src}/*.less.scss`];
    const regex = /calc\((.*)var(.*)\)/g;
    return gulp.src(files)
        .pipe(sass().on('error', (e) => {
			signale.error(e);
			return sass.logError;
		}))
        .pipe(autoprefixer(config.tasks.css.autoprefixer))
        .pipe(gulpif(environment.production, cleanCSS(config.tasks.css.cleanCSS)))
        .pipe(rename({
          prefix: "fiori-",
          extname: ""
        }))
        .pipe(replace(regex, '~"calc\($1var$2\)"'))
        .pipe(header(banner))
        .pipe(gulp.dest('./less'));
};
gulp.task('pkg-less', lessTask);

// //main css task
// module.exports = gulp.task('pkg-less', gulp.series('less'));
