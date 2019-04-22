const gulp = require('gulp');
const ip = require('ip');
const fs = require('fs');

const backstopCIConfigLocation = 'test/visual-regression-tests/config/backstopConfigCI.json';

const generateCIConfig = (cb) => {
    const localIp = ip.address();
    const ciConfig = { ip: localIp };
    fs.writeFileSync(backstopCIConfigLocation, JSON.stringify(ciConfig));
    console.log('Updated CI config with IP address ', localIp);
    cb();
};


// Generate a CI config file with the IP address of the current machine.
// Linux Docker containers cannot use host.docker.internal to reference the parent IP address 
// so we need to explicitly add it to the config.
gulp.task('test:generateCIConfig', generateCIConfig);
