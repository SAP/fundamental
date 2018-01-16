const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

let environment = require('../lib/environment');

const task = (cb) => {

    gulpSequence('build:dist', ['docs-resources', 'docs-icons', 'docs-css', 'docs-styleguide'], cb);

}

gulp.task('docs-build', task);
module.exports = task;
