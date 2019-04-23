#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');

const componentId = yargs.argv.component;

const paths = {
	src: './test/patterns',
    dest: {
        lib: './scss',
        test: './test'
    }
}

const capitalize = (str) => {
    return str.toLowerCase()
     .split(' ')
     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
     .join(' ');
 }

const underscorize = (str) => {
    return str.replace(/[A-Z]/g, (char, index) => {
      return (index !== 0 ? '_' : '') + char.toLowerCase();
    });
}

const namerize = (str) => capitalize(str.replace(/[_-]/g, ' '));

const camelize = (str) => {
    let words = namerize(str).split(' ');
    words[0] = words[0].toLowerCase();
    return words.join('');
}

if (!componentId) {
    return;
}
const componentMethod = underscorize(camelize(componentId));
const componentName = namerize(componentId);
const templatePath = `${paths.dest.test}/templates/${componentId}`;


const replace = (file, destination) => { 
    fs.rename(file, destination, function (err) {
        if (err) throw err;
        fs.readFile(destination, 'utf8', function (err,data) {
            if (err) throw err;
            let result = data.replace(/__COMPONENT_ID__/g, componentId);
            result = data.replace(/__COMPONENT_NAME__/g, componentName);

            fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err);
            });
        });
    });
}

//data file
gulp.src(`${paths.src}/test-data.json`)
    .pipe(rename(`data.json`))
    .pipe(replace('__COMPONENT_ID__',componentId))
    .pipe(replace('__COMPONENT_NAME__',componentName))
    .pipe(gulp.dest(templatePath));
//tets page
gulp.src(`${paths.src}/test-index.njk`)
    .pipe(rename(`index.njk`))
    .pipe(replace('__COMPONENT_ID__',componentId))
    .pipe(replace('__COMPONENT_METHOD__',componentMethod))
    .pipe(gulp.dest(templatePath));
//component macro
gulp.src(`${paths.src}/test-component.njk`)
    .pipe(rename(`component.njk`))
    .pipe(replace('__COMPONENT_ID__',componentId))
    .pipe(replace('__COMPONENT_METHOD__',componentMethod))
    .pipe(gulp.dest(templatePath));

//scss
gulp.src(`${paths.src}/src-component.scss`)
    .pipe(rename(`${componentId}.scss`))
    .pipe(replace('__COMPONENT_ID__',componentId))
    .pipe(gulp.dest(`${paths.dest.lib}/components`));

gulp.src(`${paths.dest.lib}/components.scss`)
    .pipe(footer(`@import "components/${componentId}";\n`))
    .pipe(gulp.dest(`${paths.dest.lib}`));
