---
title: Action Bar
id: action-bar
keywords: action bar, action, bar
sidebar: left-navigation-sidebar
toc: false
permalink: components/action-bar.html
folder: components
---

The Action Bar is located at the top of the page and is used for the following:
{: .docs-intro}
- Page title
- Main Actions for the page

<br>

## Action bar with back button, description and action buttons.
{% capture default-action-bar %}
<div class="fd-action-bar">
    <div class="fd-action-bar__back">
        <button class="fd-button--light fd-button--compact sap-icon--nav-back"></button>
    </div>
    <div class="fd-action-bar__header">
        <h1 class="fd-action-bar__title">
        Page Title
        </h1>
        <p class="fd-action-bar__description">Action bar Description </p>
    </div>
    <div class="fd-action-bar__actions">
        <button class=" fd-button--primary fd-button--l">Button</button>
        <button class=" fd-button--main fd-button--l">Button</button>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-action-bar %}

<br/>

## Action bar with no Back button

{% capture default-action-bar-multi %}
<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <h1 class="fd-action-bar__title">
            Page Title
        </h1>
        <p class="fd-action-bar__description">Action bar Description </p>
    </div>
    <div class="fd-action-bar__actions">
        <button class=" fd-button--primary fd-button--l">Button</button>
        <button class=" fd-button--main fd-button--l">Button</button>
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
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button--light sap-icon--overflow"
                    aria-controls="wgxzK859" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                </div>
                <div class="fd-popover__body" aria-hidden="true" id="wgxzK859">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list">
                            <li><a href="#" class="fd-menu__item">Edit</a></li>
                            <li><a href="#" class="fd-menu__item">Delete</a></li>
                            <li><a href="#" class="fd-menu__item">Assign</a></li>
                            <li><a href="#" class="fd-menu__item">Expire</a></li>
                            <li><a href="#" class="fd-menu__item">Archive</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
</div>
{% endcapture %}

{% include display-component.html component=default-action-bar-menu %}

<br/>

## Action bar mobile view

{% capture default-action-bar-multi %}
<div style="width:319px">
    <div class="fd-action-bar">
        <div class="fd-action-bar__back">
            <button class="fd-button--light fd-button--compact sap-icon--nav-back"></button>
        </div>
        <div class="fd-action-bar__header">
            <h1 class="fd-action-bar__title">
                Action Bar with description and back button
            </h1>
        </div>
        <div class="fd-action-bar__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button--light sap-icon--overflow"
                    aria-controls="wgxzK85" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                </div>
                <div class="fd-popover__body" aria-hidden="true" id="wgxzK85">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list">
                            <li><a href="#" class="fd-menu__item">Option 1</a></li>
                            <li><a href="#" class="fd-menu__item">Option 2</a></li>
                            <li><a href="#" class="fd-menu__item">Option 3</a></li>
                            <li><a href="#" class="fd-menu__item">Option 4</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-action-bar-multi %}
