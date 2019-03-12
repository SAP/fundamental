const gulp = require('gulp');
const child = require('child_process');
const signale = require('signale');

gulp.task('dev-jekyll-mvx', (cb) => {
  const jekyll = child.exec('bundle exec jekyll build --config _config.yml,_config-library.yml,_mvx.yml --baseurl /_site', { cwd: 'docs' })

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => signale.info('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  cb();
});
