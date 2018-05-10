---
title: Link
keywords: link
sidebar: left-navigation-sidebar
toc: false
permalink: components/link.html
folder: components
summary:
---

Anchor link styles

<hr>

## Link States
* Selected state can be rendered using class `is-selected` and/or `aria-selected="true"` attribute
* Disabled state can be rendered using class `is-disabled` and/or `aria-disabled="true"` attribute

{% capture default %}
<a href="#" class="fd-link">lorem ipsum</a>

<br>

<a href="#" class="fd-link" aria-selected="true">lorem ipsum</a>

<br>

<a href="#" class="fd-link" aria-disabled="true">lorem ipsum</a>
{% endcapture %}
{% include display-component.html component=default %}
