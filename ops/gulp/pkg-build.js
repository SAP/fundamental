const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('../config');
let environment = require('../lib/environment');

const task = (cb) => {
    gulpSequence('pkg-clean', 'pkg-css', 'pkg-icons', 'pkg-cdn', cb)
}

gulp.task('build:dist', task);
module.exports = task;
