---
title: Card
keywords: card
sidebar: left-navigation-sidebar
toc: false
permalink: card.html
folder: components
---

The Card is a container element, used to display information in a way the user can glance and find easily the information. They have common elements always on the same position and with similar visual style.

The cards can be [grouped](card-group.html) to display a set of the object of the same type.

Some common elements are styled by default:
* **Primary info**: used mainly to display names or titles.
* **Secondary info**: here you can add more information about the object.
* **Status**: you can signal the status of the object, for instance: active/inactive

<hr/>

## Default Card

Used to display static information only. The user should not interact with this card.

{% capture default-card %}
<div class="tn-card">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Primary info
         </h2>
         <p class="tn-card__description">
             Secondary info aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="tn-card__status">
             Status
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Button Card

Use this type of card to signal the user that there is more information behind the card. The user can access more information about the object by clicking/tapping on the card.

{% capture button-card %}
<div class="tn-card tn-card--button" role="button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Lorem ipsum dolor quam placeat numquam repellendus
         </h2>
         <p class="tn-card__description">
             Tenetur quam placeat obcaecati molestias voluptatibus dolorum ut.
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-card %}

<br>

## Disabled Card

Use this Card to signal the user he cannot interact with this object. The difference with the default card is that at some point in time the user may be able to interact with a card that's disabled. For example if the user doesn't have the right permissions to access the object represented by the card.

{% capture disabled-card %}
<div class="tn-card tn-card--button is-disabled" aria-disabled="true" role="button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Repellendus obcaecati molestias
         </h2>
         <p class="tn-card__description">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="tn-card__status">
             <span>Voluptate quis adipisci sit</span> | <span>Voluptate quis adipisci sit</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-card %}

<br>

## Actions Card

The card can also contain actions that can be performed on the object. This actions are displayed under a "more" dropdown menu, represented by an ellipsis icon. When clicked all the actions will be displayed.

{% capture action-card %}
<div class="tn-card tn-card--button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Lorem ipsum dolor quam placeat numquam repellendus
         </h2>
         <p class="tn-card__description">
             Tenetur quam placeat ipsum dolor sit amet obcaecati molestias voluptatibus dolorum ut
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
         </p>
    </div>
    <div class="tn-card__actions">
        <div class="tn-dropdown">
            <button class="tn-button tn-button--icon tn-button--text" aria-controls="dKKJX636" aria-haspopup="true" aria-label="More">
                <span class="tn-icon tn-icon--more tn-icon--medium" role="presentation"></span>
            </button>
            <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="dKKJX636">
                <li><a class="tn-dropdown__item">Pellentesque metus</a></li>
                <li><a class="tn-dropdown__item">Duis malesuada odio volutpat</a></li>
                <li><a class="tn-dropdown__item">Suspendisse</a></li>
                <li><a class="tn-dropdown__item">Donec mattis arcu et velit</a></li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=action-card %}

<br>

## Media Card

This type of card can display images. Along with the usual card elements. Used to display information like products, profiles and other objects with associated visual information.

It can adopt various layouts, to display the better accommodate the images.

{% capture media-card %}
<div class="tn-card" role="button">
    <div class="tn-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="tn-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
<div class="tn-card" role="button">
    <div class="tn-card__media tn-card__media--round" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="tn-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=media-card %}

<br>

## Media Card with fill Image

The Media Card can also display images in a more prominent way. Can be used horizontally or vertically.

{% capture media-card-fill-image %}
<div class="tn-card" role="button">
    <div class="tn-card__media tn-card__media--fill" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="tn-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
<div class="tn-card tn-card--vertical" role="button">
    <div class="tn-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="tn-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=media-card-fill-image %}

<br>

## Custom Content Card

As a container element, the card can display all types of information inside the content area.

{% capture custom-content-card %}
<div class="tn-card">
    <div class="tn-card__content">
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Client I.D.</span>
        <p>*******************</p>
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Client Secret</span>
        <p>*******************</p>
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Creation Date</span>
        <p>Consectetur adipisicing</p>
        <span class="tn-has-color-txt-3 tn-has-type-minus-2">Tenant (Project Identifier)</span>
        <p>Lorem ipsum</p>
    </div>
    <div class="tn-card__actions">
        <a class="tn-has-type-1 tn-has-font-family-header">GENERATE ACCESS TOKEN</a>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=custom-content-card %}
