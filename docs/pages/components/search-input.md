---
title: Search Input
id: search-input
keywords: search input
sidebar: left-navigation-sidebar
toc: false
permalink: components/search-input.html
folder: components
summary:
---

{% capture default %}
<div class="fd-search-input">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX348b" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--after">
                    <input type="text" class="fd-input" id="" value="Ba" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                        <button class=" fd-button--light sap-icon--search"></button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348b">
            <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>nana</a></li>
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>rk</a></li>
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>ts</a></li>
            </ul>
            </nav>
        </div>
    </div>
</div>

<br>

<div class="fd-search-input">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX34b" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                    <input type="text" class="fd-input fd-input--compact" id="" value="Ba" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                        <button class=" fd-button--light sap-icon--search"></button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34b">
            <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>nana</a></li>
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>rk</a></li>
                <li><a href="#" class="fd-menu__item"><strong>Ba</strong>ts</a></li>
            </ul>
            </nav>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
