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
component - link to the component demo page
width - iframe width, defaults to 100% if not defined
height - iframe height, defaults to 600px if not defined
controls - 'true'  or 'false' will toggle display of responsive control buttons
display - 'mobile' will set the width to 414px and height to 736px
          'tablet' will set the width to 720 and height to 1024px.
-->

## Mobile View
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell.html"
    controls="false"
    display="mobile"
    cssclass="responsive-demo" %}

<br><br>

## Tablet View
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell.html"
    controls="false"
    display="tablet"
    cssclass="responsive-demo" %}

<br><br>

### Full Width View with controls
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell.html"
    controls="true"
    cssclass="responsive-demo" %}

<br><br>

### Custom size with controls
{: .docs-header-h2}
{% include display-responsive-component.html
    component="/demo-pages/shell.html"
    controls="true"
    width="500"
    height="400"
    cssclass="responsive-demo" %}
