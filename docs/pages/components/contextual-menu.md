---
title: Contextual Menu
keywords: contextual, menu
sidebar: left-navigation-sidebar
toc: false
permalink: components/contextual-menu.html
folder: components
summary:
---

A More Options icon or the word, More, is used to indicate when there are more options than there is room to display them. On click or tap, the user to access a contextual menu.

<hr>

## With Icon
{% capture default-alert %}
<div class="fd-dropdown">
    <button class=" fd-button--secondary sap-icon--vertical-grip" aria-controls="pQqQR213"
    aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
    <nav class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="pQqQR213">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Pellentesque metus</a></li>
        <li><a href="#" class="fd-dropdown__item">Duis malesuada odio volutpat</a></li>
        <li><a href="#" class="fd-dropdown__item">Suspendisse</a></li>
        <li><a href="#" class="fd-dropdown__item">Donec mattis arcu et velit</a></li>
      </ul>
    </nav>
</div>

{% endcapture %}
{% include display-component.html component=default-alert %}

<br>

## With Text Button and Group Header

{% capture default-alert %}
<div class="fd-dropdown">
    <button class="fd-button" aria-controls="8jxLG206" aria-haspopup="true"
    aria-expanded="false" aria-label="More">More</button>
    <nav class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="8jxLG206">
      <ul class="fd-dropdown__list">
        <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
        <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
      </ul>
      <div class="fd-dropdown__group">
        <h1 class="fd-dropdown__title">Group Header</h1>
        <ul class="fd-dropdown__list">
          <li><a href="#" class="fd-dropdown__item">Option 4</a></li>
          <li><a href="#" class="fd-dropdown__item">Option 5</a></li>
          <li><a href="#" class="fd-dropdown__item">Option 6</a></li>
        </ul>
      </div>
    </nav>
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
    <button class=" fd-button--icon fd-button--primary is-disabled" aria-controls="BiT4b445" aria-haspopup="true" aria-expanded="false" aria-label="More">More</button>
</div>
{% endcapture %}
{% include display-component.html component=default-alert %}
