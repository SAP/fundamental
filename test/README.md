# Simple visual testing

## Components
The component test framework loads only `core.scss` and individual component `.scss` files. **The HTML created here will be used on the documentation site.**

- Run `npm test`
- Go to [localhost:3030](http://localhost:3030)

### Get started
> Read about the `gulp create` task at [Contributing Components](https://github.com/SAP/fundamental/tree/develop/ops#contributing-components) which can automatically generate the required component files.

To get started add a new directory matching the component block with an `index.njk` file inside.

```
templates/
    card/
        index.njk
```

The index file should minimally contain the following template:

```
{% extends "layout.njk" %}
{% block content %}

    //HTML goes here

{% endblock %}
```

Then view component at `localhost:3030/BLOCK_NAME`, e.g., [localhost:3030/tile](http://localhost:3030/tile).

Additionally, create a macro and generate the HTML based on a data object.

## Pages

Full pages can be built in the `pages` directory, served by the file name key, e.g., `/pages/starter`.

Start at [localhost:3030/pages](http://localhost:3030/pages)

This area is to test compositions of components with layout and base UI elements.

👍

# How to test a feature branch
If you need to visually test a component, follow these simple steps.

### First time setting up?
If you have never setup the project, you need to do a few things first.

**Using macOS**
- Install node from https://nodejs.org/en/
- Install the [Github desktop application](https://desktop.github.com)
- Choose "Clone a repository" and input URL `https://github.com/SAP/fundamental.git`
- Change "Current Branch" to `develop`
- From the macOS menu bar, select "Repository > Open in Terminal"
- Type `npm install`

You now have all the dependencies you need to run the project.

### To test a feature branch
- In Github application, change "Current Branch" to the feature branch you are testing, e.g., `feature/999`
- From the macOS menu bar, select "Repository > Open in Terminal"
- Type `npm test`
- Go to [localhost:3030](http://localhost:3030) to find the components you are testing


# Automated visual testing

A visual testing framwork is available for automated testing.  The framework examines screenshots of individual components against expected screenshots, and the associated test will fail where visual differences occur.

## Pre-requisites

- Docker must be installed on the host machine.  Docker is used to ensure consistent screenshot comparisons when run locally on different platforms, and when run as part of a CI build.

## Executing automated tests

From the root of the project, execute `gulp test:visual`.  This will compare components that have screenshots defined against those in your current build.  After the build runs, a browser should launch detailing the test results.

## Updating automated tests

If you have visually changed a component and are happy that the changes are as desired, you need to run the following commands to update the reference screenshots:

- `gulp test:reference` will generate a new set of reference screenshots based on your current build.
- `gulp test:approve` will promote the new generated screenshots to be the reference data to be used.
- **Note:** You will need to commit the updated reference screenshots as part of your PR

## Adding new components to the automation framwework

To add new components, please add a new JS config file to the directory `test/visual-regression-tests/config/components/` with the new component details that youwould like to be tested.  

There is default config in the file `test/visual-regression-tests/config/backstopConfig.js` which will get merged with the config for the component you have added.  You can therefore override any of the default config by just adding an entry for your component.  For example, `"selectorExpansion": false` is set for the default scenario, but you can override this for your component if needed to select everything on the page explicitly.

In order for your component to be successfully merged into the backstop configuration, the following JSON attributes are mandatory:

 * `label` The label of the component to be used in the report.
 * `urlSuffix` The url suffix (to be appended to the running server) that represents the test page to be examined visually.
 * `selectors` The CSS selectors representing the component elements on the page to be visually compared.

The automation is using `BackstopJS` as the test framework.  For details on how to add new tests please see [https://github.com/garris/BackstopJS](https://github.com/garris/BackstopJS).

