const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const task = (cb) => {
    gulpSequence('dev-jekyll', ['dev-serve', 'dev-watch'], 'docs-build', 'docs-site', cb);
}

gulp.task('default', task);
module.exports = task;
