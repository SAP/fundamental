const gulp = require('gulp');
const FwdRef = require('undertaker-forward-reference');

gulp.registry(FwdRef());

module.exports = gulp.task('default',
    gulp.series('docs-build', 'docs-site', gulp.parallel('dev-serve', 'dev-watch')));
