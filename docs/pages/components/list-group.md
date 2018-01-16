---
title: List
keywords: list group, lists group, list, lists, groups
sidebar: left-navigation-sidebar
toc: false
permalink: list-group.html
folder: components
---

The List Component can be used to display a list of items with simple information such as - scopes, names, etc.

<hr>

## Simple List

You can use a link to allow the user to access more information about list item.

{% capture list-group-default %}
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
    <li class="tn-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-default %}

<br>

## Lists with Action

The List items can also contain quick actions, like: remove, edit, copy, etc.

{% capture list-group-action %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        List item 1
        <span class="tn-list-group__action">
            <button class="tn-button tn-button--icon tn-button--text tn-button--small" aria-label="Delete">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
        </span>
    </li>
    <li class="tn-list-group__item">
        List item 2
        <span class="tn-list-group__action">
            <button class="tn-button tn-button--icon tn-button--text tn-button--small">
                <span class="tn-icon tn-icon--edit" role="presentation"></span>
            </button>
        </span>
    </li>
    <li class="tn-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        <span class="tn-list-group__action">
            <button class="tn-button tn-button--icon tn-button--text tn-button--small">
                <span class="tn-icon tn-icon--clone" role="presentation"></span>
            </button>
        </span>
    </li>
    <li class="tn-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <span class="tn-list-group__action">
            <button class="tn-button tn-button--icon tn-button--text tn-button--small">
                <span class="tn-icon tn-icon--options" role="presentation"></span>
            </button>
        </span>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-action %}

<br>


## List with Check boxes

Checkboxes can be used on the left, that enables the user to select multiple items for bulk actions.

{% capture list-group-actions-form %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        <div class="tn-form__item tn-form__item--check">
            <label class="tn-form__label" for="checkbox-1">
                <input class="tn-form__control" type="checkbox" id="checkbox-1">
                List item 1
            </label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-form__item tn-form__item--check">
            <label class="tn-form__label" for="checkbox-2">
                <input type="checkbox" class="tn-form__control" id="checkbox-2">
                List item 2
            </label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-form__item tn-form__item--check">
            <label class="tn-form__label" for="checkbox-3">
                <input type="checkbox" class="tn-form__control" id="checkbox-3">
                List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
            </label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-form__item tn-form__item--check">
            <label class="tn-form__label" for="checkbox-4">
                <input type="checkbox" class="tn-form__control" id="checkbox-4">
                List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </label>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-actions-form %}


<br>
