const yargs = require('yargs');

var environment = {
  production: !!(yargs.argv.production),
  development: !(yargs.argv.production),
  debug: !!(yargs.argv.debug),
}

module.exports = environment
