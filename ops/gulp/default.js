const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const task = (cb) => {
    gulpSequence('docs-build', 'docs-site', 'dev-jekyll', ['dev-serve', 'dev-watch'], cb);
}

gulp.task('default', task);
module.exports = task;
