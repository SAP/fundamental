---
title: How to use Fundamental UI SCSS with Angular
keywords: how to use scss
sidebar: left-navigation-sidebar
toc: false
permalink: how-to-use-scss.html
folder: guides
summary: The following step-by-step guide will covers how to install Fundamental UI in your angular project, import SCSS in your workflow and explain some built-in functions.
---

## Table to contents
- [Perquisites and Requirements](#perquisites-and-requirements)
- [Configuring Angular Project to use SCSS](#configuring-angular-project-to-use-scss)
- [Installing Fundamental UI via NPM](#installing-fundamental-ui-via-npm)
- [Configuring and Importing SCSS source](#configuring-and-importing-scss-source)
- [Selective Imports](#selective-imports)
- [Core Functions](#core-functions)

<br>

## Perquisites and Requirements

- Fimalarity using terminal or command prompt
- This guides assumes that the project is using [Angular 2](https://angular.io/){:target="_blank"} or higher and initial setup was doing using [Angular CLI](https://cli.angular.io/){:target="_blank"}
- [NPM](https://www.npmjs.com/){:target="_blank"} is installed globally



<br>

## Configuring Angular Project to use SCSS
Angular CLI does not configure the project to process SCSS files by default. Instead it is set to a CSS file located at the root of `src` folder. We recommend that you use keep all your SCSS files in one place under `src/scss/`.

To set the angular project to use SCSS:

1. Type `ng set defaults.styleExt scss` in command prompt or terminal at project root.

2. Open `.angular-cli.json` located at the project root and change the styles configuration to `"styles": [ "scss/app.scss"]`

3. Verify that the `styleExt` is set to `scss`

4. Create a folder named `scss` under the `src` folder and a also create the main SCSS file named `app.scss`

5. The Basic SCSS configuration is now complete.

<br>

## Installing Fundamental UI via NPM

Fundamental UI is currently available as an [NPM package](https://www.npmjs.com/package/fundamental-ui){:target="_blank"} and a compiled and minified [CDN file](https://unpkg.com/fundamental-ui@1.0.0-beta-2/dist/fundamental-ui.min.css){:target="_blank"}. The following steps will cover how to install it via NPM.

1. Type `npm install fundamental-ui --save-dev`. This will install the package as a dev dependency.
2. Verify the installation was successful by typing `npm list fundamental-ui`
3. Fundamental UI installation is now complete

<br>

## Configuring and Importing SCSS source

1. Open `scss/app.scss` file
2. Add the following line of code to define the icons path - <br><br> `$fd-icons-path: "~fundamental-ui/scss/icons/";`
3. Add the following linke of code to tmport scss source file - <br><br> `@import "~fundamental-ui/scss/all.scss";`
4. Importing Fundamental UI SCSS is now complete

> **Note:** In order to render the icons correctly, you need to define the `$fd-icons-path` variable.

At this point, the contents of your `scss/app.scss` should look like this -

{% highlight css %}

$fd-icons-path: "~fundamental-ui/scss/icons/";
@import "~fundamental-ui/scss/all.scss";

{% endhighlight %}

You can continue to build out your SCSS workflow based on your project needs.

<br>

## Selective Imports
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

- all.scss - includes everything
- components.scss - SCSS source for each each components. The components are decoupled  with little or no dependency on other components.
- core.scss - Gives you core functionality such as access to settings, functions and mix-ins.
- helpers.scss - includes various helper functions
- icons.scss - Fundamental UI's custom icon library
- layout.scss - App level layout components such as top Overview of Core features bar, side nav, containers, panels, etc.

You can choose to selectively import parts of the library that best fits the need of your project. Please note that components, icons, layout and helpers have a dependency on `core.scss`. Therefore, `core.scss` should always be included in case if you are not importing `all.scss`

<br>

## Core Functions

Fundamental UI comes with some very useful built-in functions to help maintain consistency and quality of your SCSS source. We recommend that you utilize these functions instead of hard coding colors, spacing, fonts, etc. in your code to keep CSS low specificity. Utilizing functions also helps in retaining the integrity of the theming options and makes it easy to switch between different themes such as a high-contrast theme for accessibility or a brand specific theme.

<br>

#### Color Function

If you have a need to apply a color to any of your scss/css class, you can use the built-in color function - <br> `fd-color(color-group, color-num)`.

{% highlight css %}
.foo{
  background-color: fd-color(neutral, 3); /* renders #ccdaeb */
  color: fd-color(text, 1); /* renders #21262c */
}
{% endhighlight %}

You can refer to the [colors page](colors.html){:target="_blank"} for the complete list of the available color options.

<br>

#### Spacing Function

Spacing function can be utilized for padding, margins and other positioning needs - <br>
`tn-space(value)`

{% highlight css %}
.foo{
  padding: tn-space();
  margin-bottom: tn-space();
}
{% endhighlight %}

the following spacing options are avialable -
base: $fd-spacing--base,    //4
xs: $fd-spacing--base * 2,  //8
s: $fd-spacing--base * 3,   //12
reg: $fd-spacing--base * 5, //20
m: $fd-spacing--base * 10,  //40
l: $fd-spacing--base * 25,  //100
xl: $fd-spacing--base * 37, //148

#### Type Function
