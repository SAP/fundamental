const gulp = require('gulp');
const FwdRef = require('undertaker-forward-reference');

gulp.registry(FwdRef());

module.exports = gulp.task('default',
    gulp.series('docs-build', 'docs-site', 'dev-jekyll', gulp.parallel('dev-serve', 'dev-watch')));
