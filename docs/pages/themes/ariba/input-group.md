---
title: Ariba Input-Group
keywords: input group, input groups, input, groups, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/input-group.html
folder: ariba
---
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">


The input group includes form inputs with add-ons that allow the user to better understand the information being entered.

<hr/>

## Text add-on

The Input with text add-on component is typically used to specify the type of the data being entered, such as currency or unit of measure. This add-on can be placed at the left or right of the input element.

<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-b-group">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-group'>
{% capture text-addon %}

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Character Counter Example</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-form__control" type="text" id="" name="" value="This is a test">
            <span class="fd-input-group__addon fd-input-group__addon--after">9/50</span>
        </div>
    </div>
</div>
<br>
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Right Aligned Text Addon</label>
        <div class="fd-input-group fd-input-group--after">
            <input class="fd-form__control" type="text" id="" value="" placeholder='distance'>
            <span class="fd-input-group__addon fd-input-group__addon--after">km/h</span>
        </div>
    </div>
</div>
<br>
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Left Aligned Text Addon</label>
        <div class="fd-input-group fd-input-group--before">
            <span class="fd-input-group__addon fd-input-group__addon--before">km/h</span>
            <input type="text" class="fd-form__control" id="" value="19387309">
        </div>
    </div>
</div>
<br>
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Left + Right Aligned Text Addon</label>
        <div class="fd-input-group fd-input-group--before --after">
            <span class="fd-input-group__addon fd-input-group__addon--before ">$</span>
            <input type="text" class="fd-form__control" id="" value="" placeholder='Dollar amount'>
            <span class="fd-input-group__addon fd-input-group__addon--after ">USD</span>
        </div>
    </div>
</div>
<br>
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Large Example</label>
        <div class="fd-input-group fd-input-group--before --after --l">
            <span class="fd-input-group__addon fd-input-group__addon--before">$</span>
            <input type="text" class="fd-form__control --l" id="" value="" placeholder='Dollar amount'>
            <span class="fd-input-group__addon fd-input-group__addon--after">USD</span>
        </div>
    </div>
</div>

{% endcapture %}

{% include display-component.html component=text-addon %}
</div>

<br />

## Input with icons

The Input with add-on supports icons.

<div>
    <label class="fd-form__label " for="ImBw4551111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw4551111" class="toggle-rtl" aria-controls="rtl-contianer-b-icon">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-b-icon'>
{% capture input-action %}

<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Right Aligned Ariba Icon Addon</label>
        <div class="fd-input-group fd-input-group--after">
            <input type="text" class="fd-form__control" id="" value="" placeholder='distance'>
            <span class="fd-input-group__addon fd-input-group__addon--after ariba-icon--grade"></span>
        </div>
    </div>
</div>
<br>
<div class="fd-form__group">
    <div class="fd-form__item">
        <label class="fd-form__label" for="">Right Aligned SAP Icon Addon</label>
        <div class="fd-input-group fd-input-group--after">
            <input type="text" class="fd-form__control" id="" value="" placeholder='distance'>
            <span class="fd-input-group__addon fd-input-group__addon--after sap-icon--product"></span>
        </div>
    </div>
</div>
<br>

<div class="fd-form__group">
    <div class="fd-form__item">
       <label class="fd-form__label" for="">Left Aligned SAP Icon Addon</label>
        <div class="fd-input-group fd-input-group--before">
            <span class="fd-input-group__addon fd-input-group__addon--before sap-icon--temperature"></span>
            <input type="text" class="fd-form__control" id="" value="19387309">
        </div>
    </div>
</div>
<br>

<div class="fd-form__group">
    <div class="fd-form__item">
       <label class="fd-form__label" for="">Left + Right Aligned Icon Addon</label>
        <div class="fd-input-group fd-input-group--before --after">
            <span class="fd-input-group__addon fd-input-group__addon--before sap-icon--opportunity"></span>
            <input type="text" class="fd-form__control" id="" value="" placeholder='Dollar amount'>
            <span class="fd-input-group__addon fd-input-group__addon--after ariba-icon--pinned"></span>
        </div>
    </div>
</div>
<br>
{% endcapture %}

{% include display-component.html component=input-action %}
</div>


<br/>