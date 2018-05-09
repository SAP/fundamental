---
title: Breadcrumb
keywords: breadcrumb
sidebar: left-navigation-sidebar
toc: false
permalink: components/breadcrumb.html
folder: components
summary:
---

The breadcrumb allows users to see the current page and navigation path to that page. Users can navigate to previous levels int he path by clicking on those levels. By clicking on the current page, a dropdown allows users to access other pages at that same level.

<hr>

{% capture default %}
<ul class="fd-breadcrumb">
    <li class="fd-breadcrumb__item">
        <a class="fd-breadcrumb__link" href="#">Link Text</a>
    </li>
    <li class="fd-breadcrumb__item">
        <a class="fd-breadcrumb__link" href="#">Link Text</a>
    </li>
    <li class="fd-breadcrumb__item">
        Link Text
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=default %}
