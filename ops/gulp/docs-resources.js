const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const task = (cb) => {
  gulp.src('./docs/images/**/*')
      .pipe(imagemin(
        [imagemin.svgo({
          plugins: [{
            removeTitle: true
          }, {
            cleanupIDs: true
          }]
        })]
      ))
      .pipe(gulp.dest('./docs/images'));
  cb();
}

gulp.task('docs-resources', task)
module.exports = task