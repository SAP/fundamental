---
title: Contextual Menu
keywords: contextual, menu
sidebar: left-navigation-sidebar
toc: false
permalink: components/contextual-menu.html
folder: components
summary:
---

Contextual Menu can be used when you have more than 3 actions on an object.

<hr>

## With Icon
{% capture default-alert %}
<div class="fd-dropdown">
    <button class=" fd-button--icon fd-button--secondary sap-icon--vertical-grip" aria-controls="WQIDD179" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
    <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179">
        <li><a href="#" class="fd-dropdown__item">Pellentesque metus</a></li>
        <li><a href="#" class="fd-dropdown__item">Duis malesuada odio volutpat</a></li>
        <li><a href="#" class="fd-dropdown__item">Suspendisse</a></li>
        <li><a href="#" class="fd-dropdown__item">Donec mattis arcu et velit</a></li>
    </ul>
</div>
{% endcapture %}
{% include display-component.html component=default-alert %}

<br>

## With Text and Group Header

{% capture default-alert %}
<div class="fd-dropdown">
    <button class=" fd-button--text fd-button--secondary sap-icon--more" aria-controls="N9auM224" aria-haspopup="true" aria-expanded="false" aria-label="More">More</button>
    <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="N9auM224">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
            <ul class="fd-dropdown__group">
                <span class="fd-dropdown__separator" role="separator">Group Header</span>
                <li><a href="#" class="fd-dropdown__item">Option 4</a></li>
                <li><a href="#" class="fd-dropdown__item">Option 5</a></li>
                <li><a href="#" class="fd-dropdown__item">Option 6</a></li>
            </ul>
        </ul>
</div>
{% endcapture %}
{% include display-component.html component=default-alert %}

<br>

## Disabled State

{% capture default-alert %}
<div class="fd-dropdown">
    <button class=" fd-button--icon fd-button--secondary sap-icon--vertical-grip is-disabled" aria-controls="BiT4b445" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
</div>

<div class="fd-dropdown">
    <button class=" fd-button--icon fd-button--secondary is-disabled" aria-controls="BiT4b445" aria-haspopup="true" aria-expanded="false" aria-label="More">More</button>
</div>
{% endcapture %}
{% include display-component.html component=default-alert %}
