---
title: Toggle
keywords: toggle`
sidebar: left-navigation-sidebar
toc: false
permalink: toggle.html
folder: components
---

The toggle component is used to activate or deactivate an element. Uses a visual metaphor that is know to the user with visible differences between on and off state.

It is also recommended to use it always with a label to let know the user what is the element/setting that is been activated/deactivated.

Toggles can be also used as a standalone element in a screen, to set properties like "visible", "active", "published", etc.

<hr/>

## Toggle Sizes

The toggle can be set to 3 sizes: **small**, **normal** and **large**. When used with forms is recommended to use the **small** size, to keep consistency with the other form components.


{% capture default %}
<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="Yj07w605">
        <span class="tn-toggle tn-toggle--small tn-form__control">
            <input type="checkbox" name="" value="" id="Yj07w605">
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Small toggle
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="Yj07w606">
        <span class="tn-toggle tn-form__control">
            <input type="checkbox" name="" value="" id="Yj07w606" checked>
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Normal toggle
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="Yj07w607">
        <span class="tn-toggle tn-toggle--large tn-form__control">
            <input type="checkbox" name="" value="" id="Yj07w607">
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Large toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Disabled state

The toggle can be set to the disable state and still indicate if the element is active or inactive. For that just add the `disabled` parameter to the input element.

{% capture toggle-disabled %}
<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="zj07w605">
        <span class="tn-toggle tn-toggle--small tn-form__control">
            <input type="checkbox" name="" value="" id="zj07w605" disabled>
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Small toggle
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="zj07w606">
        <span class="tn-toggle tn-form__control">
            <input type="checkbox" name="" value="" id="zj07w606" checked disabled>
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Normal toggle
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="zj07w607">
        <span class="tn-toggle tn-toggle--large tn-form__control">
            <input type="checkbox" name="" value="" id="zj07w607" disabled>
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>
        Large toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=toggle-disabled %}
