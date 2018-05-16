---
title: Tag
keywords: tag
sidebar: left-navigation-sidebar
toc: false
permalink: components/tag.html
folder: components
summary:
---

A tag is useful to show applied filters, selected values or any other small values to
indicate the user of a state of a component or application.

<hr>

{% capture default-alert %}
<span class="fd-tag" role="button">Bibendum</span>
<span class="fd-tag" role="button">Lorem</span>
<span class="fd-tag" role="button">Dolor</span>
<span class="fd-tag" role="button">Filter</span>
{% endcapture %}

{% include display-component.html component=default-alert %}
