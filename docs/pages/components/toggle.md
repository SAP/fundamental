---
title: Toggle
keywords: toggle
sidebar: left-navigation-sidebar
toc: false
permalink: components/toggle.html
folder: components
---

The toggle component is used to activate or deactivate an element. Uses a visual metaphor that is know to the user with visible differences between on and off state.

It is recommended to always display the toggle with a label above it as well as the label of the selected state. For example, the label above would be Active, the toggle state would be "on" and the selected state label displayed to the right of the toggle would be "Yes".

<hr/>

## Toggle Sizes

The toggle can be set to 3 sizes: `--small`, normal and `--large`. When used with forms, it is recommended to use the small size so that form components will be consistent.


{% capture default %}
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w605">
        <span class="fd-toggle fd-toggle--small fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w605">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w606">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w606" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Normal toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w607">
        <span class="fd-toggle fd-toggle--large fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w607">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Disabled state

The toggle can be set to the disable state and still indicate the state of the toggle. To do this, add the `disabled` parameter to the input element.

{% capture toggle-disabled %}
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="zj07w605">
        <span class="fd-toggle fd-toggle--small fd-form__control">
            <input type="checkbox" name="" value="" id="zj07w605" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="zj07w606">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="zj07w606" checked disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Normal toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="zj07w607">
        <span class="fd-toggle fd-toggle--large fd-form__control">
            <input type="checkbox" name="" value="" id="zj07w607" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=toggle-disabled %}
