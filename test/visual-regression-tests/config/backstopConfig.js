const fs = require('fs');
const mergeJSON  = require ('merge-json');  
const ip = require('ip');
const backstopComponentConfigLocation = 'test/visual-regression-tests/config/components';


let origin = process.env.TRAVIS === true ? ip.address() : 'host.docker.internal';

console.log('Using URL origin ', origin);

const scenarios = [];

// The default scenario configuration. This can be overwritten in each of the config files as needed.
const defaultScenario = {
  "urlPrefix": "http://" + origin + ":3030",
  "referenceUrl": "",
  "readyEvent": "",
  "readySelector": "",
  "delay": 100,
  "hideSelectors": [],
  "removeSelectors": [],
  "hoverSelector": "",
  "clickSelector": "",
  "postInteractionWait": 0,
  "selectorExpansion": false,
  "expect": 0,
  "misMatchThreshold" : 0,
  "requireSameDimensions": true  
}

// Specific visual test component configurations.  Read the associated component configuration directory and merge the json.
fs.readdirSync(backstopComponentConfigLocation).forEach(function(configFile) {
  const scenario = mergeJSON.merge(defaultScenario, require('./components/' + configFile));
  // Ensure each config file has a urlSuffix, label and selectors defined.
  if (!scenario.urlSuffix || !scenario.label || !scenario.selectors) {
    throw "Error with backstop config file '" + configFile + "', must include urlSuffix, label and selectors";
  }
  scenario.url = scenario.urlPrefix + scenario.urlSuffix;
  scenarios.push(scenario);
});

console.log('Found ' + scenarios.length + ' Visual test scenarios to execute');

module.exports = {
  "id": "visual_regression_fundamental",
  "viewports": [
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "test/visual-regression-tests/resources/reference_images",
    "bitmaps_test": "test/visual-regression-tests/backstop_data/bitmaps_test",
    "engine_scripts": "test/visual-regression-tests/resources/engine_scripts",
    "html_report": "test/visual-regression-tests/backstop_data/html_report",
    "ci_report": "test/visual-regression-tests/backstop_data/ci_report"
  },
  "report": ["CI"],
  "engine": "chromy",
  "engineOptions": {
    "chromeFlags": [
      "--disable-dev-shm-usage"
    ]
  },
  "asyncCaptureLimit": 1,
  "asyncCompareLimit": 1,
  "debug": false,
  "debugWindow": false
}