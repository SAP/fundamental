---
title: Responsive Demo
keywords:
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/responsive-test.html
folder: layouts
summary:
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<hr/>

<!--
display-responsive-component options:
componnet = link to the component demo page
width = iframe width, defaults to 100% if not defined
height = iframe height, defaults to 500px if not defined
controld = 'true'  or 'false' will toggle display of responsive control buttons
display = 'mobile' will set the width to 320px and 'tablet' will set the width to 720. default to 100% if not defined

-->

## Mobile View
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell-demo-page.html"
    controls="false"
    display="mobile"
    cssclass="responsive-demo" %}

<br><br>

## Tablet View
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell-demo-page.html"
    controls="false"
    display="tablet"
    cssclass="responsive-demo" %}

<br><br>

### Full Width View
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell-demo-page.html"
    controls="true"
    cssclass="responsive-demo" %}

<br><br>

### Custom size
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell-demo-page.html"
    controls="true"
    width="500"
    height="400"
    cssclass="responsive-demo" %}
