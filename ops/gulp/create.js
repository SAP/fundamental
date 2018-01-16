const gulp = require('gulp')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const footer = require('gulp-footer')
const yargs = require('yargs');
const util = require('../lib/util');

const fs = require('fs');

const componentId = yargs.argv.component;
const pageId = yargs.argv.page;

const paths = {
	src: './ops/misc',
    dest: {
        lib: './scss',
        test: './test'
    }
}

const createTask = (cb) => {

    if (!componentId) {
        return;
    }
    let componentMethod = util.underscorize(util.camelize(componentId));
    let componentName = util.namerize(componentId);

    let templatePath = `${paths.dest.test}/templates/${componentId}`;
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
}

gulp.task('create', createTask);
module.exports = createTask
