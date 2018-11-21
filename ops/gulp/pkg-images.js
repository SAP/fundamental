const gulp = require('gulp');
const config = require('../config');
const imagemin = require('gulp-imagemin');

const paths = {
  src: `${config.root.images}`,
  dest: `${config.root.dest}`
}

const task = (cb) => {
  gulp.src([`${paths.src}/**/*`])
      .pipe(imagemin(
        [imagemin.svgo({
          plugins: [{
            removeTitle: true
          }, {
            cleanupIDs: true
          }]
        })]
      ))
      .pipe(gulp.dest(`${paths.dest}/${config.tasks.images.dest}`));
  cb();
}

gulp.task('pkg-images', task);
module.exports = task;
