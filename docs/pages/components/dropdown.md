---
title: Dropdown
keywords: dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: components/dropdown.html
folder: components
---

The dropdown component is an opinionated composition of the "popover" and "menu" components with the use of a styled button. It allows users to make one selection from a list. It is more flexible than the normal Select. Generally, it should be used when there are between 3 to 10 or more options.

<b>The original "fd-dropdown" CSS will soon be deprecated in exchange for whats now defined in the "menu" and "popover" components to.</b>

<hr />

## Default Dropdown

The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.

{% capture default-dropdown %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar" aria-controls="PMiPS427" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="PMiPS427">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-dropdown %}

<br />

## Dropdown with Icon

It can also include complementary information like an icon.

{% capture icon-dropdown %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar sap-icon--filter" aria-controls="PeoijrS427" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="PeoijrS427">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=icon-dropdown %}

<br />

## Disabled State

Disabled state can be rendered with a `is-disabled` class and/or `aria-disabled="true"` attribute.

{% capture disabled-dropdown %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar sap-icon--filter is-disabled" aria-controls="Cz0R9591" aria-expanded="false" aria-haspopup="true" aria-disabled="true">
            Select
        </button>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-dropdown %}

<br>

## Size Options
`xs`, `s`, `compact`, default and `l`
{% capture dropdown-sizes %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar fd-button--xs" aria-controls="ruf90aus" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="ruf90aus">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar fd-button--s" aria-controls="asd9i" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="asd9i">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar fd-button--compact" aria-controls="alksd0" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="alksd0">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar" aria-controls="aklsjd90" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="aklsjd90">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar fd-button--l" aria-controls="vb4jkbkj" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="vb4jkbkj">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=dropdown-sizes %}
