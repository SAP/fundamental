const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const path = require("path");
const nodemon = require('gulp-nodemon');
const waitForPort = require('wait-for-port');
const localAppPort = 3030;

const paths = {
	src: './scss/**/*.scss',
	dest: './css/'
}

gulp.task('server:start', function (cb) {	
    // Check if the server port is already in use, if it is assume the server is started.
    waitForPort('localhost', localAppPort, {numRetries: 5, retryInterval: 500},
        function(err) {
            if (!err) {
                // port already in use, assume that the server is started.
                console.log('Server port already in use, assuming that the server is already up');
                cb();
            } else {
                return nodemon({
                    script: '../test/app.js'
                }).once('start', function (data) {
                    waitForPort('localhost', localAppPort, {numRetries: 5, retryInterval: 1000},
                        function(err) {
                            if (err) {
                                throw "Could not connect to port " + localAppPort;
                            }
                            cb();
                        }
                    );
                }).on('crash', function() {
                    process.exit(-1);
                });
            }
        }
    );	
});

const task = (cb) => {	
    gulp.src(paths.src)
	.pipe(sourcemaps.init())
	.pipe(sass({
    includePaths: [ path.join(__dirname, '..')]
  }).on('error', sass.logError))
	.pipe(rename("fui-site.css"))
	.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('docs-site', task);
module.exports = task;