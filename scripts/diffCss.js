#!/usr/bin/env node

let file = process.argv[2].replace(/dist2/gi, 'dist');

require("css-diff")({
    files: [
        process.argv[2],
        file
    ],
    omit: [ //optional ability to omit rule types
      "comment"
    ]
  }).then(function(diff) {
    console.log(diff.different)
  })