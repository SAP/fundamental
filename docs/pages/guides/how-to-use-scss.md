---
title: How to use Fundamental UI SCSS with Angular
keywords: how to use scss
sidebar: left-navigation-sidebar
toc: false
permalink: how-to-use-scss.html
folder: guides
summary: The following step-by-step guide will covers how to install Fundamental UI in your angular project, import SCSS in your workflow and explain some built-in functions.
---

## Table of contents
{:.docs-header-h2}
1. [Prerequisites and Requirements](#prerequisites-and-requirements)
1. [Configuring Angular Project to use SCSS](#configuring-angular-project-to-use-scss)
1. [Installing Fundamental UI via NPM](#installing-fundamental-ui-via-npm)
1. [Configuring and Importing SCSS source](#configuring-and-importing-scss-source)
1. [Selective Imports](#selective-imports)
1. [Core Functions and Mixins](#core-functions-and-mixins)


## Prerequisites and Requirements
{:.docs-header-h2}

- Familiarity using terminal or command prompt
- This guides assumes that the initial setup was done using [Angular 4](https://angular.io/){:target="_blank"} or higher and initial setup was doing using [Angular CLI](https://cli.angular.io/){:target="_blank"}
- [NPM](https://www.npmjs.com/){:target="_blank"} is installed globally


## Configuring Angular Project to use SCSS
{:.docs-header-h2}

Angular CLI does not configure the project to process SCSS files by default. Instead it is set to a CSS file located at the root of `src` folder. We recommend that you use keep all your SCSS files in one place under `src/scss/`.

To set the angular project to use SCSS:

1. Type `ng set defaults.styleExt scss` in command prompt or terminal at project root.

2. Open `.angular-cli.json` located at the project root and change the styles configuration to `"styles": [ "scss/app.scss"]`

3. Verify that the `styleExt` is set to `scss`

4. Create a folder named `scss` under the `src` folder and a also create the main SCSS file named `app.scss`

5. Remove the src/styles.css file. It will not be used.

The Basic SCSS configuration is now complete.


## Installing Fundamental UI via NPM
{:.docs-header-h2}

Fundamental UI is currently available as an [NPM package](https://www.npmjs.com/package/fundamental-ui){:target="_blank"} and a compiled and minified [CDN file](https://unpkg.com/fundamental-ui@1.0.0-beta-2/dist/fundamental-ui.min.css){:target="_blank"}. The following steps will cover how to install it via NPM.

1. Type `npm install fundamental-ui --save-dev`. This will install the package as a dev dependency.
2. Verify the installation was successful by typing `npm list fundamental-ui`

Fundamental UI installation is now complete

## Configuring and Importing SCSS source
{:.docs-header-h2}

1. Open `scss/app.scss` file
2. Add the following line of code to define the icons path: <br><br> `$fd-icons-path: "~fundamental-ui/scss/icons/";`
3. Add the following line of code to import SCSS source file: <br><br> `@import "~fundamental-ui/scss/all.scss";`

Importing Fundamental UI SCSS is now complete

> **Note:** In order to render the icons correctly, you need to define the `$fd-icons-path` variable.

At this point, the contents of your `scss/app.scss` should look like this:

{% highlight css %}

$fd-icons-path: "~fundamental-ui/scss/icons/";
@import "~fundamental-ui/scss/all.scss";

{% endhighlight %}

You can continue to build out your SCSS workflow based on your project needs.

## Selective Imports
{:.docs-header-h2}

Fundamental UI is divided into several functional pieces. You may choose to import key features selectively to reduce the SCSS overhead in your project.

Here is an overview of the SCSS structure -

{% highlight css %}
scss/
 |- components/
 |- core/
 |- helpers/
 |- icons/
 |- layout/
 |- theme/
 all.scss
 components.scss
 core.scss
 helpers.scss
 icons.scss
 layout.scss
{% endhighlight %}


- `all.scss`: Includes all components.
- `components.scss`: SCSS source for each components. The components are decoupled  with little or no dependency on other components.
- `core.scss`: The main purpose of core is elements and forms. It's like the reset and foundation.
- `helpers.scss`: Includes various helper functions.
- `icons.scss`: Fundamental UI's custom icon library.
- '/theme/fundamental.scss': Includes fonts.
- `layout.scss`: App level layout components such as top Overview of Core features bar, side nav, containers, panels, etc.

You can choose to selectively import parts of the library that best fits the need of your project. Please note that components, icons, layout and helpers have a dependency on `settings.scss`. Therefore, `settings.scss` should always be included in case if you are not importing `all.scss`. For fonts, make sure you are importing `theme/fundamental.scss`

For selective import your `app.scss` content should look like this:

{% highlight css %}
$fd-icons-path: "~fundamental-ui/scss/icons/";
@import "~fundamental-ui/scss/theme/fundamental";
@import "~fundamental-ui/scss/core";
@import "~fundamental-ui/scss/{feature}";

{% endhighlight %}

### Angular components
{:.docs-header-h3}

If you are writing angular components using Fundamental UI toolkit, you will need to import the following in your component's scss file:

{% highlight css %}
@import "~fundamental-ui/scss/core/settings";
@import "~fundamental-ui/scss/core/mixins";
@import "~fundamental-ui/scss/core/functions";
{% endhighlight %}


## Core Functions and Mixins
{:.docs-header-h2}

Fundamental UI comes with some very useful built-in functions and mixins to help maintain consistency and quality of your SCSS source files. We recommend that you utilize these functions instead of hard coding colors, spacing, fonts, etc. in your code to keep CSS low specificity. Utilizing functions also helps in retaining the integrity of the theming options and makes it easy to switch between different themes such as a high-contrast theme for accessibility or a brand specific theme.

> **Note:** In order to use the functions and mixins, please ensure that you are importing the functions SCSS files <br>
> `@import "~fundamental-ui/scss/core/functions";` <br>
> `@import "~fundamental-ui/scss/core/mixins";`

### Color Function
{:.docs-header-h3}

If you have a need to apply a color to any of your scss/css class, you can use the built-in color function - <br> `fd-color(group, shade)`

{% highlight css %}
.foo {
  background-color: fd-color(neutral, 3); /* renders #ccdaeb */
  color: fd-color(text, 1); /* renders #21262c */
}
{% endhighlight %}

You can refer to the [colors page](colors.html){:target="_blank"} for the complete list of the available color options.

### Spacing Function
{:.docs-header-h3}

Spacing function can be utilized for padding, margins and other positioning needs - <br>
`fd-space(value)`

{% highlight css %}
.foo {
  padding: fd-space(xs); /* renders 8px */
  margin-bottom: fd-space(reg); /* renders 20px */
}
{% endhighlight %}

The following spacing options are available -

{:.spacing-function-table}
| Option        | Value           | Rendered Value |
| ------------- | --------------- | -------------- |
| `base`        | `fd-space()`    |  4px           |
| `xs`          | `fd-space(xs)`  |  8px           |
| `s`           | `fd-space(s)`   |  12px          |
| `reg`         | `fd-space(reg)` |  20px          |
| `m`           | `fd-space(m)`   |  40px          |
| `l`           | `fd-space(l)`   |  100px         |
| `xl`          | `fd-space(xl)`  |  148px         |


### Type Mixin
{:.docs-header-h3}

You can utilize the type mixin to render size, line height, face, weight and transformation - <br> `fd-type(size, font, weight, transform)`

{% highlight css %}
.foo {
    @include fd-type(3, header, med, uppercase); /* renders the css below */
    /* font-size: 1.125rem; */
    /* line-height: 1.33334; */
    /* font-family: sans-serif; */
    /* font-weight: 500; */
    /* text-transform: uppercase; */
}
{% endhighlight %}

{:.spacing-function-table}

| Option      | Value                                          |
| ----------- |----------------------------------------------- |
| `size`      | `-3`, `-2`, `-1`, `0`, `1`, `2`, `3`, `4`, `5` |
| `font`      | `body`, `header`, `code`                       |
| `weight`    | `reg`, `med`, `semi`                           |
| `transform` | `none`, `uppercase`, `lowercase`               |

