const gulp = require('gulp');

module.exports = gulp.task('build:dist', gulp.series('error-detection', 'pkg-clean', 'pkg-css', 'pkg-fonts', 'pkg-icons', 'pkg-images'));
