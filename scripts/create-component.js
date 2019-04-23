#!/usr/bin/env node

const yargs = require('yargs');
const componentId = yargs.argv.component;

const paths = {
	src: './ops/misc',
    dest: {
        lib: './scss',
        test: './test'
    }
}

const _capitalizeEachWord = (str) => {
    var index, word, words, _i, _len;
    words = str.split(" ");
    for (index = _i = 0, _len = words.length; _i < _len; index = ++_i) {
      word = words[index].charAt(0).toUpperCase();
      words[index] = word + words[index].substr(1);
    }
    return words.join(" ");
}

const underscorize = (str) => {
    return str.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '_' : '') + char.toLowerCase();
    });
}

const namerize = (str) => {
    var name = str.replace(/[_-]/g, " ");
    return _capitalizeEachWord(name);
}

const camelize = (str) => {
    var words;
    words = _namerize(str).split(" ");
    words[0] = words[0].toLowerCase();
    return words.join("");
}



if (!componentId) {
    return;
}
const componentMethod = underscorize(camelize(componentId));
const componentName = namerize(componentId);
const templatePath = `${paths.dest.test}/templates/${componentId}`;

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
