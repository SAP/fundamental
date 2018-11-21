const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config');
const pkg = require('../../package');
const paths = {
    src: `${config.root.resources}`,
    dest: `${config.root.dest}/resources`
}

const task = (cb) => {
    gulp.src([
        `${paths.src}/**/*`,
    ])
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest(paths.dest));
    cb();
}

gulp.task('pkg-resources', task);
module.exports = task;
