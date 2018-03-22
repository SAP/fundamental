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
	* `fd-col--[num]`: Colums with support for up to 12.


	* `fd-container--fluid`: modifier for fluid layouts that will exdent the width to 100% of it's parent container.
	* `fd-container--centered`: Center aligned

{% capture container %}
<div class="fd-container">
...
</div>
{% endcapture %}
{% include display-example.html component=container class="container" %}
