const fs = require('fs');
const backstopCIConfigLocation = 'test/visual-regression-tests/backstopConfigCI.json';

let origin = 'host.docker.internal';

// Check if there has been an IP address provided in the CI config JSON
if (fs.existsSync(backstopCIConfigLocation)) {
  const ciConfig = JSON.parse(fs.readFileSync(backstopCIConfigLocation));
  if (ciConfig.ip) {
    origin = ciConfig.ip;
  }
}
console.log('Using URL origin ', origin);

module.exports = {
  "id": "visual_regression_fundamental",
  "viewports": [
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "scenarios": [
    {
      "label": "Button",
      "url": "http://" + origin + ":3030/button",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [
        "button.fd-button",
        "button.fd-button--action-bar",
        "button.fd-button--secondary",
        "button.fd-button--toolbar",
        "button.fd-button--positive",
        "button.fd-button--negative"
      ],
      "selectorExpansion": false,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Alerts",
      "url": "http://" + origin + ":3030/alert",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [
        "div.fd-alert"
      ],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }  
  ],
  "paths": {
    "bitmaps_reference": "test/visual-regression-tests/resources/reference_images",
    "bitmaps_test": "test/visual-regression-tests/backstop_data/bitmaps_test",
    "engine_scripts": "test/visual-regression-tests/resources/engine_scripts",
    "html_report": "test/visual-regression-tests/backstop_data/html_report",
    "ci_report": "test/visual-regression-tests/backstop_data/ci_report"
  },
  "report": ["CI"],
  "engine": "chrome-headless",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 1,
  "asyncCompareLimit": 1,
  "debug": false,
  "debugWindow": false
}
