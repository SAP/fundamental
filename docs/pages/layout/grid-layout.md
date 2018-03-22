---
title: Grid Layout
keywords: layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layout/grid-layout.html
folder: guides
summary:
---

The gird layout consists of two main components. `container` and `cols`.

## Grid Structure
{: .docs-header-h2}

* `fd-container`: This is the wrapper for the gird columns. Some modifiers are provided to give you better control over your layout. The default width for this container is 1290px.
	* `fd-col--[num]`: Column container with support from 1 to 12.


	* `fd-container--fluid`: Modifier for fluid layouts that will exdent the width to 100% of it's parent container.
	* `fd-container--centered`: Center aligned

### Default Container
{: .docs-header-h3}

Default container has a max-width of `1290px`

{% capture container %}
<div class="fd-container">
 fd-container
</div>
{% endcapture %}
{% include display-example.html component=container class="container" %}

### Fluid Container
{: .docs-header-h3}

`.fd-container--fluid` modifier for fluid layouts with 100% of parent containers

{% capture container-fluid %}
<div class="fd-container fd-container--fluid">
 fd-container--fluid
</div>
{% endcapture %}
{% include display-example.html component=container-fluid class="container" %}

### Centered Container
{: .docs-header-h3}

`.fd-container--centered` modifier for aligning the wrapper in the of the parent container.

{% capture container-centered %}
<div class="fd-container fd-container--centered">
 fd-container--centered
</div>
{% endcapture %}
{% include display-example.html component=container-centered class="container" %}

### Flex Container
{: .docs-header-h3}

`.fd-container--flex` modifier for using flexbox option with the columns

{% capture container-flex %}
<div class="fd-container fd-container--flex">
 fd-container--flex
</div>
{% endcapture %}
{% include display-example.html component=container-flex class="container" %}

## Columns
{: .docs-header-h2}

### 12 columns

`.fd-col--1`

{% capture container-flex %}
<div class="fd-container fd-container--fluid">
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
    <div class="fd-col--1"></div>
</div>
{% endcapture %}
{% include display-example.html component=container-flex class="container" %}
