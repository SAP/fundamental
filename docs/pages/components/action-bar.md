---
title: Action Bar
keywords: action bar, action, bar
sidebar: left-navigation-sidebar
toc: false
permalink: action-bar.html
folder: components
---
The Action Bar is located at the top of the page and is used for three main functions:
1. Display the title of the current page
2. Navigate back on a detail page
3. Display the main Actions for the page

<hr>

## Title

The page title is displayed very prominently in the Action Bar. This is helpful for the user to know what page or part of the application is currently in use. The page title should be descriptive like "Your profile" or "Product #2342 - Red T-Shirt Type D"

{% capture default-action-bar %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Your profile
    </h1>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar %}

<br/>

## Back Button

The Action bar can display a "Back button" to allow the user to navigate back to the previous page in the navigation hierarchy. For example if the user click an item in a table row and the application navigate to the details page, that details page should have the back button to give the user the posibility to go back to the table.

{% capture default-action-bar-back %}
<header class="tn-action-bar">
    <div class="tn-action-bar__navigation">
        <button class="tn-button tn-button--text tn-button--icon tn-button--large" aria-label="Back">
            <span class="tn-icon tn-icon--backarrow tn-icon--large" role="presentation"></span>
        </button>
    </div>
    <h1 class="tn-action-bar__title">
        Product #2342 - Red T-Shirt Type D
    </h1>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-back %}

<br/>

## Main Actions

Main actions that are performed on the object represented on the page can be displayed on the Action Bar. we recommend not putting more than four actions on the action bar.

{% capture default-action-bar-multi %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
    <div class="tn-action-bar__actions">
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--edit tn-icon--medium" role="presentation"></span>
                Customize
            </button>
        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--link tn-icon--medium" role="presentation"></span>
                Link
            </button>
        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--sync tn-icon--medium" role="presentation"></span>
                Sync
            </button>
        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--clone tn-icon--medium" role="presentation"></span>
                Clone
            </button>
        </div>
    </div>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-multi %}

<br/>

## Actions with Contextual menu

When you need to display more than four actions it is recommended to use the **Contextual Menu** to display all actions.

{% capture default-action-bar-menu %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
    <div class="tn-action-bar__actions">
        <div class="tn-action-bar__action-item">
            <div class="tn-dropdown">
                <button class="tn-button tn-button--text tn-button--action-bar" aria-controls="3ewpS611" aria-haspopup="true" aria-expanded="false" aria-label="More">
                    <span class="tn-icon tn-icon--more tn-icon--medium" role="presentation"></span>
                    More
                </button>
                <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="3ewpS611">
                    <li><a href="#" class="tn-dropdown__item">Customize</a></li>
                    <li><a href="#" class="tn-dropdown__item">Combine</a></li>
                    <li><a href="#" class="tn-dropdown__item">Sync</a></li>
                    <li><a href="#" class="tn-dropdown__item">Clone</a></li>
                    <li><a href="#" class="tn-dropdown__item">Archive</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-menu %}

<br/>

## Edit mode actions

When the user is editing the content of the page, the Actions to Save or Discard/Cancel the changes are also displayed on the Action Bar. In this case the Primary action is styled as Standard button.

{% capture default-action-bar-multi %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
    <div class="tn-action-bar__actions">
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--close tn-icon--medium" role="presentation"></span>
                Cancel
            </button>
        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--action-bar">
                <span class="tn-icon tn-icon--checked tn-icon--medium" role="presentation"></span>
                Save
            </button>
        </div>
    </div>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-multi %}
