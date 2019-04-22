#!/usr/bin/env node

const ip = require('ip');
const fs = require('fs');
const backstopCIConfigLocation = 'test/visual-regression-tests/config/backstopConfigCI.json';


const generateCIConfig = () => {
    const localIp = ip.address();
    const ciConfig = { ip: localIp };
    fs.writeFileSync(backstopCIConfigLocation, JSON.stringify(ciConfig));
    console.log('Updated CI config with IP address ', localIp);
};

generateCIConfig();