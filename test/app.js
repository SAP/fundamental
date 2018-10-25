const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const sass = require('node-sass');

const TEMPLATE_DIRECTORY = path.join(__dirname, 'templates');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
const SASS_DIRECTORY = path.join(__dirname, '..', 'scss');

const GLOBALS = {
    namespace: 'fd'
};
const config = {
    id: "fundamental"
}
// looks for html in templates folder, static resources in public
var env = nunjucks.configure([TEMPLATE_DIRECTORY,PUBLIC_DIRECTORY], {
    autoescape: false,
    cache: false,
    express: app,
    watch: true
});
// convert SASS to CSS from the lib source
env.addFilter('sass_to_css', function(sassFile="app.scss") {
    try {
        var scss_filename = `${SASS_DIRECTORY}/${sassFile}`;
        return sass.renderSync({
            file: scss_filename
        }).css.toString();
    } catch(err) {
        console.warn(`sassToCss: ${err.message}`);
    }
});
// convert an array to classes
// returns [ fd-element--mod ]
env.addFilter('modifier', function(array=[],element="",namespace="") {
    var _ns = namespace || GLOBALS.namespace;
    //is string
    if (typeof array === "string") {
        if(array === "") { return; }
        return ` ${_ns}-${element}--${array}`;
    }
    var mods = array.map((mod) => {
      if(mod === "") { return; }
         return ` ${_ns}-${element}--${mod}`;
    })
    //console.log(mods.join());
    return mods.join('') ;
});
// convert an array to classes
// returns [ fd-cls ]
env.addFilter('classes', function(array=[]) {
    if (!array) {
        return;
    }
    let _ns = `${GLOBALS.namespace}-`;
    //is string
    if (typeof array === "string") {
      if (array.startsWith("sap-icon") || array.startsWith("fd-")) {
        _ns = "";
      }
        return ` ${_ns}${array}`;
    }
    var classes = array.map((cls, index) => {
      if (cls.startsWith("sap-icon") || cls.startsWith("fd-")) {
        _ns = "";
      }
         return ` ${_ns}${cls}`;
    })
    //console.log(mods.join());
    return classes.join('') ;
});
// convert an object to classes
// returns [ is-key ]
env.addFilter('state', function(obj=[]) {
    var classes = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!!obj[key]) {
            classes.push(` is-${key}`);
        }
      }
    }
    return classes.join('') ;
});
// convert an object to classes
// returns [ aria-key="true", role="" ]
env.addFilter('aria', function(obj=[]) {
    var attrs = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === "role") {
                attrs.push(` role="${obj[key]}"`);
            } else {
                attrs.push(` aria-${key}="${obj[key]}"`);
            }
        }
    }
    return attrs.join('') ;
});
// random_number
// returns 123
env.addFilter('random_number', function(length=3) {
    var randomFixedInteger = function (length) {
        return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
    }
    return randomFixedInteger(length);
});
// random_string
// returns "FAhPm"
env.addFilter('random_string', function(length=5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
});
// pluck
// returns array from an object
// obj | pluck("key")
env.addFilter('pluck', function(obj={},key="") {
 var result = obj.map(a => a[key]);

   return result;
});
// filter_array
// returns obj
// obj | pluck("key")
env.addFilter('filter_array', function(array={},key="",value="") {
 var result = array.filter(function(obj) {
   return obj[key] === value;
 })
   return result;
});


app.set('views', TEMPLATE_DIRECTORY);
app.set('view engine', 'njk');

app.use(router);
app.use('/static', express.static(path.join(__dirname, 'resources')));

//load font files
router.get('/(*/)?FundamentalIcons:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `scss/icons/FundamentalIcons${req.params.key}`));
});
router.get('/(*/)?SAP-icons:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `scss/icons/SAP-icons${req.params.key}`));
});
router.get('/(*/)?72/72-:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `scss/fonts/72/72-${req.params.key}`));
});

router.all('/', function (req, res, next) {
  //console.log('request initiated!');
  next();
});

router.get('/', function (req, res) {
  res.render('index', GLOBALS);
});

function getStarterData() {
    var data = {
        "toolbar": require(`./templates/toolbar/data.json`),
        "tree": require(`./templates/tree/data.json`),
        "table": require(`./templates/table/data.json`),
        "tabs": require(`./templates/tabs/data.json`),
        "pagination": require(`./templates/pagination/data.json`),
        "side_nav": require(`./templates/side-nav/data.json`),
        "breadcrumb": require(`./templates/breadcrumb/data.json`),
        "localization_editor": require(`./templates/localization-editor/data.json`),
        "image": require(`./templates/image/data.json`),
        "product_switcher": require(`./templates/product-switcher/data.json`)
    }
    return data;
}

router.get('/:key', (req, res) => {
    var key = req.params.key;
    var data = {};
    try {
        data = require(`./templates/${key}/data.json`);
    } catch (e) {

    } finally {

    }
    console.log(`requested http://localhost:3030/${key}`);
    res.render(`${key}/index`, Object.assign(GLOBALS, { id: key, component: getStarterData(), data: data, libs: getLibs(req.query.lib) }));
});


router.get('/pages/:key', (req, res) => {
    var key = req.params.key;
    console.log(`requested http://localhost:3030/pages/${key}`);
    res.render(`pages/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});
router.get('/pages/app/:key', (req, res) => {
    var key = req.params.key;
    console.log(`requested http://localhost:3030/pages/app/${key}`);
    res.render(`pages/app/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});
router.get('/pages/floorplans/:key', (req, res) => {
    var key = req.params.key;
    console.log(`requested http://localhost:3030/pages/floorplans/${key}`);
    res.render(`pages/floorplans/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});


app.listen(3030);
console.log('listening at http://localhost:3030')
module.exports = app;

function getLibs(libQuery) {
    var libs = {
        b3: false,
        b4: false,
        md: false,
        tn: false
    }
    var libsChecked = libQuery;
    if (libsChecked) {
        if (typeof libsChecked == 'string') {
            libsChecked = [libsChecked];
        }
        for (var i = 0; i < libsChecked.length; i++) {
            switch (libsChecked[i]) {
                case "b3":
                    libs.b3 = true;
                    break;
                case "b4":
                    libs.b4 = true;
                    break;
                case "md":
                    libs.md = true;
                    break;
                case "tn":
                    libs.tn = true;
                    break;
                default:
            }
        }
    }
    return libs;
}
