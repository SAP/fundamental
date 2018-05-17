---
title: Panel
keywords: panel
sidebar: left-navigation-sidebar
toc: false
permalink: layouts/panel.html
folder: layouts
summary:
---
Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page. Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

<hr/>

## Panel elements

The panel component can have elements like the **Panel Title**, the **Panel Actions**, **Panel Content** and **Panel Footer**. Use this elements to organize your panels in a easy way for the user to interact with the information displayed on the Panel.

{% capture default %}
<div class="fd-panel">
    <div class="fd-panel__header">
        <h1 class="fd-panel__title">
            .fd-panel__title
        </h1>
        <div class="fd-panel__actions">
            .fd-panel__actions
        </div>
    </div>
    <div class="fd-panel__body">
        <p>.fd-panel__body</p>
      <p>Very much like a <code>.fd-section</code> but intended to contain content.</p>
      <p>Use <code>.fd-col</code>s when multiple panels are needed in a column structure.</p>
    </div>
    <div class="fd-panel__footer">
        .fd-panel__footer
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Panel with grid (side by side layout)
{% capture default %}
<div class="fd-container">
    <div class="fd-col--6">
        <div class="fd-panel">
            <div class="fd-panel__header">
                <h1 class="fd-panel__title">
                    .fd-panel__title
                </h1>
                <div class="fd-panel__actions">
                    .fd-panel__actions
                </div>
            </div>
            <div class="fd-panel__body">
                <p>.fd-panel__body</p>
                <p>Very much like a <code>.fd-section</code> but intended to contain content.</p>
                <p>Use <code>.fd-col</code>s when multiple panels are needed in a column structure.</p>
            </div>
            <div class="fd-panel__footer">
                .fd-panel__footer
            </div>
        </div>
    </div>
    <div class="fd-col--6">
        <div class="fd-panel">
            <div class="fd-panel__header">
                <h1 class="fd-panel__title">
                    .fd-panel__title
                </h1>
                <div class="fd-panel__actions">
                    .fd-panel__actions
                </div>
            </div>
            <div class="fd-panel__body">
                <p>.fd-panel__body</p>
                <p>Very much like a <code>.fd-section</code> but intended to contain content.</p>
                <p>Use <code>.fd-col</code>s when multiple panels are needed in a column structure.</p>
            </div>
            <div class="fd-panel__footer">
                .fd-panel__footer
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Panel with filters
{% capture default %}
<div class="fd-panel">
    <div class="fd-panel__header">
        <h1 class="fd-panel__title">
            .fd-panel__title
        </h1>
        <div class="fd-panel__actions">
            .fd-panel__actions
        </div>
    </div>
    <div class="fd-panel__filters" aria-hidden="false">.fd-panel__filters
    </div>
    <div class="fd-panel__body">
        .fd-panel__body
    </div>
    <div class="fd-panel__footer">
        .fd-panel__footer
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br/>

## Panel with content examples

{% capture default %}
<section class="fd-section">
    <header class="fd-section__header">
        <h1 class="fd-section__title">
            Example <code>.fd-panel</code> with content
        </h1>
    </header>

    <div class="fd-container">

    <div class="fd-panel">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title">
                Items (1180)
            </h1>
            <div class="fd-panel__actions">

            <div class="fd-dropdown fd-dropdown--s">
                <button class="fd-dropdown__control fd-button--toolbar fd-button--s sap-icon--sort" aria-controls="NCPbH442" aria-expanded="false" aria-haspopup="true">
                    Newest
                </button>
                <nav class="fd-dropdown__menu" aria-hidden="true" id="NCPbH442">
                  <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
                </ul></nav>

            </div>

                    <button class=" fd-button--toolbar fd-button--s sap-icon--add-filter">Filter</button>

                    <div class="fd-button-group" role="group" aria-label="Show as">
              <button class=" fd-button--grouped fd-button--s sap-icon--grid" aria-pressed="true"></button>
              <button class=" fd-button--grouped fd-button--s sap-icon--list"></button>
            </div>
            </div>
        </div>

        <div class="fd-panel__filters" aria-hidden="false">

            <div class="fd-dropdown fd-dropdown--s">
                <button class="fd-dropdown__control fd-button--toolbar fd-button--s" aria-controls="j2Jwq616" aria-expanded="false" aria-haspopup="true">
                    Color
                </button>
                <nav class="fd-dropdown__menu" aria-hidden="true" id="j2Jwq616">
                  <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
                </ul></nav>

            </div>


            <div class="fd-dropdown fd-dropdown--s">
                <button class="fd-dropdown__control fd-button--toolbar fd-button--s" aria-controls="jW2TL365" aria-expanded="false" aria-haspopup="true">
                    Size
                </button>
                <nav class="fd-dropdown__menu" aria-hidden="true" id="jW2TL365">
                  <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Option 1</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 2</a></li>
                    <li><a href="#" class="fd-dropdown__item">Option 3</a></li>
                </ul></nav>

            </div>

        </div>

        <div class="fd-panel__filters" aria-hidden="false"><span class="fd-tag" role="button">Bibendum</span>
            <span class="fd-tag" role="button">Bibendum</span>
            <span class="fd-tag" role="button">Bibendum</span>
            <span class="fd-tag" role="button">Bibendum</span>
            <span class="fd-tag" role="button">Bibendum</span>

            <button class=" fd-button--secondary fd-button--s">Clear All</button>

        </div>

        <div class="fd-panel__body">
            .fd-panel__body
        </div>

        <div class="fd-panel__footer">
            <div class="fd-pagination">
              <span class="fd-pagination__total">1180 items</span>
              <nav class="fd-pagination__nav">
                <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous" aria-disabled="false"></a>
                <a href="#" class="fd-pagination__link">1</a>
                <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
                <a href="#" class="fd-pagination__link">24</a>
                <a href="#" class="fd-pagination__link" aria-selected="true">25</a>
                <a href="#" class="fd-pagination__link">26</a>
                <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
                <a href="#" class="fd-pagination__link">59</a>
                <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next" aria-disabled="false"></a>
              </nav>
            </div>

        </div>
    </div>

    </div>
</section>
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-col--6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <h1 class="fd-panel__title">
                        Vivamus sagittis
                    </h1>
                    <div class="fd-panel__actions">
                        <button class="fd-button--xs sap-icon--add">
                                Add New Item
                            </button>
                    </div>
                </div>

                <div class="fd-panel__body fd-has-padding-none">
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                </div>

                <div class="fd-panel__footer">
                    <button class="fd-button--secondary">See All</button>
                </div>
            </div>
        </div>
        <div class="fd-col--6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <h1 class="fd-panel__title">
                        Vivamus sagittis
                    </h1>
                    <div class="fd-panel__actions">
                        <button class="fd-button--xs sap-icon--add">
                                Add New Item
                            </button>
                    </div>
                </div>

                <div class="fd-panel__body fd-has-padding-none">
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                    <div class="fd-tile" role="button">
                        <div class="fd-tile__media">
                            <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png');"></span>
                        </div>
                        <div class="fd-tile__content">
                          <h2 class="fd-tile__title">Tile Title</h2>
                        </div>
                    </div>
                </div>

                <div class="fd-panel__footer">
                    <button class="fd-button--secondary">See All</button>
                </div>
            </div>
        </div>
    </div>
</section>
{% endcapture %}

{% include display-component.html component=default %}

<br/>
