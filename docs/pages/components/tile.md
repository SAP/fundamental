---
title: Tile
keywords: tile
sidebar: left-navigation-sidebar
toc: false
permalink: components/tile.html
folder: components
summary:
---

- A Tile component can be used to display information in a simple container format.
- A collection of tile can be displayed using [`fd-tile-grid`](tile-grid.html).

<hr>

## Simple Tile

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
      <p>Tile Description</p>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Tile with `.fd-media` container

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-identifier--m fd-identifier--transparent sap-icon--home"></span>
    </div>
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
    </div>
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
      <p>Tile Description</p>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-image--m" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
    </div>
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
    </div>
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
      <p>Tile Description</p>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

## Tile with `.fd-actions` container

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
    <div class="fd-tile__actions">
       <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>
       <nav class="fd-dropdown__menu" aria-hidden="true" id="WQIDD179">
             <ul class="fd-dropdown__list">
               <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
               <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
               <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
             </ul>
           </nav>
       </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Tile as a Button
Add `role=button` to rendering a tile as a button

{% capture tile %}
<div class="fd-tile" role="button">
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Product Tile
`fd-product-tile` can be used to display product information.

{% capture tile %}
<div class="fd-product-tile">
    <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
    <div class="fd-product-tile__content">
      <h2 class="fd-product-tile__title">Default Product Tile</h2>
    </div>
</div>

<div class="fd-product-tile" role="button">
    <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
    <div class="fd-product-tile__content">
      <h2 class="fd-product-tile__title">Product Tile Button</h2>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Disabled state
Add class `is-disabled` and/or `aria-disabled="true"` attribute

{% capture tile %}
<div class="fd-tile" aria-disabled="true">
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
</div>

<br>

<div class="fd-tile" aria-disabled="true">
    <div class="fd-tile__media">
        <span class=" fd-identifier--m fd-identifier--transparent sap-icon--home"></span>
    </div>
    <div class="fd-tile__content">
      <h2 class="fd-tile__title">Tile Title</h2>
    </div>
</div>

<br>

<div class="fd-product-tile" aria-disabled="true">
    <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
    <div class="fd-product-tile__content">
      <h2 class="fd-product-tile__title">Disabled Product Tile</h2>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile %}

<br>
