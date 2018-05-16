---
title: Action Bar
keywords: action bar, action, bar
sidebar: left-navigation-sidebar
toc: false
permalink: components/action-bar.html
folder: components
---
The Action Bar is located at the top of the page and is used for the following:
- Page title
- Main Actions for the page

<hr>

## Title
The page title is displayed prominently in the Action Bar. This is helpful for the user to know exactly where they are.

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
Display main actions within the Action bar. This allows for users to find important page actions in a consistent area no matter what page they are on within the application.

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

## Several Main Actions in a Contextual Menu

When there are several main actions for a page, consider displaying them under a contextual menu. This allows the user to look in the same position they are used to but avoids cluttering the action bar with more than 3-4 actions. This also works well for a responsive/adaptive application.

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
