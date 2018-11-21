const gulp   = require('gulp');
const del    = require('del');
const config = require('../config');
const environment = require('../lib/environment')

/*
when running locally, the package is built to tmp
the checked-in version of the package should only be built for releases and not features
*/
const dest = !environment.production ? config.root.tmp : config.root.dest;

const task = (cb) => {
    del([`./${dest}/**/*`]);
    cb();
}

gulp.task('pkg-clean', task);
module.exports = task
