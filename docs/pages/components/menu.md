---
title: Menu
keywords: menu
sidebar: left-navigation-sidebar
toc: false
permalink: components/menu.html
folder: components
summary:
---

The menu component is the listing structure with optional headers to create menus. Commonly used as the contents when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the popover component.

<hr/>

## Menu
The basic stucture of a menu.

{% capture default-menu %}
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
        <li><a href="#" class="fd-menu__item">Option 4</a></li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menu %}

## Menu w/ Group
You can optionally add hierarchy to menus by grouping sub-menus and adding headers.

{% capture default-menuwgroup %}
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
    </ul>
    <div class="fd-menu__group">
        <h1 class="fd-menu__title">Group Header</h1>
        <ul class="fd-menu__list">
            <li><a href="#" class="fd-menu__item">Option 4</a></li>
            <li><a href="#" class="fd-menu__item">Option 5</a></li>
            <li><a href="#" class="fd-menu__item">Option 6</a></li>
        </ul>
    </div>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu w/ Separator

{% capture default-menuwgroup %}
<nav class="fd-menu">
    <ul class="fd-menu__list fd-menu__separator">
      <li><a href="#" class="fd-menu__item">Option 1</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 2</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 3</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 4</a>
    </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu w/ addon before

{% capture default-menuwgroup %}
<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list">
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 1</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"><span class="sap-icon--accept"></span></div>
            <a href="#" class="fd-menu__item">Option 2</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 3</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 4</a>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}
