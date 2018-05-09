---
title: Action Bar
keywords: action bar, action, bar
sidebar: left-navigation-sidebar
toc: false
permalink: components/action-bar.html
folder: components
---
The Action Bar is located at the top of the page and is used for three main functions:
1. Display the title of the current page
2. Display the main Actions for the page

<hr>

## Title

The page title is displayed very prominently in the Action Bar. This is helpful for the user to know what page or part of the application is currently in use. The page title should be descriptive like "Your profile" or "Product #2342 - Red T-Shirt Type D"

{% capture default-action-bar %}
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">
          Page Title
      </h1>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-action-bar %}

<br/>

## Main Actions

Main actions that are performed on the object represented on the page can be displayed on the Action Bar. we recommend not putting more than four actions on the action bar.

{% capture default-action-bar-multi %}
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">
          Page Title
      </h1>
    </div>
    <div class="fd-action-bar__actions">
        <button class=" fd-button--secondary fd-button--l">Cancel</button>
        <button class=" fd-button--main fd-button--l">Save</button>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-action-bar-multi %}

<br/>

## Actions with Contextual menu

When you need to display more than four actions it is recommended to use the **Contextual Menu** to display all actions.

{% capture default-action-bar-menu %}
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">
          Page Title
      </h1>
    </div>
    <div class="fd-action-bar__actions">
        <div class="fd-dropdown">
            <button class=" fd-button--secondary fd-button--l sap-icon--vertical-grip"
                aria-controls="3cDQg427" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
            <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="3cDQg427">
                <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                <li><a href="#" class="fd-dropdown__item">Assign</a></li>
                <li><a href="#" class="fd-dropdown__item">Expire</a></li>
                <li><a href="#" class="fd-dropdown__item">Archive</a></li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-action-bar-menu %}
