# Process
This directory is the project control center and holds all `gulp` tasks and other scripts to build the documentation, generate icons, package the library, etc.

The project is organized around two primary outputs:
1. The Techne package available for `node`
2. The Techne documentation website

Each output has specific needs that involve coordinating multiple tasks, e.g., optimizing SVGs, compiling SASS, copying resources, etc.

Each output has a `build` task that chains the tasks together. Individual tasks should be small and focus on a single concern. It should be very easy to look at any task and immediately understand the input and the output.

> It is VERY important that tasks be separated. Do NOT attempt to do everything in one task.

## The package
* Inputs: `scss`,
* Outputs: `dist` (and `tmp`)

### Generate the package
`gulp build:dist --production` builds to `dist`

### For local development
`npm run build` or `gulp build:dist` builds to `tmp`

> Local development has no dependency on `dist`. It only needs to be built for releases and deployments.

### Individual tasks
* `gulp pkg-clean` removes the contents of `dist` (production mode) or `tmp`
* `gulp pkg-css` compiles SASS for the full library, prefixes and cleans (production mode), includes sourcemaps (development mode)
* `gulp pkg-css-minify` minifies compiled CSS (for production mode only)
* `gulp pkg-css-components` compiles, minifies, and prefixes individual component files (for production mode only)


## The docs
* Inputs: `docs`
* Outputs: `docs/_site`

The documentation uses Jekyll to generate a static site. Dependencies on packaging tasks should be very clearly defined in the main build task, i.e., build the package before including it into the website. Do not mix packaging tasks into the unrelated docs tasks.

### Generate the documentation
`gulp`

### Individual tasks
* `gulp docs-resources` optimizes and outputs svgs to `docs/_site/images` (should handle images as well)
* `docs-css`
* `docs-icons`
* `docs-styleguide`
* `docs-build`


## The dev
Local development requires a server and includes watch tasks which auto-compiles files and refreshes the browser.

### Start the server
`npm start` or `gulp`

> The default Gulp task is the "build" task for local development

### Individual tasks
* `gulp dev-serve` initializes BrowserSync and watches `www` for changes
* `gulp dev-watch` kicks off compilation tasks when `src` files change


# Contributing components
Each component requires several files. A script is available to generate the test files.

`gulp create --component COMPONENT-ID`

## The files
Assuming "foo" is the component, the following are created:
* `src/styles/foo.scss` is a SASS template with an example BEM structure, includes sample elements and states
* `src/styles/components.scss` is appended with `@import "components/foo.scss"`
* `test/templates/foo/data.json` defines properties, modifiers, states and aria options (i.e., a primitive schema) for the component
* `test/templates/foo/component.njk` is Nunjucks macro with a basic constructor
* `test/templates/foo/index.njk` imports above macro and data file to output the base component

> Read more about the `test` framework and [Simple visual testing](https://github.com/SAP/techne/blob/v2.0/test/README.md#simple-visual-testing)

Run `npm test`. Navigate to [`localhost:3030/foo`](localhost:3030/foo) to see the page.

> Note: The server must be restarted if `data.json` changes.
