---
title: Pagination
keywords: pagination
sidebar: left-navigation-sidebar
toc: false
permalink: components/pagination.html
folder: components
summary:
---

Use pagination components in conjunction with Tables (recommended) or Cards (if needed) to allow for more efficient performance and quick access to specific records in the overall data set.

<hr>

## First Page
When the first page is active, the previous link should be disabled.

{% capture pagination %}
<div class="fd-pagination">
    <span class="fd-pagination__total">30 items</span>
    <ul class="fd-pagination__list">
        <li class="fd-pagination__item fd-pagination__item--previous">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small"
            aria-label="Previous" aria-disabled="true">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
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
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=pagination %}

<br>

## Second Page
Example with second page active.

{% capture pagination-second %}
<div class="fd-pagination">
    <span class="fd-pagination__total">30 items</span>
    <ul class="fd-pagination__list">
        <li class="fd-pagination__item fd-pagination__item--previous">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small"
            aria-label="Previous">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">1</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">3</a>
        </li>
        <li class="fd-pagination__item">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small"
            aria-label="Next">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=pagination-second %}

<br>

## More than three Pages

{% capture pagination-more %}
<div class="fd-pagination">
    <span class="fd-pagination__total">500 items</span>
    <ul class="fd-pagination__list">
        <li class="fd-pagination__item fd-pagination__item--previous">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">1</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">3</a>
        </li>
        <li class="fd-pagination__item">
            <span class="fd-pagination__link fd-pagination__link--more" role="presentation">
                &#8226;&#8226;&#8226;
            </span>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">50</a>
        </li>
        <li class="fd-pagination__item">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=pagination-more %}

<br>

## In between more than three Pages

{% capture pagination-more-between %}
<div class="fd-pagination">
    <span class="fd-pagination__total">500 items</span>
    <ul class="fd-pagination__list">
        <li class="fd-pagination__item fd-pagination__item--previous">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">1</a>
        </li>
        <li class="fd-pagination__item">
            <span class="fd-pagination__link fd-pagination__link--more" role="presentation">
                &#8226;&#8226;&#8226;
            </span>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">21</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link" aria-selected="true">22</a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">23</a>
        </li>
        <li class="fd-pagination__item">
            <span class="fd-pagination__link fd-pagination__link--more" role="presentation">
                &#8226;&#8226;&#8226;
            </span>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">50</a>
        </li>
        <li class="fd-pagination__item">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=pagination-more-between %}

<br>

## Last Page
On the last page, the next link should be disabled.

{% capture pagination-last %}
<div class="fd-pagination">
    <span class="fd-pagination__total">500 items</span>
    <ul class="fd-pagination__list">
        <li class="fd-pagination__item fd-pagination__item--previous">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Previous">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link">1</a>
        </li>
        <li class="fd-pagination__item">
            <span class="fd-pagination__link fd-pagination__link--more" role="presentation">
                &#8226;&#8226;&#8226;
            </span>
        </li>
            <li class="fd-pagination__item">
                <a href="#" class="fd-pagination__link">49</a>
            </li>
        <li class="fd-pagination__item">
            <a href="#" class="fd-pagination__link" aria-selected="true">50</a>
        </li>
        <li class="fd-pagination__item">
            <a class="fd-button fd-button--text fd-button--icon fd-button--small" aria-label="Next" aria-disabled="true">
                <span class="fd-icon fd-icon--chevron fd-icon--small" role="presentation"></span>
            </a>
        </li>
    </ul>
</div>
{% endcapture %}

{% include display-component.html component=pagination-last %}
