const gulp   = require('gulp');
const del    = require('del');
const config = require('../config');
const environment = require('../lib/environment')

const dest = config.root.dest;

const task = (cb) => {
    del([`./${dest}/**/*`]);
    cb();
}

gulp.task('pkg-clean', task);
module.exports = task
