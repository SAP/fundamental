const gulp = require('gulp');
const FwdRef = require('undertaker-forward-reference');

gulp.registry(FwdRef());

// const task = (cb) => {
//     gulp.series('dev-jekyll',  gulp.parallel('dev-serve', 'dev-watch'), 'docs-build', 'docs-site', cb());
// }

// gulp.task('default', task);
// module.exports = task;

module.exports = gulp.task('default', gulp.series('dev-jekyll', 'docs-build', 'docs-site', gulp.parallel('dev-serve', 'dev-watch')));
