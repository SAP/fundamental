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

The toggle can be set to 4 sizes: `--xs`, `--s`, normal and `--l`. When used with forms, it is recommended to use the small size so that form components will be consistent.


{% capture default %}
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551a">
        <span class="fd-toggle fd-toggle--xs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551a">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551b">
        <span class="fd-toggle fd-toggle--s fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551b" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="P3D2k380h">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="P3D2k380h">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Default Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="V2bRj442g">
        <span class="fd-toggle fd-toggle--l fd-form__control">
            <input type="checkbox" name="" value="" id="V2bRj442g" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>

{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Disabled state

The toggle can be set to the disable state and still indicate the state of the toggle. To do this, add the `disabled` parameter to the input element.

{% capture toggle-disabled %}
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--xs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551c" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--s fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551c" disabled checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="P3D2k380d">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="P3D2k380d" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Default Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="V2bRj442f">
        <span class="fd-toggle fd-toggle--l fd-form__control">
            <input type="checkbox" name="" value="" id="V2bRj442f" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=toggle-disabled %}
