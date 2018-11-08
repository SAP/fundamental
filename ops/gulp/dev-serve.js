const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const siteRoot = 'docs/_site';

const task = () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

}

gulp.task('dev-serve', task);
module.exports = task;