---
title: Card
id: card
keywords:
sidebar: left-navigation-sidebar
toc: false
permalink: components/card.html
folder: components
---

The card is a container element, used to display information in a way the user can glance and find easily the information.
{: .docs-intro}
They have common elements always on the same position and with similar visual style.

The cards can be [grouped](card-group.html) to display a set of the object of the same type.

Some common elements are styled by default:
* **Primary info**: used mainly to display names or titles.
* **Secondary info**: here you can add more information about the object.
* **Status**: you can signal the status of the object, for instance: active/inactive

<br>

## Default Card

Used to display static information only. The user should not interact with this card.

{% capture default-card %}
<div class="fd-card">
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Primary Value
         </h2>
         <p class="fd-card__description">
             Secondary Value aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="fd-card__status">
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
<div class="fd-card fd-card--button" role="button">
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Lorem ipsum dolor quam placeat numquam repellendus
         </h2>
         <p class="fd-card__description">
             Tenetur quam placeat obcaecati molestias voluptatibus dolorum ut.
         </p>
         <p class="fd-card__status">
             <span class="fd-has-color-status-1">Voluptate quis adipisci sit</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-card %}

<br>

## Disabled Card

Use this Card to signal the user he cannot interact with this object. The difference with the default card is that at some point in time the user may be able to interact with a card that's disabled. For example if the user doesn't have the right permissions to access the object represented by the card.

{% capture disabled-card %}
<div class="fd-card fd-card--button is-disabled" aria-disabled="true" role="button">
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Repellendus obcaecati molestias
         </h2>
         <p class="fd-card__description">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="fd-card__status">
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
<div class="fd-card fd-card--button">
    <div class="fd-card__content">
        <h2 class="fd-card__header">
            Lorem ipsum dolor quam placeat numquam repellendus
        </h2>
        <p class="fd-card__description">
            Tenetur quam placeat ipsum dolor sit amet obcaecati molestias voluptatibus dolorum ut
        </p>
        <p class="fd-card__status">
            <span class="fd-has-color-status-1">Voluptate quis adipisci sit</span>
        </p>
    </div>
    <div class="fd-card__actions">
        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                <button class="fd-button--light sap-icon--overflow" aria-label="More" aria-expanded="false"
                    aria-controls="MXLTN784" aria-haspopup="true"></button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="MXLTN784">
                <nav class="fd-menu" id="">
                    <ul class="fd-menu__list">
                        <li><a href="#" class="fd-menu__item">Edit</a></li>
                        <li><a href="#" class="fd-menu__item">Delete</a></li>
                        <li><a href="#" class="fd-menu__item">Assign</a></li>
                        <li><a href="#" class="fd-menu__item">Expire</a></li>
                        <li><a href="#" class="fd-menu__item">Archive</a></li>
                    </ul>
                </nav>
            </div>
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
<div class="fd-card" role="button">
    <div class="fd-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="fd-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="fd-card__status">
             <span class="fd-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
<div class="fd-card" role="button">
    <div class="fd-card__media fd-card__media--round" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="fd-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="fd-card__status">
             <span class="fd-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=media-card %}

<br>

## Media Card with fill Image

The Media Card can also display images in a more prominent way. Can be used horizontally or vertically.

{% capture media-card-fill-image %}
<div class="fd-card" role="button">
    <div class="fd-card__media fd-card__media--fill" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="fd-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="fd-card__status">
             <span class="fd-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
<div class="fd-card fd-card--vertical" role="button">
    <div class="fd-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
    <div class="fd-card__content">
         <h2 class="fd-card__header">
             Asperiores doloribus id dolore
         </h2>
         <p class="fd-card__description">
             Consectetur adipisicing elit
         </p>
         <p class="fd-card__status">
             <span class="fd-has-color-status-1">Cumque itaque</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=media-card-fill-image %}

<br>

## Custom Content Card

As a container element, the card can display all types of information inside the content area.

{% capture custom-content-card %}
<div class="fd-card">
    <div class="fd-card__content">
        <span class="fd-has-color-text-3 fd-has-type-minus-2">Client I.D.</span>
        <p>*******************</p>
        <span class="fd-has-color-text-3 fd-has-type-minus-2">Client Secret</span>
        <p>*******************</p>
        <span class="fd-has-color-text-3 fd-has-type-minus-2">Creation Date</span>
        <p>Consectetur adipisicing</p>
        <span class="fd-has-color-txt-3 fd-has-type-minus-2">Tenant (Project Identifier)</span>
        <p>Lorem ipsum</p>
    </div>
    <div class="fd-card__actions">
        <a class="fd-has-type-1 fd-has-font-family-header" href="">GENERATE ACCESS TOKEN</a>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=custom-content-card %}
