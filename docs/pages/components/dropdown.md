---
title: Dropdown
keywords: dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: dropdown.html
folder: components
---

The dropdown component let the user select one of different options. It is more flexible than the normal Select.

<hr />

## Default Dropdown

The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.

{% capture default-dropdown %}
<div class="tn-dropdown">
    <button class="tn-dropdown__control" aria-controls="nNJnB279" aria-expanded="false" aria-haspopup="true">
        Select
    </button>
    <ul class="tn-dropdown__menu" aria-hidden="true" id="nNJnB279">
        <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
        <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
        <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
        <ul class="tn-dropdown__group">
            <span class="tn-dropdown__separator" role="separator">Group Header</span>
            <li><a href="#" class="tn-dropdown__item">Option 4</a></li>
            <li><a href="#" class="tn-dropdown__item">Option 5</a></li>
            <li><a href="#" class="tn-dropdown__item">Option 6</a></li>
        </ul>
    </ul>
</div>

{% endcapture %}

{% include display-component.html component=default-dropdown %}

<br />

## Dropdown with Icon

It can also include complementary information like an icon.

{% capture icon-dropdown %}
<div class="tn-dropdown">
    <button class="tn-dropdown__control" aria-controls="aqn0K794" aria-expanded="false" aria-haspopup="true">
        <span class="tn-icon tn-icon--filter tn-dropdown__icon" role="presentation"></span>
        Select
    </button>
    <ul class="tn-dropdown__menu" aria-hidden="true" id="aqn0K794">
        <li><a href="#" class="tn-dropdown__item">Pellentesque metus</a></li>
        <li><a href="#" class="tn-dropdown__item">Duis malesuada odio volutpat</a></li>
        <li><a href="#" class="tn-dropdown__item">Suspendisse</a></li>
        <li><a href="#" class="tn-dropdown__item">Donec mattis arcu et velit</a></li>
        <ul class="tn-dropdown__group">
            <span class="tn-dropdown__separator" role="separator">Accumsan tellus</span>
            <li><a href="#" class="tn-dropdown__item">Scelerisque ante</a></li>
            <li><a href="#" class="tn-dropdown__item">Accumsan</a></li>
            <li><a href="#" class="tn-dropdown__item">Volutpat felix</a></li>
        </ul>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=icon-dropdown %}

<br />

## Disabled Dropdown

As the rest of the form inputs it can also have a disabled state.

{% capture disabled-dropdown %}
<div class="tn-dropdown">
    <button class="tn-dropdown__control" aria-controls="k4IHj455" aria-expanded="false" aria-haspopup="true" disabled>
        Select
    </button>
    <ul class="tn-dropdown__menu" aria-hidden="true" id="k4IHj455">
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=disabled-dropdown %}
