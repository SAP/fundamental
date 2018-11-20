const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const waitForPort = require('wait-for-port');
const backstop = require('backstopjs');
const localAppPort = 3030;

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

// Generates a set of reference screenshots from the backstopjs configuration.
gulp.task('test:reference', [ 'server:start' ], () => { 
    const promise = backstop('reference');
    promise.catch(function (error) {
        // Reference screenshots failed to generate
        process.exit(-1);
    });        
    promise.then(function() {
        // Reference screenshots created.
        process.exit(0);
    });
});

const testVisual = (cb) => {
    console.log('here!!');
    const promise = backstop('test');
    promise.catch(function (error) {
        // Tests failed.
        process.exit(-1);
    });        
    promise.then(function() {
        // All Tests passed
        process.exit(0);
    });
}

// Tests the current visual elements against the reference screenshots.
gulp.task('test:visual', [ 'server:start' ], () => {
    const promise = backstop('test');
    promise.catch(function (error) {
        // Tests failed.
        process.exit(-1);
    });        
    promise.then(function() {
        // All Tests passed
        process.exit(0);
    });
});

// Approves any changes to the screenshots and promotes them to the reference data set.
gulp.task('test:approve', () => backstop('approve'));

module.exports = {
    testVisual: testVisual
};