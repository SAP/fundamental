---
title: Forms
keywords: form, forms, checkboxes, input, inputs, input help elemnts, input sates, select, radio buttons, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/form.html
folder: ariba
---

<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">


orm elements include field layout, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state.
<hr/>

## Inputs
Inputs are used to collect data from the user. When a field is required, the label is displayed in bold and noted by an asterisk (*).

{% capture inputs %}
<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-1">Default Input</label>
        <input class="fd-form__control" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label is-required" for="input-2">Required Input*</label>
        <input class="fd-form__control" type="text" id="input-2" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label is-required" for="input-3">Password*</label>
        <input class="fd-form__control" type="password" id="input-3">
    </div>
</div>


{% endcapture %}

{% include display-component.html component=inputs %}

<br/>


## Inputs Sizes
Inputs have two sizes; `{--l}` for large and other is regular.

{% capture inputs %}
<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-1">Default/Regular Input</label>
        <input class="fd-form__control" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label is-required" for="input-2">Large Input</label>
        <input class="fd-form__control --l" type="text" id="input-2" placeholder="Field placeholder text">
    </div>
</div>

{% endcapture %}

{% include display-component.html component=inputs %}

<br/>


<br/>

## Input States
The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.
* **Normal**: The field is editable but no validation has occurred
* **Valid**: The data format entered has been validated and it's correct, such as an email address.
* **Invalid**: The data entered is not valid and must be corrected.
* **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
* **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
* **Read Only**: Used to display static information in the context of a form.

Along with Invalid and Warning, error messages should be displayed below the field so the user can correct the error and move forward.

{% capture inputs %}
<div class="fd-form__item">
    <label class="fd-form__label" for="OatmD552">
        Normal Input
    </label>
    <input type="text" class="fd-form__control" id="OatmD552" placeholder="Field placeholder text">
    <span class="fd-form__message">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-2">
        Valid Input
    </label>
    <input class="fd-form__control is-valid" type="text" id="input-2">
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-6">Disabled Input</label>
    <input class="fd-form__control" type="text" id="input-6" value="Non editable data" disabled>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-7">Read Only Input</label>
    <input class="fd-form__control" type="text" id="input-7" value="Read only data" readonly>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>


## Radio buttons
Radio buttons allow the user to see all options and select one. Generally, this is used when there are between 2-3 options. This component can also be disabled and displayed in a row.

{% capture radio-buttons%}
<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Radio buttons</legend>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-1" name="radio-name-1" value="" checked>
        <label class="fd-form__label" for="radio-1">Option One</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-2" name="radio-name-1" value="">
        <label class="fd-form__label" for="radio-2">Option Two</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-3" name="radio-name-1" value="">
        <label class="fd-form__label" for="radio-3">Option Three</label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Radio buttons Disabled</legend>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-10" name="radio-name-4" value="" disabled>
        <label class="fd-form__label" for="radio-10">Option One</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-11" name="radio-name-4" value="" disabled checked>
        <label class="fd-form__label" for="radio-11">Option Two</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="radio" id="radio-12" name="radio-name-4" value="" disabled>
        <label class="fd-form__label" for="radio-12">Option Three</label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Inline Radio buttons</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-13">
                <input class="fd-form__control" type="radio" id="radio-13" name="radio-name-5" value="" checked>
                Option One
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-14">
                <input class="fd-form__control" type="radio" id="radio-14" name="radio-name-5" value="">
                Option Two
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-15">
                <input class="fd-form__control" type="radio" id="radio-15" name="radio-name-5" value="">
                Option Three
            </label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=radio-buttons %}

<br>

## Radio buttons
Have 3 sizes; `{--s}`, regular, `{--l}`

{% capture radio-buttons%}

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Inline Radio buttons</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-13">
                <input class="fd-form__control --s" type="radio" id="radio-13" name="radio-name-5" value="" checked>
                Option One
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-14">
                <input class="fd-form__control" type="radio" id="radio-14" name="radio-name-5" value="">
                Option Two
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="radio-15">
                <input class="fd-form__control --l" type="radio" id="radio-15" name="radio-name-5" value="">
                Option Three
            </label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=radio-buttons %}

<br>

## Checkbox
With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row.

{% capture checkbox %}
<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes</legend>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-1" name="checkbox-name-1" checked>
        <label class="fd-form__label" for="checkbox-1">Option One</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-2" name="checkbox-name-1">
        <label class="fd-form__label" for="checkbox-2">Option Two</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-3" name="checkbox-name-1">
        <label class="fd-form__label" for="checkbox-3">Option Three</label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes disabled</legend>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-4" name="checkbox-name-2" checked disabled>
        <label class="fd-form__label" for="checkbox-4">Option One</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-5" name="checkbox-name-2" disabled>
        <label class="fd-form__label" for="checkbox-6">Option Two</label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <input class="fd-form__control" type="checkbox" id="checkbox-6" name="checkbox-name-2" disabled>
        <label class="fd-form__label" for="checkbox-6">Option Three</label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes inline</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-7">
                <input class="fd-form__control" type="checkbox" id="checkbox-7" name="checkbox-name-3" checked>
                Option One
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-8">
                <input class="fd-form__control" type="checkbox" id="checkbox-8" name="checkbox-name-3" >
                Option Two
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-9">
                <input class="fd-form__control" type="checkbox" id="checkbox-9" name="checkbox-name-4">
                Option Three
            </label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=checkbox %}

<br>

## Checkbox Size
Have 3 sizes; `{--s}`, regular, `{--l}`

{% capture checkbox %}


<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes inline</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-7">
                <input class="fd-form__control --s" type="checkbox" id="checkbox-7" name="checkbox-name-3" checked>
                Option One
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-8">
                <input class="fd-form__control" type="checkbox" id="checkbox-8" name="checkbox-name-3" >
                Option Two
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="checkbox-9">
                <input class="fd-form__control --l" type="checkbox" id="checkbox-9" name="checkbox-name-4">
                Option Three
            </label>
        </div>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=checkbox %}

<br>
