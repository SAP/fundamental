---
title: Link
id: link
keywords: link
sidebar: left-navigation-sidebar
toc: false
permalink: components/link.html
folder: components
summary:
---

Used when extra emphasis is needed especially when a link needs to standout from the surrounding text.
{: .docs-intro}

<br>

## Link States
* Selected state can be rendered using class `is-selected` and/or `aria-selected="true"` attribute
* Disabled state can be rendered using class `is-disabled` and/or `aria-disabled="true"` attribute

{% capture default %}
Lorem ipsum <a href="#" class="fd-link">dolor sit amet consectetur <span class="sap-icon--cart"></span> </a> adipiscing elit.
{% endcapture %}
{% include display-component.html component=default %}
