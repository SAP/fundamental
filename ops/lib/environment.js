const yargs = require('yargs');

var environment = {
  production: !!(yargs.argv.production)
}

module.exports = environment
