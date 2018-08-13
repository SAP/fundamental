---
title: Ariba Toggle
keywords: toggle, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/toggle.html
folder: ariba
---
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">

The toggle component is used to activate or deactivate an element. Uses a visual metaphor that is know to the user with visible differences between on and off state.

It is recommended to always display the toggle with a label above it as well as the label of the selected state. For example, the label above would be Active, the toggle state would be "on" and the selected state label displayed to the right of the toggle would be "Yes".

<hr/>

## Toggle Sizes

The toggle can be set to 3 sizes: `--xxs`, `--xs`, `--s`, normal and `--l`. When used with forms, it is recommended to use the small size so that form components will be consistent.


<div>
    <label class="fd-form__label " for="ImBw45511">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw45511" class="toggle-rtl" aria-controls="rtl-contianer-b-toggle">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-toggle'>

{% capture default %}

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w606">
        <span class="fd-toggle fd-form__control fd-toggle--xxs">
            <input type="checkbox" name="" value="" id="Yj07w606" checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Extra Small toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w604">
        <span class="fd-toggle fd-toggle--xs fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w604">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra small toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w605">
        <span class="fd-toggle fd-toggle--s fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w605">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small toggle
    </label>
</div>
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w607">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w607">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Regular toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="Yj07w6071">
        <span class="fd-toggle fd-toggle--l fd-form__control">
            <input type="checkbox" name="" value="" id="Yj07w6071">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=default %}
</div>
<br/>

## Disabled state

The toggle can be set to the disable state and still indicate the state of the toggle. To do this, add the `disabled` parameter to the input element.

{% capture toggle-disabled %}
<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--xs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--s fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551" checked disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="P3D2k380">
        <span class="fd-toggle fd-form__control">
            <input type="checkbox" name="" value="" id="P3D2k380" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Default Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="V2bRj442">
        <span class="fd-toggle fd-toggle--l fd-form__control">
            <input type="checkbox" name="" value="" id="V2bRj442" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="V2bRj442">
        <span class="fd-toggle fd-toggle--l fd-form__control">
            <input type="checkbox" name="" value="" id="V2bRj442" checked disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>

{% endcapture %}

{% include display-component.html component=toggle-disabled %}
