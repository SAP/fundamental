---
title: Ariba Icon Set
keywords: icon, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/icon.html
folder: ariba
summary:
---

<link rel="stylesheet" type="text/css" href="/css/theme/ariba/fundamental-ui-ariba-icons.css">
  
Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun. Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.

<hr>

## Icon usage and size options
{% capture icon %}
<span class="ariba-icon--auction ariba-icon--s"></span>
<span class="ariba-icon--auction"></span>
<span class="ariba-icon--auction ariba-icon--m"></span>
<span class="ariba-icon--auction ariba-icon--l"></span>
<span class="ariba-icon--auction ariba-icon--xl"></span>
{% endcapture %}
{% include display-component.html component=icon class="icon" %}

<br />

## Available Icons
<div>
    <label class="fd-form__label " for="ImBw45511">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw45511" class="toggle-rtl" aria-controls="rtl-contianer">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>    
    <div id="rtl-contianer">
        {% for icon in site.data.themes.ariba.icons %}
        <div class="demo-icon-wrapper">
          <!-- <span class="sap-icon--{{ icon.name }} ariba-icon--s"></span>
          <span class="ariba-icon--{{ icon.name }}"></span>
          <span class="ariba-icon--{{ icon.name }} ariba-icon--m"></span>
          <span class="ariba-icon--{{ icon.name }} ariba-icon--l"></span> -->
          <span class="ariba-icon--{{ icon.name }} ariba-icon--xl"></span>
          <h5>.ariba-icon--{{ icon.name }}</h5>
        </div>
        {% endfor %}
    </div>
</div>
