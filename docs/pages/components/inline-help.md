---
title: Inline Help
keywords: inline, help
sidebar: left-navigation-sidebar
toc: false
permalink: components/inline-help.html
folder: components
summary:
---

Inline help component can be used to display a quick help or informative message in a popover. It can be placed inline with components such as headers, body text, labels, etc.

<hr>

## Default Position
The default positioning of inline help component is bottom right.
{% capture inline-help %}
Bottom Right (Default)

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Bottom Left Position
{% capture inline-help %}
Bottom Left

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--bottom-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Right Position
{% capture inline-help %}
Right

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--right">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Left Position
{% capture inline-help %}
Left

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--left">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}
