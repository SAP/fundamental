---
title: Button Group
keywords: button, buttons, button group
sidebar: left-navigation-sidebar
toc: false
permalink: components/button-group.html
folder: components
---

Group a series of buttons together on a single line with the button group

<hr>

## Extra Small Size (XS)
{% capture button-group-xsmall %}
<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--xs sap-icon--survey"></button>
  <button class="fd-button--grouped fd-button--xs sap-icon--pie-chart" aria-pressed="true"></button>
  <button class="fd-button--grouped fd-button--xs sap-icon--pool"></button>
</div>

<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--xs" aria-pressed="true">Left</button>
  <button class="fd-button--grouped fd-button--xs">Middle</button>
  <button class="fd-button--grouped fd-button--xs">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-xsmall %}

<br>

## Small Size (S)
{% capture button-group-small %}
<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--s sap-icon--survey"></button>
  <button class="fd-button--grouped fd-button--s sap-icon--pie-chart" aria-pressed="true"></button>
  <button class="fd-button--grouped fd-button--s sap-icon--pool"></button>
</div>

<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--s" aria-pressed="true">Left</button>
  <button class="fd-button--grouped fd-button--s">Middle</button>
  <button class="fd-button--grouped fd-button--s">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-small %}

<br>

## Compact Size
Compact size renders bigger icons with minimal padding inside the button.
{% capture button-group-compact %}
<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--compact sap-icon--survey"></button>
  <button class="fd-button--grouped fd-button--compact sap-icon--pie-chart" aria-pressed="true"></button>
  <button class="fd-button--grouped fd-button--compact sap-icon--pool"></button>
</div>

<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped fd-button--compact" aria-pressed="true">Left</button>
  <button class="fd-button--grouped fd-button--compact">Middle</button>
  <button class="fd-button--grouped fd-button--compact">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-compact %}

<br>

## Default Size (Large)
The large size is rendered by default with no additional modifier classes.
{% capture button-group-default %}
<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped sap-icon--survey"></button>
  <button class="fd-button--grouped sap-icon--pie-chart" aria-pressed="true"></button>
  <button class="fd-button--grouped sap-icon--pool"></button>
</div>

<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button--grouped" aria-pressed="true">Left</button>
  <button class="fd-button--grouped">Middle</button>
  <button class="fd-button--grouped">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-default %}

<style media="screen">
.fd-button-group,
[class*="fd-button-group--"]{
	margin-right: 10px;
}
</style>
