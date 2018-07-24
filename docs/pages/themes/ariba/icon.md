---
title: Ariba Icon Set
keywords: icon, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/icon.html
folder: components
summary:
---

<link rel="stylesheet" type="text/css" href="/css/fundamental-ui-ariba-icons.css">
  
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
