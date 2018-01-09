const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');

gulp.task('dev-jekyll', () => {
  const jekyll = child.exec('bundle exec jekyll build --watch --incremental', { cwd: 'docs' })

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});
