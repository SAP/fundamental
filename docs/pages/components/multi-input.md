---
title: Multi Input
keywords: multi input
sidebar: left-navigation-sidebar
toc: false
permalink: components/multi-input.html
folder: components
summary:
---


## Default and Compact sizes

{% capture default %}
<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX348"
                aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group fd-input-group--after">
                        <input type="text" class="fd-input" id="" placeholder="Select Fruit">
                        <span class="fd-input-group__addon fd-input-group__addon--after
                        fd-input-group__addon--button">
                            <button class=" fd-button--light sap-icon--navigation-down-arrow"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348">
                <nav class="fd-menu">
                <ul class="fd-menu__list">
                    <li>
                        <label for="a1" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="a1">
                            Apple
                        </label>
                    </li>
                    <li>
                        <label for="b1" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="b1">
                            Berry
                        </label>
                    </li>
                    <li>
                        <label for="c1" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="c1">
                            Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="fd-multi-input-tags">
        <span class="fd-token" role="button">Apple</span>
        <span class="fd-token" role="button">Berry</span>
        <span class="fd-token" role="button">Banana</span>
    </div>
</div>

<br>

<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX34"
                aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                        <input type="text" class="fd-input fd-input--compact" id="" placeholder="Select Fruit">
                        <span class="fd-input-group__addon fd-input-group__addon--after
                        fd-input-group__addon--button">
                            <button class=" fd-button--light sap-icon--navigation-down-arrow"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34">
                <nav class="fd-menu">
                <ul class="fd-menu__list">
                    <li>
                        <label for="a2" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="a2">
                            Apple
                        </label>
                    </li>
                    <li>
                        <label for="b2" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="b2">
                            Berry
                        </label>
                    </li>
                    <li>
                        <label for="c2" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="c2">
                            Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="fd-multi-input-tags">
        <span class="fd-token" role="button">Apple</span>
        <span class="fd-token" role="button">Berry</span>
        <span class="fd-token" role="button">Banana</span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
