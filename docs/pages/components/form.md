---
title: Forms
keywords: form
sidebar: left-navigation-sidebar
toc: false
permalink: form.html
folder: components
---

Form Elements include the layout of a field itself, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state.

<hr/>

## Inputs
Inputs are the used to collect data from the user. When a field is required the **label** is displayed in bold and noted by asterisk *

{% capture inputs %}
<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-1">Default Input</label>
        <input class="tn-form__control" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>

<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label is-required" for="input-2">Required Input*</label>
        <input class="tn-form__control" type="text" id="input-2" placeholder="Field placeholder text">
    </div>
</div>

<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label is-required" for="input-3">Password*</label>
        <input class="tn-form__control" type="password" id="input-3">
    </div>
</div>

<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="textarea-1">Text area</label>
        <textarea class="tn-form__control" id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br/>

## Inputs help elements

To make it easier for the user to understand what kind of information is should be entered; two types of help elements can be used.

The inline help element: displayed as an icon that when the user hover the cursor over it, shows the help indications. This help elements is used then the help indications are an aid to the user but not contain information they have to know right away.

The help indications can be aso always visible when the user needs to be inform about it at all times, to avoid mistakes. This help element is then displayed bellow the input.

{% capture inputs-help %}
<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-44">
            Input with inline help
            <span class="tn-inline-help tn-has-float-right">
                <span class="tn-inline-help__content tn-inline-help__content--bottom-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
            </span>
        </label>
        <input class="tn-form__control" type="text" id="input-45">
    </div>
</div>

<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-45">Input with Help Message</label>
        <input class="tn-form__control" type="text" id="input-45">
        <span class="tn-form__message tn-form__message--help">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=inputs-help %}

<br/>

## Inputs state
Input can reflect if the data entered is valid or not, for that, the state can be set:
* **Normal**: No validation  state is displayed.
* **Valid**: Used mostly when the data have a specific format, like an email address for example.
* **Invalid**: The data entered is not valid and the input have to be corrected.
* **Warning**: Less severe than invalid. Used to signal the user the date entered is formatted correctly but there are still some minor issues.
* **Disabled**: Used to prevent the user to enter any data. Usually this state is set depending on other data entered.
* **Read Only**: Used to display static information in the context of a Form.

Along with **Invalid** and **Warning**, messages can be displayed to help the user to correct the errors.

{% capture inputs %}
<div class="tn-form__item">
    <label class="tn-form__label" for="OatmD552">
        Normal Input
    </label>
    <input type="text" class="tn-form__control" id="OatmD552" placeholder="Field placeholder text">
    <span class="tn-form__message">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="tn-form__item">
    <label class="tn-form__label" for="input-2">
        Valid Input
    </label>
    <input class="tn-form__control is-valid" type="text" id="input-2">
</div>

<div class="tn-form__item">
    <label class="tn-form__label" for="UI7xy545">
        Invalid Input
    </label>
    <input type="text" class="tn-form__control is-invalid" id="UI7xy545" placeholder="Field placeholder text">
    <span class="tn-form__message tn-form__message--error">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="tn-form__item">
    <label class="tn-form__label" for="pvsz1273">
        Warning Input
    </label>
    <input type="text" class="tn-form__control is-warning" id="pvsz1273" placeholder="Field placeholder text">
    <span class="tn-form__message tn-form__message--warning">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>


<div class="tn-form__item">
    <label class="tn-form__label" for="VmsRZ860">
        Field Label
    </label>
    <input type="text" class="tn-form__control" id="VmsRZ860" placeholder="Field placeholder text">
    <span class="tn-form__message tn-form__message--help">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </span>
</div>

<div class="tn-form__item">
    <label class="tn-form__label" for="input-6">Disabled Input</label>
    <input class="tn-form__control" type="text" id="input-6" value="Non editable data" disabled>
</div>

<div class="tn-form__item">
    <label class="tn-form__label" for="input-7">Read Only Input</label>
    <input class="tn-form__control" type="text" id="input-7" value="Read only data" readonly>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>

## Select
The *Simple Select* form component is used to let the user select on of various options. It also can be set to a **Disabled** state.

{% capture select %}
<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="select-1">Default Select</label>
        <select class="tn-form__control" id="select-1" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>

<div class="tn-form__set">
    <div class="tn-form__item">
        <label class="tn-form__label" for="select-2">Disabled Select</label>
        <select class="tn-form__control" id="select-2" name="" disabled>
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
Are used to let the user select only one of various options. All options are visible at all time. This component can also be **disabled** and displayed in a row.

{% capture radio-buttons%}
<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Radio buttons</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-1" name="radio-name-1" value="" checked>
        <label class="tn-form__label" for="radio-1">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-2" name="radio-name-1" value="">
        <label class="tn-form__label" for="radio-2">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-3" name="radio-name-1" value="">
        <label class="tn-form__label" for="radio-3">Option Three</label>
    </div>
</fieldset>

<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Radio buttons Disabled</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-10" name="radio-name-4" value="" disabled>
        <label class="tn-form__label" for="radio-10">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-11" name="radio-name-4" value="" disabled checked>
        <label class="tn-form__label" for="radio-11">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-12" name="radio-name-4" value="" disabled>
        <label class="tn-form__label" for="radio-12">Option Three</label>
    </div>
</fieldset>

<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Inline Radio buttons</legend>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-13" name="radio-name-5" value="" checked>
        <label class="tn-form__label" for="radio-13">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-14" name="radio-name-5" value="">
        <label class="tn-form__label" for="radio-14">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-15" name="radio-name-5" value="">
        <label class="tn-form__label" for="radio-15">Option Three</label>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=radio-buttons %}

<br>

## Checkbox
Checkboxes let the user select multiple options, while all the options been displayed. This component can be set **disabled** and also displayed in a row.

{% capture checkbox %}    
<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Checkboxes</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-1" name="checkbox-name-1" checked>
        <label class="tn-form__label" for="checkbox-1">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-2" name="checkbox-name-1">
        <label class="tn-form__label" for="checkbox-2">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-3" name="checkbox-name-1">
        <label class="tn-form__label" for="checkbox-3">Option Three</label>
    </div>
</fieldset>

<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Checkboxes disabled</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-4" name="checkbox-name-2" checked disabled>
        <label class="tn-form__label" for="checkbox-4">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-5" name="checkbox-name-2" disabled>
        <label class="tn-form__label" for="checkbox-6">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-6" name="checkbox-name-2" disabled>
        <label class="tn-form__label" for="checkbox-6">Option Three</label>
    </div>
</fieldset>

<fieldset class="tn-form__set">
    <legend class="tn-form__legend">Checkboxes inline</legend>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-7" name="checkbox-name-3" checked>
        <label class="tn-form__label" for="checkbox-7">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-8" name="checkbox-name-3" >
        <label class="tn-form__label" for="checkbox-8">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-9" name="checkbox-name-4">
        <label class="tn-form__label" for="checkbox-9">Option Three</label>
    </div>
</fieldset>{% endcapture %}

{% include display-component.html component=checkbox %}

<br>
