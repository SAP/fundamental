---
title: Tile Grid
id: tile-grid
keywords: tile grid
sidebar: left-navigation-sidebar
toc: false
permalink: components/tile-grid.html
folder: components
summary:
---

A tile grid is layout component used to display [`tiles`](tile.html) on a grid layout.
{: .docs-intro}

> This uses CSS grid which is [not supported by some older browsers](https://caniuse.com/#feat=css-grid). A flexbox fallback is included but it is recommended you test your page if you have a significant number of users on IE 11, for example.

> {{ site.data.strings.headerDisclaimer }}

## 3-col grid (default)

Also available as a modifier class `--3col`

{% capture tile %}
<div class="fd-tile-grid">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>


## 2 col grid

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## 4 col grid

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--4col">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## 5 col grid

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--5col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## 6 col grid

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Product Tile Grid (2 col)

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h3 class="fd-product-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## 6 col grid w/ span helpers
Shows use of helper classes `.fd-has-grid-row-span-2` and `.fd-has-grid-column-span-2`.

{% capture tile %}
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile fd-has-grid-row-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
    <div class="fd-tile fd-has-grid-column-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h3 class="fd-tile__title">Lorem ipsum</h3>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>
