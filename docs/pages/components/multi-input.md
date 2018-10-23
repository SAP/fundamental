---
title: Multi Input
keywords: multi input
sidebar: left-navigation-sidebar
toc: false
permalink: components/multi-input.html
folder: components
summary:
---


## Default

{% capture default %}
<div class="fd-multi-input">
    <div class="fd-multi-input-field">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
                    <div class="fd-input-group fd-input-group--after">
                        <input type="text" class="fd-input" id="" placeholder="Select Fruit">
                        <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                            <button class=" fd-button--light sap-icon--navigation-down-arrow"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="F4GcX348">
                <nav class="fd-menu">
                <ul class="fd-menu__list">
                    <li>
                        <label for="a" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="a">
                            Apple
                        </label>
                    </li>
                    <li>
                        <label for="b" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="b">
                            Berry
                        </label>
                    </li>
                    <li>
                        <label for="c" class="fd-menu__item">
                            <input type="checkbox" class="fd-checkbox" id="c">
                            Banana
                        </label>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="fd-multi-input-tags">
        <span class="fd-tag" role="button">Apple</span>
        <span class="fd-tag" role="button">Berry</span>
        <span class="fd-tag" role="button">Banana</span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
