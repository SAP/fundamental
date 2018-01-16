---
title: Buttons
keywords: button, buttons
sidebar: left-navigation-sidebar
toc: false
permalink: button.html
folder: components
---

The Buttons are components that let the user perform an actions. For example: saving a form, submitting data to the server, adding one element to a list, etc.

<hr>

## Standard button
Uses the main action color and perform the most important or primary actions on screen. It also support icons along with the caption text, or the icon alone.

{% capture button-standard %}
<button class="fd-button">
    Button
</button>
<button class="fd-button">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--icon" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard %}

<br/>

## Standard button sizes
The buttons can be set to three sizes: **small**, **default** and **large**.

{% capture button-standard-sizes %}
<button class="fd-button fd-button--small">
    Small Button
</button>
<button class="fd-button fd-button--small">
    <span class="fd-icon fd-icon--checked fd-icon--small" role="presentation"></span>
    Small Button
</button>
<button class="fd-button fd-button--icon fd-button--small" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--small" role="presentation"></span>
</button>

<button class="fd-button">
    Default Button
</button>
<button class="fd-button">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Default Button
</button>
<button class="fd-button fd-button--icon" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button fd-button--large">
    Large Button
</button>
<button class="fd-button fd-button--large">
    <span class="fd-icon fd-icon--checked fd-icon--large" role="presentation"></span>
    Large Button
</button>
<button class="fd-button fd-button--icon fd-button--large" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--large" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard-sizes %}

<br/>

## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons.
* **Disabled**: It cannot be clicked/tapped. One use of this state is to disable the "Save" button on a form, until all the data is entered correctly and the form can be saved.

{% capture button-standard-state %}
<button class="fd-button">
    Button
</button>
<button class="fd-button">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--icon" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button" aria-selected="true">
    Button
</button>
<button class="fd-button" aria-selected="true">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--icon" aria-selected="true" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button" aria-disabled="true" disabled>
    Button
</button>
<button class="fd-button" aria-disabled="true" disabled>
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--icon" aria-disabled="true" disabled aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard-state %}

<br>

## Text button
The text button is used to let the user perform other actions that are less important that the primary actions; secondary actions.

{% capture text-buttons %}
<button class="fd-button fd-button--text">
    Text Button
</button>
<button class="fd-button fd-button--text">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>
{% endcapture %}

{% include display-component.html component=text-buttons %}

<br>

## Text button sizes
The text button support the same sizes as the Standard button.

{% capture text-button-sizes %}
<button class="fd-button fd-button--text fd-button--small">
    Small Text Button
</button>
<button class="fd-button fd-button--text fd-button--small">
    <span class="fd-icon fd-icon--checked fd-icon--small" role="presentation"></span>
    Small Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--small" role="presentation"></span>
</button>

<button class="fd-button fd-button--text">
    Default Text Button
</button>
<button class="fd-button fd-button--text">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Default Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button fd-button--text fd-button--large">
    Large Text Button
</button>
<button class="fd-button fd-button--text fd-button--large">
    <span class="fd-icon fd-icon--checked fd-icon--large" role="presentation"></span>
    Large Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon fd-button--large" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--large" role="presentation"></span>
</button>
{% endcapture %}

{% include display-component.html component=text-button-sizes %}

<br>

## Text button state
The text button can be set to: **normal**, **selected** and **disabled** state.

{% capture text-button-state %}
<button class="fd-button fd-button--text">
    Text Button
</button>
<button class="fd-button fd-button--text">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button fd-button--text" aria-selected="true">
    Text Button
</button>
<button class="fd-button fd-button--text" aria-selected="true">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon" aria-selected="true" aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>

<button class="fd-button fd-button--text" aria-disabled="true" disabled>
    Text Button
</button>
<button class="fd-button fd-button--text" aria-disabled="true" disabled>
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Text Button
</button>
<button class="fd-button fd-button--text fd-button--icon" aria-disabled="true" disabled aria-label="BUTTON_LABEL">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
</button>
{% endcapture %}

{% include display-component.html component=text-button-state %}

<br/>

## Buttons priority
When displaying various actions together, they can be prioritized by using a **Standard button** for the Primary Action and a **Text button** for the other actions. The Primary action should be always on the right side.

{% capture button-priority %}
<button class="fd-button fd-button--text">
    Cancel
</button>
<button class="fd-button">
    Save
</button>
{% endcapture %}

{% include display-component.html component=button-priority %}

<br/>

## Link Button
The link button let the user navigate to a different page instead of performing an action.

{% capture link-button %}
<button class="fd-button fd-button--link">
    Link Button
</button>
{% endcapture %}

{% include display-component.html component=link-button %}

<br>

## ActionBar Button
The ActionBar button is used on the **ActionBar** Component. It can also be used for standalone actions.

{% capture icon-button %}
<button class="fd-button fd-button--text fd-button--action-bar">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--text fd-button--action-bar">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
<button class="fd-button fd-button--action-bar">
    <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
    Button
</button>
{% endcapture %}

{% include display-component.html component=icon-button %}

<br>

## Contextual menu button
The “more” contextual menu is used with Cards or Tables when there is additional functionality available for the data shown in the Card or Table row, and trying to expose that functionality would clutter the interface.

{% capture contextual-button %}
<div class="fd-dropdown">
    <button class="fd-button fd-button--icon fd-button--text" aria-controls="nH3Yk786" aria-haspopup="true" aria-label="More">
        <span class="fd-icon fd-icon--more fd-icon--medium" role="presentation"></span>
    </button>
    <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="nH3Yk786">
        <li><a href="#" class="fd-dropdown__item">Pellentesque metus</a></li>
        <li><a href="#" class="fd-dropdown__item">Duis malesuada odio volutpat</a></li>
        <li><a href="#" class="fd-dropdown__item">Suspendisse</a></li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=contextual-button %}

<br/>


## Contextual menu button state
It can be also be set to a **disabled** state.

{% capture contextual-button-disabled %}
<div class="fd-dropdown">
    <button class="fd-button fd-button--icon fd-button--text is-disabled" aria-controls="V9HDS171" aria-haspopup="true" aria-label="More">
        <span class="fd-icon fd-icon--more fd-icon--medium" role="presentation"></span>
    </button>
</div>
{% endcapture %}

{% include display-component.html component=contextual-button-disabled %}
