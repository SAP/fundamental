const gulp = require('gulp');

module.exports = gulp.task('build:dist', gulp.series('pkg-clean', 'pkg-css', 'pkg-fonts', 'pkg-icons', 'pkg-images', 'pkg-resources'));

