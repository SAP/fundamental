const gulp = require('gulp');

module.exports = gulp.task('docs-build', gulp.series('build:dist',
    gulp.parallel(
        'docs-resources',
        'docs-icons',
        'docs-css',
        'docs-site',
        'docs-styleguide',
        'docs-fonts')));
