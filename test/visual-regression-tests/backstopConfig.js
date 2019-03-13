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
      "delay": 1000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [
        "button.fd-button",
        "button.fd-button.sap-icon--cart",
        "button.fd-button.sap-icon--attachment",
        "button.fd-button[aria-selected=true]",
        "button.fd-button.is-disabled",
        "button.fd-button--compact",
        "button.fd-button--compact[aria-selected=true]",
        "button.fd-button--compact.is-disabled",
        "button.fd-button--emphasized",
        "button.fd-button--emphasized[aria-selected=true]",
        "button.fd-button--emphasized.is-disabled",
        "button.fd-button--emphasized.fd-button--compact",
        "button.fd-button--emphasized.fd-button--compact[aria-selected=true]",
        "button.fd-button--emphasized.fd-button--compact.is-disabled",
        "button.fd-button--light",
        "button.fd-button--light[aria-selected=true]",
        "button.fd-button--light.is-disabled",
        "button.fd-button--light.fd-button--compact",
        "button.fd-button--light.fd-button--compact[aria-selected=true]",
        "button.fd-button--light.fd-button--compact.is-disabled",
        "button.fd-button--standard",
        "button.fd-button--positive",
        "button.fd-button--medium",
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
      "delay": 1000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [
        "div.fd-alert",
        "div.fd-alert.fd-alert--information",
        "div.fd-alert.fd-alert--success",
        "div.fd-alert.fd-alert--warning",
        "div.fd-alert.fd-alert--error",
        "div.fd-alert.fd-alert--dismissible",
        "div.fd-alert.fd-alert--information.fd-alert--dismissible",
        "div.fd-alert.fd-alert--success.fd-alert--dismissible",
        "div.fd-alert.fd-alert--warning.fd-alert--dismissible",
        "div.fd-alert.fd-alert--error.fd-alert--dismissible",
        "div.fd-alert.fd-alert--dismissible[dir=rtl]",
        "div.fd-alert.fd-alert--success[dir=rtl]",
        "div.fd-alert.fd-alert--warning.fd-alert--dismissible[dir=rtl]",
        "div.fd-alert.fd-alert--error.fd-alert--dismissible[dir=rtl]"
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
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 1,
  "asyncCompareLimit": 1,
  "debug": false,
  "debugWindow": false
}
