---
title: Tabs
id: tabs
keywords: tab, tabs
sidebar: left-navigation-sidebar
toc: false
permalink: components/tabs.html
folder: components
summary:
---

Tabs are based on a folder metaphor and used to separate content into different sections. Tabs should be ordered to create a visual hierarchy based on priority.
{: .docs-intro}

<br>

## Tabs with `list` element

{% capture default-tab %}
<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
            Selected
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">
            Link
        </a>
    </li>
    <li class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="IR27Y941" aria-disabled="true" role="tab">
            Disabled
        </a>
    </li>
    <li class="fd-tabs__item">
        <div class="fd-popover fd-popover--right">
            <a class="fd-tabs__link fd-popover__control sap-icon--overflow" aria-controls="jhqDa1"
            aria-expanded="false" aria-haspopup="true" role="tab"></a>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
            aria-hidden="true" id="jhqDa1">
                <nav class="fd-menu">
                    <ul class="fd-menu__list">
                        <li><a href="#" class="fd-menu__item">Option 1</a></li>
                        <li><a href="#" class="fd-menu__item">Option 2</a></li>
                        <li><a href="#" class="fd-menu__item">Option 3</a></li>
                        <li><a href="#" class="fd-menu__item">Option 4</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </li>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=default-tab %}

<br/>

## Tabs with `nav` element
{% capture modified-tab %}
<nav class="fd-tabs" role="tablist">
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="kf8369" href="#kf8369" role="tab">
            Link
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="9uQ282" aria-selected="true" href="#9uQ282" role="tab">
            Selected
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="DGl707" href="#DGl707" role="tab">
            Link
        </a>
    </span>
    <span class="fd-tabs__item">
        <a class="fd-tabs__link" aria-controls="98q398" aria-disabled="true" role="tab">
            Disabled
        </a>
    </span>
    <span class="fd-tabs__item">
        <div class="fd-popover fd-popover--right">
            <a class="fd-tabs__link fd-popover__control sap-icon--overflow" aria-controls="jhqD2"
            aria-expanded="false" aria-haspopup="true" role="tab"></a>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
            aria-hidden="true" id="jhqD2">
                <nav class="fd-menu">
                    <ul class="fd-menu__list">
                        <li><a href="#" class="fd-menu__item">Option 1</a></li>
                        <li><a href="#" class="fd-menu__item">Option 2</a></li>
                        <li><a href="#" class="fd-menu__item">Option 3</a></li>
                        <li><a href="#" class="fd-menu__item">Option 4</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </span>
</nav>
<div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="98q398" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}
{% include display-component.html component=modified-tab %}
