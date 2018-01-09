---
title: Panel
keywords: panel
sidebar: left-navigation-sidebar
toc: false
permalink: panel.html
folder: components
summary:
---
Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page. Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

<hr/>

## Panel elements

The panel component can have elements like the **Panel Title**, the **Panel Actions**, **Panel Content** and **Panel Footer**. Use this elements to organize your panels in a easy way for the user to interact with the information displayed on the Panel.

{% capture default %}
<div class="tn-panel">
    <div class="tn-panel__header">
        <h1 class="tn-panel__title">
            Panel Title
        </h1>
        <div class="tn-panel__actions">
            Panel Actions
        </div>
    </div>

    <p>
        Panel content - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="tn-panel__footer">
        Panel Footer
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Panel Title

The panel title should be a descriptive name to identify the information displayed in the panel. Like *Users* or *Bills*.

{% capture panel-title %}
<div class="tn-panel">
    <div class="tn-panel__header">
        <h1 class="tn-panel__title">
            Panel Title
        </h1>
    </div>

    <p>
        Panel content - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
{% endcapture %}

{% include display-component.html component=panel-title %}

<br/>

## Panel Actions

The Panel Actions element is where you can put Actions that can be performed on the data displayed by the panel.

It is recommended to use icons along with the Actions Captions or only icons.

{% capture panel-actions %}
<div class="tn-panel">
    <div class="tn-panel__header">
        <h1 class="tn-panel__title">
            Panel Title
        </h1>
        <div class="tn-panel__actions">
            <button class="tn-button tn-button--text">
                <i class="tn-icon tn-icon--checked tn-icon--medium"></i>
                Approve
            </button>
            <button class="tn-button tn-button--text">
                <i class="tn-icon tn-icon--close tn-icon--medium"></i>
                Reject
            </button>
            <button class="tn-button tn-button--text tn-button--icon">
                <i class="tn-icon tn-icon--edit tn-icon--medium"></i>
            </button>
        </div>
    </div>

    <p>
        Panel content - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
{% endcapture %}

{% include display-component.html component=panel-actions %}

<br/>

## Panel Footer

The Panel Footer element is the place to put complementary information or navigation related to the content displayed by the panel.

{% capture panel-footer %}
<div class="tn-panel">
    <div class="tn-panel__header">
        <h1 class="tn-panel__title">
            Panel Title
        </h1>
    </div>

    <ul class="tn-list-group">
        <li class="tn-list-group__item">
            List item 1
        </li>
        <li class="tn-list-group__item">
            List item 2
        </li>
        <li class="tn-list-group__item">
            List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        </li>
    </ul>

    <div class="tn-panel__footer">
        Showing first 3 items.
        <button class="tn-button tn-button--link">
             Show All
        </button>
    </div>    
</div>
{% endcapture %}

{% include display-component.html component=panel-footer %}
