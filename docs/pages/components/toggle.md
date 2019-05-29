---
title: Toggle / Switch
id: toggle
keywords: toggle, swtich
sidebar: left-navigation-sidebar
toc: false
permalink: components/toggle.html
folder: components
---

The toggle/swtich component is used to activate or deactivate an element. Uses a visual metaphor that is know to the user with visible differences between on and off state.
{: .docs-intro}

It is recommended to always display the toggle with a label above it as well as the label of the selected state. For example, the label above would be Active, the toggle state would be "on" and the selected state label displayed to the right of the toggle would be "Yes".

<br>

## Toggle Options
In addition to the default option, there are two additional modifiers avialable:
- `fd-toggle--label`: renders `off` and `on` labels inside the toggle switch
- `fd-toggle--semantic`: renders semnatic colors and icons inside the toggle switch

> Note: `fd-toggle--label` modifier only supports up to three characters by default. The width of the component will not increase to accomodate longer labels and will need to be a css override, for example - `<span class="fd-toggle" style="width: 70px">`

{% capture default %}
<label>
    <span class="fd-toggle">
        <input type="checkbox" name="" value="" id="y21YO391">
        <span class="fd-toggle__switch" role="presentation"></span>
    </span>
</label>

<label>
    <span class="fd-toggle fd-toggle--label">
        <input type="checkbox" name="" value="" id="eKVll635">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__label--on">ON</span>
            <span class="fd-toggle__label--off">OFF</span>
        </span>
    </span>
</label>

<label>
    <span class="fd-toggle fd-toggle--semantic">
        <input type="checkbox" name="" value="" id="Enrat404">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__semantic--off sap-icon--decline"></span>
            <span class="fd-toggle__semantic--on sap-icon--accept"></span>
        </span>
    </span>
</label>
{% endcapture %}
{% include display-component.html component=default %}


## Compact Mode
`fd-toggle--compact` modifier can be used to render the compact size of the toggle `--label` and `--semantic` options are also avialable with the `compact` mode. 
{% capture default %}
<label>
    <span class="fd-toggle fd-toggle--compact">
        <input type="checkbox" name="" value="" id="y21YO391">
        <span class="fd-toggle__switch" role="presentation"></span>
    </span>
</label>

<label>
    <span class="fd-toggle fd-toggle--compact fd-toggle--label">
        <input type="checkbox" name="" value="" id="eKVll635">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__label--on">ON</span>
            <span class="fd-toggle__label--off">OFF</span>
        </span>
    </span>
</label>

<label>
    <span class="fd-toggle fd-toggle--compact fd-toggle--semantic">
        <input type="checkbox" name="" value="" id="Enrat404">
        <span class="fd-toggle__switch" role="presentation">
            <span class="fd-toggle__semantic--off sap-icon--decline"></span>
            <span class="fd-toggle__semantic--on sap-icon--accept"></span>
        </span>
    </span>
</label>
{% endcapture %}
{% include display-component.html component=default %}


## Other Size Options

In addition to `default` and `--compact`, the toggle can be set to 3 sizes: `--xs`, `--s` and `--l`. When used with forms, it is recommended to use the small size so that form components will be consistent.

> Node: `--label` and `--semantic` modifiers are currently not supported by these optional sizes

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
        <span class="fd-toggle fd-toggle--compact fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551c" disabled>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Extra Small Toggle
    </label>
</div>

<div class="fd-form__item fd-form__item--check">
    <label class="fd-form__label" for="ImBw4551">
        <span class="fd-toggle fd-toggle--compact fd-form__control">
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
            <input type="checkbox" name="" value="" id="V2bRj442f" disabled checked>
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Large Toggle
    </label>
</div>
{% endcapture %}

{% include display-component.html component=toggle-disabled %}
