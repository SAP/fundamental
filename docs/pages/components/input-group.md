---
title: Input Group
keywords: input group, input groups, input, groups
sidebar: left-navigation-sidebar
toc: false
permalink: input-group.html
folder: components
---

The Input groups component are form inputs with add-ons that allows the user to better understand the information been entered.

<hr/>

## Text add-on

The Input with text add-on component is used mainly to specify the type of the data being entered, like: currency, unit of measure, etc. There informational add-on can be placed at the left or right of the input element.

{% capture text-addon %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Left Aligned Text Add-on</label>
        <div class="tn-input-group">
            <span class="tn-input-group__addon">$</span>
            <input class="" type="text" id="" name="" value="1234568910 ">
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Right Aligned Text Addon</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1234568910 ">
            <span class="tn-input-group__addon">€</span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Right Aligned Text Addon</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="" placeholder="Field placeholder text">
            <span class="tn-input-group__addon">km/h</span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Character Counter Example</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="This is a test">
            <span class="tn-input-group__addon">50</span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}

<br />

## Number input

When the user needs to enter an integer value you can use the spinner, to aid the user to increase or decrease the value.

{% capture input-spinner %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Quantity Spinner</label>
        <div class="tn-input-group">
            <input class="" type="number" id="spinner-1" name="" value="100" />
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-input-group__button tn-input-group__button--step-up" aria-label="Step up" onclick="document.getElementById('spinner-1').stepUp();"></button>
                <button class="tn-input-group__button tn-input-group__button--step-down" aria-label="Step down" onclick="document.getElementById('spinner-1').stepDown();"></button>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-spinner %}

<br/>

## Input with icons

The Input with add-on component also support actions icons to the right of the element.

{% capture input-action %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Search input</label>
        <div class="tn-input-group">
            <input class="" type="search" id="search-1" name="" value="Search Term" placeholder="Enter Term..">
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-input-group__button tn-input-group__button--clear" aria-label="Clear" onclick="document.getElementById('search-1').value = '';"></button>
            </span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with icon on the left</label>
        <div class="tn-input-group">
            <span class="tn-input-group__addon">
                <span class="tn-icon tn-icon--localization" role="presentation"></span>
            </span>
            <input class="" type="text" id="" name="" value="1000000">
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with icon on the right</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1000000">
            <span class="tn-input-group__addon">
                <span class="tn-icon tn-icon--visibilityoff" role="presentation"></span>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=input-action %}

<br>

## Input with actions

The input add-on also support actions. The actions can show a label and also a icon.

{% capture button-addon %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with action</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1000000">
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-button">
                    Button
                </button>
            </span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with icon action</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1000000">
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-button tn-button--icon">
                    <span class="tn-icon tn-icon--chevron tn-icon--medium" role="presentation"></span>
                </button>
            </span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with text action</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1000000">
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-button tn-button--text">
                    Button
                </button>
            </span>
        </div>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="">Input with icon text action</label>
        <div class="tn-input-group">
            <input class="" type="text" id="" name="" value="1000000">
            <span class="tn-input-group__addon tn-input-group__addon--button">
                <button class="tn-button tn-button--icon tn-button--text">
                    <span class="tn-icon tn-icon--chevron tn-icon--medium" role="presentation"></span>
                </button>
            </span>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}

<br>
