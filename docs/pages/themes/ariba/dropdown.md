---
title: Ariba Dropdown
keywords: dropdown, dropdowns, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/dropdown.html
folder: ariba
---
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">

The dropdown component is an opinionated composition of the "popover" and "menu" components with the use of a styled button. It allows users to make one selection from a list. It is more flexible than the normal Select. Generally, it should be used when there are between 3 to 10 or more options.

<b>The original "fd-dropdown" CSS will soon be deprecated in exchange for whats now defined in the "menu" and "popover" components to.</b>

<hr />

## Default Dropdown

The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.

<style type="text/css">
.fd-popover {
    margin: 0 0 20px 0;
}
.fd-popover:last-child {
    margin-bottom: 0;
}
.docs-component .fd-dropdown {
    margin-right: 0px;
}
</style>
<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-b-dd">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-dd'>
{% capture default-dropdown %}
<div class="fd-popover fd-dropdown">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar" aria-controls="PMiPS427" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="PMiPS427">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item selected">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-1">Dropdown Label</label>
        <div class="fd-popover fd-dropdown">
            <div class="fd-popover__control">
                <button class="fd-dropdown__control fd-button--toolbar" aria-controls="PMiPS4271" aria-expanded="false" aria-haspopup="true">
                    Select
                </button>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="PMiPS4271">
                <nav class="fd-menu">
                    <ul class="fd-menu__list">
                        <li><a href="#" class="fd-menu__item">Option 1</a></li>
                        <li><a href="#" class="fd-menu__item selected">Option 2</a></li>
                        <li><a href="#" class="fd-menu__item">Option 3</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

{% endcapture %}

{% include display-component.html component=default-dropdown %}
</div>
<br />

## Dropdown with Icon

It can also include complementary information like an icon.
<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-b-dd-icon">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-dd-icon'>
{% capture icon-dropdown %}
<div class="fd-popover fd-dropdown">
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
</div>
<br />

## Disabled State

Disabled state can be rendered with a `is-disabled` class and/or `aria-disabled="true"` attribute.

{% capture disabled-dropdown %}
<div class="fd-popover fd-dropdown">
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
default and `--l` for large
<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-b-dd-size">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-dd-size'>
{% capture dropdown-sizes %}

<div class="fd-popover fd-dropdown">
    <div class="fd-popover__control">
        <button class="fd-dropdown__control fd-button--toolbar" aria-controls="aklsjd90" aria-expanded="false" aria-haspopup="true">
            Select
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="aklsjd90">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item selected">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover fd-dropdown --l">
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
                <li><a href="#" class="fd-menu__item selected">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=dropdown-sizes %}
</div>
<br>