const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const waitForPort = require('wait-for-port');
const backstop = require('backstopjs');
const localAppPort = 3030;
const backstopConfigLocation = 'test/visual-regression-tests/backstop.json';

// Starts the test server.  If the server port is already in use, it is assumed that the server is already running.
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
                    script: 'test/app.js'
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

const backstopReference = (cb) => {
    const promise = backstop('reference', {config: backstopConfigLocation, docker: true  });
    promise.catch(function (error) {
        // Reference screenshots failed to generate
        cb(error);
        process.exit(-1);
    });        
    promise.then(function() {
        // Reference screenshots created.
        cb();
        process.exit(0);
    });
}

const backstopTest = (cb) => {
    const promise = backstop('test', {config: backstopConfigLocation, docker: true });
    promise.catch(function (error) {
        // Tests failed.
        cb(error);
        process.exit(0);
    });        
    promise.then(function() {
        // All Tests passed
        cb();
        process.exit(0);
    });
};

gulp.task('backstop:test', backstopTest);
gulp.task('backstop:reference', backstopReference);

// Generates a set of reference screenshots from the backstopjs configuration.
gulp.task('test:reference', gulp.series('server:start', 'backstop:reference'));

// Tests the current visual elements against the reference screenshots.
gulp.task('test:visual', gulp.series('server:start', 'backstop:test'));

// Approves any changes to the screenshots and promotes them to the reference data set.
gulp.task('test:approve', () => backstop('approve', {config: backstopConfigLocation }));