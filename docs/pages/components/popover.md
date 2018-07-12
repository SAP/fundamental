---
title: Popover
keywords: popover
sidebar: left-navigation-sidebar
toc: false
permalink: components/popover.html
folder: components
summary:
---

The popover is a wrapping component that accepts a "control" as well as a "body. A control can be anything that you want to trigger the interaction from. The body will be the contents of what you reveal on the page after triggering the popover. Commonly used as the interaction/wrapping component when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the menu component.

As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.

<hr/>

## Popover Structure
The basic wrapping structure of a popover.

* `fd-popover` - wrapper for the whole container
* `fd-popover__control` - control element to toggle the display of the popover
* `fd-popover__body` - wrapper that contains the popover content

<br> 

## Popover Example
This is a composed example of a popover being used to trigger a menu out of an avatar image.

{% capture default-popoverwmenu %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <span class="fd-popover__control fd-image--m fd-image--circle" aria-label="Image label" aria-controls="jhqD0558" aria-expanded="false" aria-haspopup="true" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="jhqD0558">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-popoverwmenu %}
