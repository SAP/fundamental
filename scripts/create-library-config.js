#!/usr/bin/env node

var loadJsonFile = require('load-json-file');
var yaml = require('write-yaml');

const packageJson = loadJsonFile.sync('package.json');
const data = {
    'library_version': packageJson.version
};

yaml.sync('docs/_config-library.yml', data);
