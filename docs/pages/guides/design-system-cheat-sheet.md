---
title: Design System Utilities
keywords: design system cheat sheet
sidebar: left-navigation-sidebar
toc: false
permalink: design-system-utilities.html
folder: guides
summary: The following guide give you a quick list of all the utility features of the Fundamental UI design system
---

## Text Utilities
{: .docs-header-h2}

{% capture text-util %}
<p class="fd-has-font-weight-bold">This text is bold</p>
<p class="fd-has-font-style-italic">This text is italic</p>
<p class="fd-has-text-align-center">This text is centered</p>
<p class="fd-has-text-align-right">This text is right aligned</p>
<p class="fd-text-transform-none">text with no transformation</p>
{% endcapture %}
{% include display-example.html component=text-util %}

## Floats
{: .docs-header-h2}

{% capture float-util %}
<p class="fd-has-float-left">This text is floating on left</p>
<p class="fd-has-float-right">This text is floating on right</p>
{% endcapture %}
{% include display-example.html component=float-util %}

## Type Sizes
{: .docs-header-h2}

{% capture type-util %}
<p class="fd-has-type-minus-3">This is text type size -3</p>
<p class="fd-has-type-minus-2">This is text type size -2</p>
<p class="fd-has-type-minus-1">This is text type size -1</p>
<p class="fd-has-type-base">This is text type size base</p>
<p class="fd-has-type-2">This is text type size 2</p>
<p class="fd-has-type-3">This is text type size 3</p>
<p class="fd-has-type-4">This is text type size 4</p>
<p class="fd-has-type-5">This is text type size 5</p>
{% endcapture %}
{% include display-example.html component=type-util %}

## Type Face
{: .docs-header-h2}

`fd-has-font-family-body` renders Open-Sans font.
`fd-has-font-family-header` renders Roboto font.
{% capture type-face %}
<p class="fd-has-font-family-body">This is body text</p>
<p class="fd-has-font-family-header">This is header text</p>
<p class="fd-has-font-family-code">This is code text</p>
{% endcapture %}
{% include display-example.html component=type-face %}

## Type Weights
{: .docs-header-h2}

used with `fd-has-font-family-header` for illustrate weight variants
{% capture type-weight %}
<p class="fd-has-font-family-header fd-has-font-weight-light">This is font with weight light</p>
<p class="fd-has-font-family-header fd-has-font-weight-reg">This is font with weight regular</p>
<p class="fd-has-font-family-header fd-has-font-weight-med">This is font with weight medium</p>
<p class="fd-has-font-family-header fd-has-font-weight-semi">This is font with weight semi-bold</p>
<p class="fd-has-font-family-header fd-has-font-weight-bold">This is font with weight bold</p>
{% endcapture %}
{% include display-example.html component=type-weight %}

## Colors
{: .docs-header-h2}

### Color Function
{: .docs-header-h3}

Colors can be accessed via color function [`fd-color({group}, {shade})`](how-to-use-scss.html#core-functions-and-mix-ins)

### Color Helper classes
{: .docs-header-h3}
Helper classes are available as a foreground color class `fd-has-color-{group}-{shade}` or as a background color `fd-has-background-color-{group}-{shade}`.
A foreground color class applies the color property to the element for example `.fd-has-color-primary` results in `color: ##006fbb !important`



{% capture color %}
<p class="fd-has-color-primary">.fd-has-color-primary</p>
<p class="fd-has-color-primary-2">.fd-has-color-primary-2</p>
<br>
<p class="fd-has-color-action">.fd-has-color-action</p>
<p class="fd-has-color-action-2">.fd-has-color-action-2</p>
<br>
<p class="fd-has-color-text">.fd-has-color-text</p>
<p class="fd-has-color-text-2">.fd-has-color-text-2</p>
<p class="fd-has-color-text-3">.fd-has-color-text-3</p>
<br>
<p class="fd-has-background-color-text fd-has-color-text-inverse">.fd-has-color-text-inverse</p>
<p class="fd-has-background-color-text fd-has-color-text-inverse-2">.fd-has-color-text-inverse-2</p>
<p class="fd-has-background-color-text fd-has-color-text-inverse-3">.fd-has-color-text-inverse-3</p>
<br>
<p class="fd-has-background-color-background fd-has-color-text">.fd-has-color-background (white)</p>
<p class="fd-has-background-color-background-2 fd-has-color-text">.fd-has-color-background-2</p>
<br>
<p class="fd-has-background-color-neutral fd-has-color-text">.fd-has-background-color-netural-1</p>
<p class="fd-has-background-color-neutral-2 fd-has-color-text">.fd-has-background-color-netural-2</p>
<p class="fd-has-background-color-neutral-3 fd-has-color-text">.fd-has-background-color-netural-3</p>
<p class="fd-has-background-color-neutral-4 fd-has-color-text-1">.fd-has-background-color-netural-4</p>
<br>
<p class="fd-has-background-color-status fd-has-color-text">.fd-has-background-color-status-1</p>
<p class="fd-has-background-color-status-2 fd-has-color-text">.fd-has-background-color-status-2</p>
<p class="fd-has-background-color-status-3 fd-has-color-text">.fd-has-background-color-status-3</p>

{% endcapture %}
{% include display-example.html component=color %}

## Margin
{: .docs-header-h2}

Padding helper classes are available as additive or subtractive on all side or selectively.

### Additive Margin
{: .docs-header-h3}

{: .docs-table}
| Class structure       | Result |
| --------------------- | ------ |
| `.fd-has-margin-base` | 4px    |
| `.fd-has-margin-xs`   | 8px    |
| `.fd-has-margin-xs`   | 12px   |
| `.fd-has-margin-reg`  | 20px   |
| `.fd-has-margin-m`    | 40px   |
| `.fd-has-margin-l`    | 100px  |
| `.fd-has-margin-xl`   | 148px  |

{% capture margin %}
<span class="fd-has-margin-base"> .fd-has-margin-base </span>
<span class="fd-has-margin-xs"> .fd-has-margin-xs </span>
<span class="fd-has-margin-s"> .fd-has-margin-s </span>
<span class="fd-has-margin-reg"> .fd-has-margin-reg </span>
<span class="fd-has-margin-m"> .fd-has-margin-m </span>
<span class="fd-has-margin-l"> .fd-has-margin-l </span>
<span class="fd-has-margin-xl"> .fd-has-margin-xl </span>
{% endcapture %}

{% include display-example.html component=margin %}


### Selective Subtractive Margin
{: .docs-header-h3}

{% capture margin %}
<span class="fd-has-margin-m fd-has-margin-top-none"></span>
<span class="fd-has-margin-m fd-has-margin-right-none"></span>
<span class="fd-has-margin-m fd-has-margin-bottom-none"></span>
<span class="fd-has-margin-m fd-has-margin-left-none"></span>
{% endcapture %}

{% include display-example.html component=margin %}


.fd-has-margin-base
