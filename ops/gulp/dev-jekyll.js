const gulp = require('gulp');
const child = require('child_process');
const signale = require('signale');

gulp.task('dev-jekyll', (cb) => {
    const jekyll = child.exec('bundle exec jekyll build --watch --incremental --config _config.yml,_config-library.yml', { cwd: 'docs' })

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => signale.info('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  cb();
});
