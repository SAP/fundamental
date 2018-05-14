---
title: Developers
keywords: getting started
sidebar: left-navigation-sidebar
toc: false
permalink: /fundamentals/getting-started-developers.html
folder: fundamentals
summary: Fundamental UI is a coherent Design System accompanied by a collection of HTML/CSS Components. Consumable as a library that can be used independently of the Front-End Technology or Framework. It is used to build Modern User Experiences for Products with the SAP look and feel.

---

<hr>

## Current version ([GitHub](https://github.com/SAP/fundamental/releases))
{:.docs-header-h2}

````
{{site.library_version}}
````


## The Project Structure
{:.docs-header-h2}

* dist - distribution folder that contains combined and individual CSS files for all component
* docs - Static Documentation site for the library
* icons - Custom icon set that is used in some components
* ops - various configurations and gulp tasks for processing scss, building icons, generating documentation site
* scss - SCSS source files for all the components
* test - Testing framework for the components


## Project Requirements
{:.docs-header-h2}

This project packages the library for `npm` and generates the documentation as a static website.

We rely on several core technologies.

* Git (for downloading this repo)
* [Node](https://nodejs.org/) (minimum v6.4)
* [Gulp](https://gulpjs.com/) (for various ops tasks)
* SCSS (for CSS)

## Download and Installation the Library
{:.docs-header-h2}

### Quick start with CDN link
{:.docs-header-h3}

You can quickly include the latest minified file available via CDN link below

```
https://unpkg.com/fundamental-ui@{{site.library_version}}/dist/fundamental-ui.min.css
```

### NPM
{:.docs-header-h3}

Install the library.

> NOTE:  NPM Package only includes scss and dist folders.

````
npm install fundamental-ui --save
````
