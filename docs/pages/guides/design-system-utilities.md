---
title: Design System Utilities
keywords: design system cheat sheet
sidebar: left-navigation-sidebar
toc: false
permalink: guides/design-system-utilities.html
folder: guides
summary: The following guide covers all the major utility features of the Fundamental UI (FDUI) design system toolkit. We recommend that you utilize these functions, mixins and helper classes to maintain consistency throughout your application. Using the toolkit features will ensure that you application will remain compatible and easy to upgrade with the future versions of FDUI, transition between themes and customization.
---

## Text Utilities
{: .docs-header-h2}

Use the text utilities to set the text style and the justification.

{% capture text-util %}
<p class="fd-has-font-weight-bold">This text is bold</p>
<p class="fd-has-font-style-italic">This text is italic</p>
<p class="fd-has-text-align-center">This text is centered</p>
<p class="fd-has-text-align-right">This text is right aligned</p>
<p class="fd-has-text-transform-none">text with no transformation</p>
{% endcapture %}
{% include display-component.html component=text-util %}
## Floats
{: .docs-header-h2}

The float helper classes are used to control the element floats in the HTML element.

{% capture float-util %}
<p class="fd-has-float-left">This text is floating on left</p>
<p class="fd-has-float-right">This text is floating on right</p>
{% endcapture %}
{% include display-component.html component=float-util %}

## Type Sizes
{: .docs-header-h2}

Use these CSS classes to control the text size. Used mainly for content text, all standard components have the right text size by default.

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
{% include display-component.html component=type-util %}

## Type Face
{: .docs-header-h2}

`fd-has-font-family-body` renders Open-Sans font.
`fd-has-font-family-header` renders Roboto font.
{% capture type-face %}
<p class="fd-has-font-family-body">This is body text</p>
<p class="fd-has-font-family-header">This is header text</p>
<p class="fd-has-font-family-code">This is code text</p>
{% endcapture %}
{% include display-component.html component=type-face %}

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
{% include display-component.html component=type-weight %}

## Colors
{: .docs-header-h2}

All colors on the [color pallete](/foundation/colors.html). Can be accessed via SCSS function and respective CSS classes.

### Color Function
{: .docs-header-h3}

Colors can be accessed via color function [`fd-color({group}, {shade})`](how-to-use-scss.html#core-functions-and-mixins){:target:"_blank"}

### Color Helper classes
{: .docs-header-h3}

Helper classes are available as a foreground color class `fd-has-color-{group}-{shade}` or as a background color `fd-has-background-color-{group}-{shade}`.
A foreground color class applies the color property to the element for example `.fd-has-color-primary` results in `color: ##006fbb !important`

{: .docs-table}
| Class structure                 | {group}-{shade} options |
| ------------------------------- | ----------------------- |
| Foreground Class: <br> `.fd-has-color-{group}-{shade}` <br><br> Background Class:<br>`.fd-has-background-color-{group}-{shade}` | `action` - `1`, `2` <br> `shell` - `1`, `2` <br> `text` - `1`, `2`, `3`, `4` <br> `background` - `1`, `2` <br> `neutral` - `1`, `2`, `3`, `4`  <br> `status` - `1`, `2`, `3`, `4` <br> `accent` - `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`|

Please check the [colors page](colors.html){:target="_blank"} to see full color pallet.

Some examples of color helper classes.
{% capture color %}

<h3>Action Color Group</h3>
<p class="fd-has-color-action-1">.fd-has-color-action-1</p>
<p class="fd-has-color-action-2 fd-has-background-color-action-1">.fd-has-color-action-2</p>

<h3>Shell Color Group</h3>
<p class="fd-has-background-color-shell-1 fd-has-color-text-5">.fd-has-background-color-shell-1</p>
<p class="fd-has-background-color-shell-1 fd-has-color-shell-2">.fd-has-color-shell-2</p>

<h3>Text Color Group</h3>
<p class="fd-has-color-text-1">.fd-has-color-text-1</p>
<p class="fd-has-color-text-2">.fd-has-color-text-2</p>
<p class="fd-has-color-text-3">.fd-has-color-text-3</p>

<h3>Background Color Group</h3>
<p class="fd-has-background-color-background-1 fd-has-color-text-1">.fd-has-color-background-1</p>
<p class="fd-has-background-color-background-2 fd-has-color-text-1">.fd-has-color-background-2</p>

<h3>Neutral Color Group</h3>
<p class="fd-has-background-color-neutral-1 fd-has-color-text-1">.fd-has-background-color-netural-1</p>
<p class="fd-has-background-color-neutral-2 fd-has-color-text-1">.fd-has-background-color-netural-2</p>
<p class="fd-has-background-color-neutral-3 fd-has-color-text-1">.fd-has-background-color-netural-3</p>
<p class="fd-has-background-color-neutral-4 fd-has-color-text-1">.fd-has-background-color-netural-4</p>

<h3>Status Color Group</h3>
<p class="fd-has-background-color-status-1 fd-has-color-text-5">.fd-has-background-color-status-1</p>
<p class="fd-has-background-color-status-2 fd-has-color-text-5">.fd-has-background-color-status-2</p>
<p class="fd-has-background-color-status-3 fd-has-color-text-5">.fd-has-background-color-status-3</p>
<p class="fd-has-background-color-status-4 fd-has-color-text-5">.fd-has-background-color-status-4</p>

<h3>Accent Color Group</h3>
<p class="fd-has-background-color-accent-1 fd-has-color-text-5">.fd-has-background-color-accent-1</p>
<p class="fd-has-background-color-accent-2 fd-has-color-text-5">.fd-has-background-color-accent-2</p>
<p class="fd-has-background-color-accent-3 fd-has-color-text-5">.fd-has-background-color-accent-3</p>
<p class="fd-has-background-color-accent-4 fd-has-color-text-5">.fd-has-background-color-accent-4</p>
<p class="fd-has-background-color-accent-5 fd-has-color-text-5">.fd-has-background-color-accent-5</p>
<p class="fd-has-background-color-accent-6 fd-has-color-text-5">.fd-has-background-color-accent-6</p>
<p class="fd-has-background-color-accent-7 fd-has-color-text-5">.fd-has-background-color-accent-7</p>
<p class="fd-has-background-color-accent-8 fd-has-color-text-5">.fd-has-background-color-accent-8</p>
<p class="fd-has-background-color-accent-9 fd-has-color-text-5">.fd-has-background-color-accent-9</p>
<p class="fd-has-background-color-accent-10 fd-has-color-text-5">.fd-has-background-color-accent-10</p>
<p class="fd-has-background-color-accent-11 fd-has-color-text-5">.fd-has-background-color-accent-11</p>
<p class="fd-has-background-color-accent-12 fd-has-color-text-5">.fd-has-background-color-accent-12</p>
<p class="fd-has-background-color-accent-13 fd-has-color-text-5">.fd-has-background-color-accent-13</p>
<p class="fd-has-background-color-accent-14 fd-has-color-text-5">.fd-has-background-color-accent-14</p>
<p class="fd-has-background-color-accent-15 fd-has-color-text-5">.fd-has-background-color-accent-15</p>
<p class="fd-has-background-color-accent-16 fd-has-color-text-5">.fd-has-background-color-accent-16</p>
{% endcapture %}
{% include display-component.html component=color %}

## Margin and Padding
{: .docs-header-h2}

Margin and/or padding can be applied on all sides to an element with the following helper classes. These helper classes are structured as `.fd-has-margin-{size}` and `.fd-has-padding-{size}`. The following table list all the available options for `{size}` and it's rendered value.

{: .docs-table}
| {size} options | Value |
| -------------- | ----- |
| `none`         | 0     |
| `base`         | 4px   |
| `xs`           | 8px   |
| `s`            | 12px  |
| `reg`          | 20px  |
| `m`            | 40px  |
| `l`            | 100px |
| `xl`           | 148px |

Similar to adding margin or padding on all sides of an element, you can use the `{side}` option to selectively add to a single side. The helper classes for a specific side is structured as `.fd-has-margin-{side}-{size}` and `.fd-has-padding-{side}-{size}`. For example to add margin to the bottom on an element you could use a helper class `.fd-has-margin-bottom-m`. To remove margin from the left size of an element you can use the class `.fd-has-margin-left-none`. The following table lists all the available options for `{side}` an `{size}` options

{: .docs-table}
| Class structure                | {side} options                    | {size} options                            |
| ------------------------------ | --------------------------------- | ----------------------------------------- |
| `.fd-has-margin-{side}-{size}` | `top`, `right`, `bottom`, `left` | `none`, `base`, `xs`, `s`, `m`, `l`, `xl` |
| `.fd-has-padding-{side}-{size}` | `top`, `right`, `bottom`, `left` | `none`, `base`, `xs`, `s`, `m`, `l`, `xl` |

{% capture margin %}
<h3> Margin helper classes </h3>
<span class="fd-has-padding-reg fd-has-margin-base"> .fd-has-margin-base //adds margin of 4px </span>
<span class="fd-has-padding-reg fd-has-margin-xs"> .fd-has-margin-xs //adds margin of 8px</span>
<span class="fd-has-padding-reg fd-has-margin-s"> .fd-has-margin-s //adds margin of 12px</span>
<span class="fd-has-padding-reg fd-has-margin-reg"> .fd-has-margin-reg //adds margin of 20px</span>
<span class="fd-has-padding-reg fd-has-margin-m"> .fd-has-margin-m //adds margin of 40px</span>
<span class="fd-has-padding-reg fd-has-margin-l"> .fd-has-margin-l //adds margin of 100px</span>
<span class="fd-has-padding-reg fd-has-margin-xl"> .fd-has-margin-xl //adds margin of 148px;</span>

<hr>

<h3> Removing margin by side using helper classes</h3>
<span class="fd-has-padding-reg fd-has-margin-m fd-has-margin-top-none">.fd-has-margin-top-none</span>
<span class="fd-has-padding-reg fd-has-margin-m fd-has-margin-right-none">.fd-has-margin-right-none</span>
<span class="fd-has-padding-reg fd-has-margin-m fd-has-margin-bottom-none">.fd-has-margin-bottom-none</span>
<span class="fd-has-padding-reg fd-has-margin-m fd-has-margin-left-none">.fd-has-margin-left-none</span>

<hr>

<h3> Padding helper classes</h3>
<span class="fd-has-margin-base fd-has-padding-none">.fd-has-padding-none</span>
<span class="fd-has-margin-base fd-has-padding-base">.fd-has-padding-base</span>
<span class="fd-has-margin-base fd-has-padding-xs">.fd-has-padding-xs</span>
<span class="fd-has-margin-base fd-has-padding-s">.fd-has-padding-s</span>
<span class="fd-has-margin-base fd-has-padding-m">.fd-has-padding-m</span>
<span class="fd-has-margin-base fd-has-padding-l">.fd-has-padding-l</span>
<span class="fd-has-margin-base fd-has-padding-xl">.fd-has-padding-xl</span>

<hr>

<h3> Removing padding by side using helper classes</h3>
<span class="fd-has-margin-base fd-has-padding-m fd-has-padding-top-none">.fd-has-padding-top-none</span>
<span class="fd-has-margin-base fd-has-padding-m fd-has-padding-right-none">.fd-has-padding-right-none</span>
<span class="fd-has-margin-base fd-has-padding-m fd-has-padding-bottom-none">.fd-has-padding-bottom-none</span>
<span class="fd-has-margin-base fd-has-padding-m fd-has-padding-left-none">.fd-has-padding-left-none</span>
{% endcapture %}
{% include display-component.html component=margin %}


## Other Utilities
{: .docs-header-h2}

### Clearfix
{: .docs-header-h3}

{% capture clear %}
<span class="fd-has-clearfix">This element clear all</span>
{% endcapture %}

{% include display-component.html component=clear %}

### Display Flex
{: .docs-header-h3}

{% capture flex %}
<span class="fd-has-display-flex">This element is display flex</span>
{% endcapture %}

{% include display-component.html component=flex %}

### Display Block
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-display-block">This element is display block</span>
{% endcapture %}

{% include display-component.html component=block %}

### Align items center
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-align-items-center">This element is align items center</span>
{% endcapture %}

{% include display-component.html component=block %}

### Flex grow
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-flex-grow-1">This element is flex grow</span>
{% endcapture %}

{% include display-component.html component=block %}
