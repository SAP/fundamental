---
title: Ariba Theme Buttons
keywords: button, buttons, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/button.html
folder: ariba
---
     
<link rel="stylesheet" type="text/css" href="/css/fundamental-ui-ariba.css">

The Buttons allow users to perform actions. The priority of buttons within a page should be considered. For instance, only use the main button once within a page or modal.
Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.

<hr>

## Button Types
- **Action Bar Button**: `--action-bar` modifier is required to render the Main button. There should only be one main button on the page or modal. This is the main call to action.
- **Primary Button**: The default button style with the base class `fd-button`. There can be more than one primary button on a single page or view such as “Approve” or “Reject”.
- **Secondary Button**: `--secondary` is required to render the Secondary button. There can be more than one secondary button on the page. A common use case is “Cancel”.
- **Toolbar Button**: `--toolbar` is required to render the Toolbar button. This button is used inside the toolbar component.
- **Semantic Buttons**: Semantic modifiers `--positive` for approve and `--negative` for reject can be applied to the button.
- **Round Buttons**: `--round` modifier is required to render the round button. This is kind of Toolbar button but can be used for all kind of variations.

{% capture button %}
<button class="fd-button--action-bar">Action Bar Button</button>
<button class="fd-button">Primary Button</button>
<button class="fd-button--secondary">Secondary Button</button>
<button class="fd-button--toolbar">Toolbar Button</button>
<button class="fd-button--positive">Accept</button>
<button class="fd-button--negative">Reject</button>
<button class="fd-button--round ariba-icon--add-template"></button>

{% endcapture %}
{% include display-component.html component=button %}

<br/>

## Button Sizes
There are five different sizes can be rendered with modifiers: `--xs`, `--s`, `--compact`, default, `--l` and `--xl`.
{% capture button %}
<button class=" fd-button fd-button--xs">Button</button>
<button class=" fd-button fd-button--s">Button</button>
<button class=" fd-button fd-button--compact">Button</button>
<button class=" fd-button">Button</button>
<button class=" fd-button fd-button--l">Button</button>
<button class=" fd-button fd-button--xl">Button</button>
<br><br>
<button class="fd-button--round fd-button--xs ariba-icon--add-template"></button>
<button class="fd-button--round fd-button--s ariba-icon--add-template"></button>
<button class="fd-button--round ariba-icon--add-template"></button>
<button class="fd-button--round fd-button--l ariba-icon--add-template"></button>
<button class="fd-button--round fd-button--xl ariba-icon--add-template"></button>
{% endcapture %}
{% include display-component.html component=button %}

<br>

## Buttons with Icon
Button can have an icon with text or just and icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the avialable icons can be found on the <a href="icons.html">icons page</a>.
{% capture button %}
<button class=" fd-button fd-button--xs ariba-icon--contract">Button</button>
<button class=" fd-button fd-button--s ariba-icon--contract">Button</button>
<button class=" fd-button fd-button--compact ariba-icon--contract">Button</button>
<button class=" fd-button ariba-icon--contract">Button</button>
<button class=" fd-button fd-button--l ariba-icon--contract">Button</button>
<button class=" fd-button fd-button--xl ariba-icon--contract">Button</button>
<br><br>
<button class=" fd-button fd-button--xs --icon-only ariba-icon--contract"></button>
<button class=" fd-button fd-button--s --icon-only ariba-icon--contract"></button>
<button class=" fd-button fd-button--compact --icon-only ariba-icon--contract"></button>
<button class=" fd-button --icon-only ariba-icon--contract"></button>
<button class=" fd-button fd-button--l --icon-only ariba-icon--contract"></button>
<button class=" fd-button fd-button--xl --icon-only ariba-icon--contract"></button>
<br><br>
<button class="fd-button--action-bar sap-icon--cart">Add to Cart</button>
<button class="fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button--secondary sap-icon--cart">Add to Cart</button>
<button class="fd-button--toolbar sap-icon--filter">Filter</button>
<button class="fd-button--action-bar fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button--action-bar fd-button--negative sap-icon--decline">Reject</button>
<br><br>
<button class="fd-button--action-bar --icon-only sap-icon--cart"></button>
<button class="fd-button --icon-only sap-icon--cart"></button>
<button class="fd-button--secondary --icon-only sap-icon--cart"></button>
<button class="fd-button--toolbar --icon-only sap-icon--filter"></button>
<button class="fd-button--action-bar --icon-only fd-button--positive sap-icon--accept"></button>
<button class="fd-button--action-bar --icon-only fd-button--negative sap-icon--decline"></button>
<button class="fd-button--main fd-button--round ariba-icon--pull-up"></button>

{% endcapture %}
{% include display-component.html component=button %}

<br>

## RTL Support
Button can have an icon with text or just and icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the avialable icons can be found on the <a href="icons.html">icons page</a>.
{% capture button %}
<div class='rtl' style='direction:rtl'>
    <button class="fd-button fd-button--xs sap-icon--cart">Add to Cart</button>
    <button class="fd-button--main fd-button--xs sap-icon--cart">Add to Cart</button>
    <button class="fd-button--secondary fd-button--xs sap-icon--cart">Add to Cart</button>
    <button class="fd-button--toolbar fd-button--xs sap-icon--filter">Filter</button>
    <button class="fd-button--main fd-button--xs fd-button--positive sap-icon--accept">Approve</button>
    <button class="fd-button--main fd-button--xs fd-button--negative sap-icon--decline">Reject</button>
</div>

{% endcapture %}
{% include display-component.html component=button %}

## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons. This state can be rendered using `is-selected` class or `aria-selected="true"` attribute for accessibility.
* **Disabled**: It cannot be clicked/tapped.  This state can be rendered using `is-disabled` class or `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button--action-bar">Normal State</button>
<button class="fd-button--action-bar is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--action-bar is-disabled" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button">Normal State</button>
<button class="fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button is-disabled" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--secondary">Normal State</button>
<button class="fd-button--secondary is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--secondary is-disabled" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--toolbar">Normal State</button>
<button class="fd-button--toolbar is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--toolbar is-disabled" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--positive">Normal State</button>
<button class="fd-button--positive is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--positive is-disabled" aria-disabled="true">Disabled State</button>
<br><br>
<button class=" fd-button--negative">Normal State</button>
<button class=" fd-button--negative is-selected" aria-selected="true">Selected State</button>
<button class=" fd-button--negative is-disabled" aria-disabled="true">Disabled State</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}


## Button Group
Group a series of buttons together on a single line with the button group

## Extra Small(XS) Button Group
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

## Small(S) Button Group
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

## Compact Button Group
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

## Default(Large) Button Group
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
.fd-button,
.fd-button-group,
[class*="fd-button--"]{
	margin-right: 10px;
}

[class*="fd-button--grouped"]{
	margin-right: 0px;
}


</style>
