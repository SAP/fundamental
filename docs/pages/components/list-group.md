---
title: List Group
keywords: list group, lists group, list, lists, groups
sidebar: left-navigation-sidebar
toc: false
permalink: components/list-group.html
folder: components
---

The List Component can be used to display a list of items with simple information such as - scopes, names, etc.

<hr>

## Simple List

You can use a link to allow the user to access more information about list item.

{% capture list-group-default %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
    </li>
    <li class="fd-list-group__item">
        List item 2
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-default %}

<br>

## Lists with Action

The List items can also contain quick actions, like: remove, edit, copy, etc.

{% capture list-group-action %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
        <span class="fd-list-group__action">
            <button class=" fd-button--secondary sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 2
        <span class="fd-list-group__action">
            <button class=" fd-button--secondary sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        <span class="fd-list-group__action">
            <button class=" fd-button--secondary sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <span class="fd-list-group__action">
            <button class=" fd-button--secondary sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-action %}

<br>


## List with Check boxes

Checkboxes can be used on the left, that enables the user to select multiple items for bulk actions.

{% capture list-group-actions-form %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="121Sd939">
                <input type="checkbox" class="fd-form__control" id="121Sd939">
                List item 1
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="CndSd399">
                <input type="checkbox" class="fd-form__control" id="CndSd399">
                List item 2 sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="S8jyH416">
                <input type="checkbox" class="fd-form__control" id="S8jyH416">
                List item 3
            </label>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=list-group-actions-form %}
