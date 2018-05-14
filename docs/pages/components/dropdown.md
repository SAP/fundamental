---
title: Dropdown
keywords: dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: components/dropdown.html
folder: components
---

The dropdown component let the user select one of different options. It is more flexible than the normal Select.

<hr />

## Default Dropdown

The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.

{% capture default-dropdown %}
<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar" aria-controls="PMiPS427" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="PMiPS427">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>
{% endcapture %}

{% include display-component.html component=default-dropdown %}

<br />

## Dropdown with Icon

It can also include complementary information like an icon.

{% capture icon-dropdown %}
<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar sap-icon--filter" aria-controls="rx5P8643" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="rx5P8643">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>
{% endcapture %}

{% include display-component.html component=icon-dropdown %}

<br />

## Disabled State

Disabled state can be rendered with a `is-disabled` class and/or `aria-disabled="true"` attribute.

{% capture disabled-dropdown %}
<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar sap-icon--filter is-disabled" aria-controls="Cz0R9591" aria-expanded="false" aria-haspopup="true" aria-disabled="true">
        Select
    </button>
</div>
{% endcapture %}

{% include display-component.html component=disabled-dropdown %}

<br>

## Size Options
`xs`, `s`, `compact`, default and `l`
{% capture dropdown-sizes %}
<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar fd-button--xs" aria-controls="xs" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="xs">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>

<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar fd-button--s" aria-controls="s" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="s">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>

<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar fd-button--compact" aria-controls="compact" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="compact">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>

<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar" aria-controls="default" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="default">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>

<div class="fd-dropdown">
    <button class="fd-dropdown__control fd-button--toolbar fd-button--l" aria-controls="l" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <nav class="fd-dropdown__menu" aria-hidden="true" id="l">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
    </nav>
</div>

{% endcapture %}

{% include display-component.html component=dropdown-sizes %}
