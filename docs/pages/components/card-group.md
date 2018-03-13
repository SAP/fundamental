---
title: Card Group
keywords: card group
sidebar: left-navigation-sidebar
toc: false
permalink: components/card-group.html
folder: components
---

The Card Group is used to display a collection of Cards representing objects of the same type. For instance: A set of products, projects, organizations, etc. It should be used to display collections of objects where the user can find and identify the items visually, by glancing at the Card Groups. The Cards layouts doesn't allow too much comparison of the data inside the cards; but different state (active/inactive, etc) are easily identifiable.

<hr />

## Three columns layout

The default layout of the Cards group is a three columns layout. The three cards per row will adjust to fill the width of the container element.

{% capture default-card %}
<div class="fd-card-group">
  <div class="fd-card" role="button">
      <div class="fd-card__content">
           <h2 class="fd-card__header">
               Title/Primary info
           </h2>
           <p class="fd-card__description">
               Secondary info.
           </p>
           <p class="fd-card__status">
               <span class="fd-has-color-status-1">STATUS</span>
           </p>
      </div>
  </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
           <h2 class="fd-card__header">
               Title/Primary info
           </h2>
           <p class="fd-card__description">
               Secondary info.
           </p>
           <p class="fd-card__status">
               <span class="fd-has-color-status-1">STATUS</span>
           </p>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
           <h2 class="fd-card__header">
               Title/Primary info
           </h2>
           <p class="fd-card__description">
               Secondary info.
           </p>
            <p class="fd-card__status">
                <span class="fd-has-color-status-1">STATUS</span>
            </p>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
           <h2 class="fd-card__header">
               Title/Primary info
           </h2>
           <p class="fd-card__description">
               Secondary info.
           </p>
           <p class="fd-card__status">
               <span class="fd-has-color-status-1">STATUS</span>
           </p>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
           <h2 class="fd-card__header">
               Title/Primary info
           </h2>
           <p class="fd-card__description">
               Secondary info.
           </p>
           <p class="fd-card__status">
               <span class="fd-has-color-status-1">STATUS</span>
           </p>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Two columns Layout

Depending of the content of the cards you can use the Card Group with a two columns layout.

{% capture two-column %}
<div class="fd-card-group fd-card-group--2col">
    <div class="fd-card">
        <div class="fd-card__content">
             <h2 class="fd-card__header">
                 Card Primary info
             </h2>
             <p class="fd-card__description">
                 Tenetur quam  dolorum ut.
             </p>
             <p class="fd-card__status">
                 STATUS
             </p>
        </div>
        <div class="fd-card__actions">
            <button class="fd-button fd-button--small">
        View
    </button>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
             <h2 class="fd-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="fd-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="fd-card__status">
                 <span class="fd-has-color-status-1">STATUS</span>
             </p>
        </div>
    </div>
    <div class="fd-card" role="button"><div class="fd-card__media fd-card__media--fill"
     style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
    aria-label="YaaS product thumbnail"></div>
        <div class="fd-card__content">
             <h2 class="fd-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="fd-card__description">
                 Consectetur adipisicing elit
             </p>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
             <h2 class="fd-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="fd-card__description">
                 Tenetur quam  dolorum ut.
             </p>
        </div>
    </div>
    <div class="fd-card" role="button">
        <div class="fd-card__content">
             <h2 class="fd-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="fd-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="fd-card__status">
                 <span class="fd-has-color-status-1">STATUS</span>
             </p>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=two-column %}

<br>

## Four column layout

This layout shows more cards per row. The content on the cards should not be too dense.

{% capture four-column %}
<div class="fd-card-group fd-card-group--4col">
    <div class="fd-card fd-card--vertical" role="button">
        <div class="fd-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
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
        <div class="fd-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
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
        <div class="fd-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
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
        <div class="fd-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
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
    <div class="fd-card fd-card--vertical" role="button"><div class="fd-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
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
    <div class="fd-card fd-card--vertical" role="button"><div class="fd-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
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
    <div class="fd-card fd-card--vertical" role="button"><div class="fd-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
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
</div>
{% endcapture %}

{% include display-component.html component=four-column %}
