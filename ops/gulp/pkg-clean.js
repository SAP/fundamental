const gulp   = require('gulp');
const del    = require('del');
const path = require('path');
const config = require('../config');

let environment = require('../lib/environment')

/*
when running locally, the package is built to tmp
the checked-in version of the package should only be built for releases and not features
*/
let dest = !environment.production ? config.root.tmp : config.root.dest;

const task = (cb) => {
    return del([`./${dest}/**/*`]);
}

gulp.task('pkg-clean', task);
module.exports = task
