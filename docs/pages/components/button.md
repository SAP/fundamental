---
title: Buttons
keywords: button, buttons
sidebar: left-navigation-sidebar
toc: false
permalink: components/button.html
folder: components
---

The Buttons allow users to perform actions. The priority of buttons within a page should be considered. For instance, only use the main button once within a page or modal.
Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.

<hr>

## Button Types
- **Main Button**: `--main` modifier is required to render the Main button. There should only be one main button on the page or modal. This is the main call to action.
- **Primary Button**: The default button style with the base class `fd-button`. There can be more than one primary button on a single page or view such as “Approve” or “Reject”.
- **Secondary Button**: `--secondary` is required to render the Secondary button. There can be more than one secondary button on the page. A common use case is “Cancel”.
- **Toolbar Button**: `--toolbar` is required to render the Toolbar button. This button is used inside the toolbar component.
- **Semantic Buttons**: Semantic modifiers `--positive` for approve and `--negative` for reject can be applied to the button.

{% capture button %}
<button class="fd-button">Primary Button</button>
<button class="fd-button--main">Main Button</button>
<button class="fd-button--secondary">Secondary Button</button>
<button class="fd-button--toolbar">Toolbar Button</button>
<button class="fd-button--positive">Accept</button>
<button class=" fd-button--negative">Reject</button>

{% endcapture %}
{% include display-component.html component=button %}

<br/>

## Button Sizes
There are five different sizes can be rendered with modifiers: `--xs`, `--s`, `--compact`, default and `--l`.
{% capture button %}
<button class=" fd-button fd-button--xs">Button</button>
<button class=" fd-button fd-button--s">Button</button>
<button class=" fd-button fd-button--compact">Button</button>
<button class=" fd-button">Button</button>
<button class=" fd-button fd-button--l">Button</button>
{% endcapture %}
{% include display-component.html component=button %}

<br>

## Buttons with Icon
Button can have an icon with text or just and icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the avialable icons can be found on the <a href="icons.html">icons page</a>.
{% capture button %}
<button class="fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button--main sap-icon--cart">Add to Cart</button>
<button class="fd-button--secondary sap-icon--cart">Add to Cart</button>
<button class="fd-button--toolbar sap-icon--filter">Filter</button>
<button class="fd-button--main fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button--main fd-button--negative sap-icon--decline">Reject</button>
<br><br>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button--main sap-icon--cart"></button>
<button class="fd-button--secondary sap-icon--cart"></button>
<button class="fd-button--toolbar sap-icon--filter"></button>
<button class="fd-button--main fd-button--positive sap-icon--accept"></button>
<button class="fd-button--main fd-button--negative sap-icon--decline"></button>

{% endcapture %}
{% include display-component.html component=button %}

<br>

## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons. This state can be rendered using `is-selected` class or `aria-selected="true"` attribute for accessibility.
* **Disabled**: It cannot be clicked/tapped.  This state can be rendered using `is-disabled` class or `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button">Normal State</button>
<button class="fd-button--main">Normal State</button>
<button class="fd-button--secondary">Normal State</button>
<button class="fd-button--toolbar">Normal State</button>
<button class="fd-button--positive">Normal State</button>
<button class=" fd-button--negative">Normal State</button>
<br><br>
<button class="fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--main is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--secondary is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--toolbar is-selected" aria-selected="true">Selected State</button>
<button class="fd-button--positive is-selected" aria-selected="true">Selected State</button>
<button class=" fd-button--negative is-selected" aria-selected="true">Selected State</button>
<br><br>
<button class="fd-button is-disabled" aria-disabled="true">Disabled State</button>
<button class="fd-button--main is-disabled" aria-disabled="true">Disabled State</button>
<button class="fd-button--secondary is-disabled" aria-disabled="true">Disabled State</button>
<button class="fd-button--toolbar is-disabled" aria-disabled="true">Disabled State</button>
<button class="fd-button--positive is-disabled" aria-disabled="true">Disabled State</button>
<button class=" fd-button--negative is-disabled" aria-disabled="true">Disabled State</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}

<style media="screen">
.fd-button,
[class*="fd-button--"]{
	margin-right: 10px;
}
</style>
