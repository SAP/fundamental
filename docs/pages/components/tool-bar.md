---
title: Toolbar
keywords: 
sidebar: left-navigation-sidebar
toc: false
permalink: components/toolbar.html
folder: components
---

The Toolbar component is used always along a collection of items, like cards or a table. The main use of it is to manipulate the collection. We provide elements and interaction patters for **filtering**, **sorting**, **pagination** and **view changes**.

<hr>

## Toolbar elements

This is the look and feel of the Toolbar when all the components are used.

{% capture toolbar-full %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="oEeRk201" aria-expanded="false" aria-haspopup="true">
                <span class="fd-icon fd-icon--sort fd-dropdown__icon" role="presentation"></span>
                Newest
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="oEeRk201">
                <li><a href="#" class="fd-dropdown__item">Oldest</a></li>
                <li><a href="#" class="fd-dropdown__item">Price Ascending</a></li>
                <li><a href="#" class="fd-dropdown__item">Price Descending</a></li>
            </ul>            
        </div>
        <span role="separator"></span>
    </div>
    <div class="fd-toolbar__group fd-toolbar__group--view">
        <div class="fd-toolbar__pagination">
            <ul class="fd-pagination">
                <span class="fd-pagination__total">30 items</span>
                <li class="fd-pagination__item fd-pagination__item--previous">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous" aria-disabled="true">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">2</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">3</a>
                </li>
                <li class="fd-pagination__item">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="fd-toolbar__view-as">
            <button class="fd-button fd-button--text fd-button--icon" aria-label="View as grid" aria-pressed="true">
                <span class="fd-icon fd-icon--grid fd-icon--medium" role="presentation"></span>
            </button>
            <button class="fd-button fd-button--text fd-button--icon" aria-label="View as list" aria-pressed="false">
                <span class="fd-icon fd-icon--list fd-icon--medium" role="presentation"></span>
            </button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-full %}

<br/>

## Filtering

All the filtering options will be under the filtering icon (<span class="fd-icon fd-icon--filter fd-icon--medium" style="font-size: 1em; vertical-align: middle;"></span>) located on the right of the toolbar. When pressed it will display a second row on the toolbar, from this second row will show all available filtering options for the user to select.

{% capture toolbar %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe850" aria-haspopup="true">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="fd-toolbar__group fd-toolbar__group--filter-options" id="gfAMe850" aria-hidden="true">
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="fd-dropdown__item">Blue</a></li>
                <li><a href="#" class="fd-dropdown__item">Red</a></li>
                <li><a href="#" class="fd-dropdown__item">Green</a></li>
            </ul>
        </div>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="fd-dropdown__item">S</a></li>
                <li><a href="#" class="fd-dropdown__item">M</a></li>
                <li><a href="#" class="fd-dropdown__item">L</a></li>
                <li><a href="#" class="fd-dropdown__item">XL</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar %}

<br />

The selected filters will be displayed on a new row bellow. Every filter will include an remove icon (<span class="fd-icon fd-icon--filterremove" style="font-size: 1em; vertical-align: middle"></span>) to deselect it. Also a "Clear all" button that will deselect all filters.

{% capture toolbar-with-filters %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe851" aria-haspopup="true">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="fd-toolbar__group fd-toolbar__group--filter-options" id="gfAMe851" aria-hidden="true">
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="fd-dropdown__item">Blue</a></li>
                <li><a href="#" class="fd-dropdown__item">Red</a></li>
                <li><a href="#" class="fd-dropdown__item">Green</a></li>
            </ul>
        </div>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="fd-dropdown__item">S</a></li>
                <li><a href="#" class="fd-dropdown__item">M</a></li>
                <li><a href="#" class="fd-dropdown__item">L</a></li>
                <li><a href="#" class="fd-dropdown__item">XL</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
    <div class="fd-toolbar__group fd-toolbar__group--applied-filters">
        <ul class="fd-toolbar__applied-filter-list">
            <li class="fd-toolbar__applied-filter-item">
                <span>Color: <strong>Red</strong></span>
                <button class="fd-button fd-button--text fd-button--small fd-button--icon" aria-label="Clear">
                    <span class="fd-icon fd-icon--filterremove" role="presentation"></span>
                </button>
            </li>
            <li class="fd-toolbar__applied-filter-item">
                <span>Size: <strong>Small</strong></span>
                <button class="fd-button fd-button--text fd-button--small fd-button--icon" aria-label="Clear">
                    <span class="fd-icon fd-icon--filterremove" role="presentation"></span>
                </button>
            </li>
            <li class="fd-toolbar__applied-filter-item">
                <a href="#" class="fd-toolbar__applied-filter-clear">Clear All</a>
            </li>
        </ul>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-with-filters %}

<br/>

## Sorting

The Toolbar sorting elements modify the order of the items in the collection depending on the user selection. It is located right besides the filter icon.

{% capture toolbar-sorting %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL" disabled aria-disabled="true">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="oEeRk206" aria-expanded="false" aria-haspopup="true">
                <span class="fd-icon fd-icon--sort fd-dropdown__icon" role="presentation"></span>
                Newest
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="oEeRk206">
                <li><a href="#" class="fd-dropdown__item">Oldest</a></li>
                <li><a href="#" class="fd-dropdown__item">Price Ascending</a></li>
                <li><a href="#" class="fd-dropdown__item">Price Descending</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-sorting %}

<br />

## Paination

The Toolbar is also used to support [pagination elements](pagination.html). They are displayed at the main toolbar and also bellow the collection.

{% capture toolbar-pagination %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL" disabled aria-disabled="true">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" disabled aria-disabled="true">
                <span class="fd-icon fd-icon--sort fd-dropdown__icon" role="presentation"></span>
                Newest
            </button>
        </div>
        <span role="separator"></span>
    </div>
    <div class="fd-toolbar__group fd-toolbar__group--view">
        <div class="fd-toolbar__pagination">
            <ul class="fd-pagination">
                <span class="fd-pagination__total">30 items</span>
                <li class="fd-pagination__item fd-pagination__item--previous">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous" aria-disabled="true">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">2</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">3</a>
                </li>
                <li class="fd-pagination__item">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-pagination %}

<br />

## Change view

For some collections the user can choose the type of view the items are represented. Icons that show the expected visual representation are used.

{% capture toolbar-change-view %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--filter">
        <button class="fd-button fd-button--text fd-button--icon fd-toolbar__button" aria-label="BUTTON_LABEL" disabled aria-disabled="true">
            <span class="fd-icon fd-icon--filter fd-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" disabled aria-disabled="true">
                <span class="fd-icon fd-icon--sort fd-dropdown__icon" role="presentation"></span>
                Newest
            </button>
        </div>
        <span role="separator"></span>
    </div>
    <div class="fd-toolbar__group fd-toolbar__group--view">
        <div class="fd-toolbar__pagination">
            <ul class="fd-pagination">
                <span class="fd-pagination__total">30 items</span>
                <li class="fd-pagination__item fd-pagination__item--previous">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous" aria-disabled="true">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">2</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">3</a>
                </li>
                <li class="fd-pagination__item">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="fd-toolbar__view-as">
            <button class="fd-button fd-button--text fd-button--icon" aria-label="View as grid" aria-pressed="true">
                <span class="fd-icon fd-icon--grid fd-icon--medium" role="presentation"></span>
            </button>
            <button class="fd-button fd-button--text fd-button--icon" aria-label="View as list" aria-pressed="false">
                <span class="fd-icon fd-icon--list fd-icon--medium" role="presentation"></span>
            </button>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-change-view %}

<br/>

## Bottom pagination

At the bottom of a collection is recommended to show a toolbar with the pagination component only.

{% capture toolbar-pagination %}
<div class="fd-toolbar">
    <div class="fd-toolbar__group fd-toolbar__group--view">
        <div class="fd-toolbar__pagination">
            <ul class="fd-pagination">
                <span class="fd-pagination__total">30 items</span>
                <li class="fd-pagination__item fd-pagination__item--previous">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous" aria-disabled="true">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">2</a>
                </li>
                <li class="fd-pagination__item">
                    <a href="#" class="fd-pagination__link">3</a>
                </li>
                <li class="fd-pagination__item">
                    <button class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                        <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-pagination %}
