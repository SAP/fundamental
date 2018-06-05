---
title: Link
keywords: link
sidebar: left-navigation-sidebar
toc: false
permalink: components/link.html
folder: components
summary:
---

Used when extra emphasis is needed especially when a link needs to standout from the surrounding text.

<hr>

## Link States
* Selected state can be rendered using class `is-selected` and/or `aria-selected="true"` attribute
* Disabled state can be rendered using class `is-disabled` and/or `aria-disabled="true"` attribute

{% capture default %}
Lorem ipsum <a href="#" class="fd-link">dolor sit amet consectetur</a> adipiscing elit.
{% endcapture %}
{% include display-component.html component=default %}
