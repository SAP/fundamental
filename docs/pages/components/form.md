---
title: Forms
keywords: form, forms, checkboxes, input, inputs, input help elemnts, input sates, select, radio buttons,
sidebar: left-navigation-sidebar
toc: false
permalink: components/form.html
folder: components
---

Form elements include field layout, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state.
<hr/>

## Inputs
Inputs are used to collect data from the user. When a field is required, the label is displayed in bold and noted by an asterisk (*).

{% capture inputs %}
<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-1">Default Input:</label>
        <input class="fd-form__control" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-1">Compact Input:</label>
        <input class="fd-input--compact fd-form__control" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" aria-required="true" for="input-2">Required Input:*</label>
        <input class="fd-form__control" type="text" id="input-2" placeholder="Field placeholder text">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" aria-required="true" for="input-3">Password:*</label>
        <input class="fd-form__control" type="password" id="input-3">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="textarea-1">Text area:</label>
        <textarea class="fd-form__control" id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br/>

## Inputs help elements

Help elements give the user information about the input. Two types of help elements can be used.

- The inline help element is displayed as a ? Icon. On hover or click, help content is displayed.
- Help content can also be visible at all times to avoid mistakes. This type of help generally contains validation rules about the data allowed in the input field. An example is "Maximum 20 characters". This is displayed below the input field.

{% capture inputs-help %}
<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-44">
            Input with inline help:
            <span class="fd-inline-help fd-has-float-right">
                <span class="fd-inline-help__content fd-inline-help__content--bottom-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
            </span>
        </label>
        <input class="fd-form__control" type="text" id="input-45">
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="input-45">Input with Help Message:</label>
        <input class="fd-form__control" type="text" id="input-45">
        <span class="fd-form__message fd-form__message--help">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=inputs-help %}

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
        Normal Input:
    </label>
    <input type="text" class="fd-form__control" id="OatmD552" placeholder="Field placeholder text">
    <span class="fd-form__message">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-2">
        Valid Input:
    </label>
    <input class="fd-form__control is-valid" type="text" id="input-2">
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="UI7xy545">
        Invalid Input:
    </label>
    <input type="text" class="fd-form__control is-invalid" id="UI7xy545" placeholder="Field placeholder text">
    <span class="fd-form__message fd-form__message--error">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="pvsz1273">
        Warning Input:
    </label>
    <input type="text" class="fd-form__control is-warning" id="pvsz1273" placeholder="Field placeholder text">
    <span class="fd-form__message fd-form__message--warning">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>


<div class="fd-form__item">
    <label class="fd-form__label" for="VmsRZ860">
        Field Label:
    </label>
    <input type="text" class="fd-form__control" id="VmsRZ860" placeholder="Field placeholder text">
    <span class="fd-form__message fd-form__message--help">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-6">Disabled Input:</label>
    <input class="fd-form__control" type="text" id="input-6" value="Non editable data" disabled>
</div>

<div class="fd-form__item">
    <label class="fd-form__label" for="input-7">Read Only Input:</label>
    <input class="fd-form__control" type="text" id="input-7" value="Read only data" readonly>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>

## Select
The Select component is similar to a dropdown but is more commonly used within a form. It can also be set to a disabled state.

{% capture select %}
<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="select-1">Default Select:</label>
        <select class="fd-form__control" id="select-1" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>

<div class="fd-form__set">
    <div class="fd-form__item">
        <label class="fd-form__label" for="select-2">Disabled Select:</label>
        <select class="fd-form__control" id="select-2" name="" disabled>
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=select %}

<br/>

## Radio buttons
Radio buttons allow the user to see all options and select one. Generally, this is used when there are between 2-3 options. This component can also be disabled and displayed in a row.

{% capture radio-buttons%}
<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Radio buttons</legend>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh761">
            <input type="radio" class="fd-form__control" id="pDidh761" name="radio" checked="checked">
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh7612">
            <input type="radio" class="fd-form__control" id="pDidh7612" name="radio">
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh7613">
            <input type="radio" class="fd-form__control" id="pDidh7613" name="radio">
            Field label
        </label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Radio buttons Disabled</legend>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh764">
            <input type="radio" class="fd-form__control" id="pDidh764" name="radio" disabled>
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh7615">
            <input type="radio" class="fd-form__control" id="pDidh7615" name="radio" disabled>
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="pDidh7616">
            <input type="radio" class="fd-form__control" id="pDidh7616" name="radio" disabled>
            Field label
        </label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Inline Radio buttons</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="pDidh767">
                <input type="radio" class="fd-form__control" id="pDidh767" name="radio">
                Field label
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="pDidh7618">
                <input type="radio" class="fd-form__control" id="pDidh7618" name="radio" >
                Field label
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="pDidh7619">
                <input type="radio" class="fd-form__control" id="pDidh7619" name="radio">
                Field label
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
        <label class="fd-form__label" for="Ai4ez611">
            <input type="checkbox" class="fd-form__control" id="Ai4ez611">
            Text Option
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="Ai4ez612">
            <input type="checkbox" class="fd-form__control" id="Ai4ez612" checked>
            Selected State
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="Ai4ez613">
            <input type="checkbox" class="fd-form__control" id="Ai4ez613" >
            TriState Text
        </label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes disabled</legend>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="Ai4ez614">
            <input type="checkbox" class="fd-form__control" id="Ai4ez614" disabled>
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="Ai4ez615">
            <input type="checkbox" class="fd-form__control" id="Ai4ez615" disabled>
            Field label
        </label>
    </div>
    <div class="fd-form__item fd-form__item--check">
        <label class="fd-form__label" for="Ai4ez616">
            <input type="checkbox" class="fd-form__control" id="Ai4ez616" disabled>
            Field label
        </label>
    </div>
</fieldset>

<fieldset class="fd-form__set">
    <legend class="fd-form__legend">Checkboxes inline</legend>
    <div class="fd-form__group">
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="Ai4ez617">
                <input type="checkbox" class="fd-form__control" id="Ai4ez617">
                Field label
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="Ai4ez618">
                <input type="checkbox" class="fd-form__control" id="Ai4ez618">
                Field label
            </label>
        </div>
        <div class="fd-form__item fd-form__item--inline fd-form__item--check">
            <label class="fd-form__label" for="Ai4ez619">
                <input type="checkbox" class="fd-form__control" id="Ai4ez619">
                Field label
            </label>
        </div>
        
    </div>
</fieldset>{% endcapture %}

{% include display-component.html component=checkbox %}

<br>
