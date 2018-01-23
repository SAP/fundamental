const path = require('path');
const requireDir = require('require-dir')

// HELPERS
// get key from file name, e.g. index.html returns index
var getPageKey = (file) => {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}
var getPageDirectory = (file) => {
  var filePath = path.dirname(file.path);
  return filePath.match(/\/([^\/]+)\/?$/)[1];
 }


// var setDocsAppData = () => {
//   try {
//     let app = require('../../docs/data/app.json');
//     return app;
//   } catch(err) {
//     console.log(err.message);
//   }
//   return {};
// }


// let app = setDocsAppData();

/*
reads and outputs the app.json file
    if called from a gulp task, will use the HTML file name as a key
    to set a selected property for each nav item
*/
exports.getDocsAppData = (file) => {
    return app;
}

// reads and outputs the appropriate json file based on file name, e.g., index uses index.json
exports.getDocsPageData = (file) => {
    try {
        var key = getPageKey(file);
        let page = require(`../../docs/data/${key}.json`);
        page.id = key;
        return page;
    } catch(err) {
        console.log(err.message);
    }
    return {};
};

// reads and assembled all JSON files in src/data/*
exports.getDocsComponentData = () => {
    try {
        let components = requireDir(`../../src/data/`);
        return components;
    } catch(err) {
        console.log(err.message);
    }
    return {};
};




/// individual code snippets
exports.getSrcComponentData = function(file) {
    try {
        var key = getPageKey(file);
        var component = require(`../../src/data/${key}.json`);
        return component;
    } catch(err) {
        console.log(err.message);
    }
    return {};
};
