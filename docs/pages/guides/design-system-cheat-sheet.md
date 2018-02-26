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

{% capture text-util %}
<p class="fd-has-font-weight-bold">This text is bold</p>
<p class="fd-has-font-style-italic">This text is italic</p>
<p class="fd-has-text-align-center">This text is centered</p>
<p class="fd-has-text-align-right">This text is right</p>
<p class="fd-text-transform-none">text with no transformation</p>
{% endcapture %}
{% include display-example.html component=text-util %}

<br>

## Floats

{% capture float-util %}
<p class="fd-has-float-left">This text is floating on left</p>
<p class="fd-has-float-right">This text is floating on right</p>
{% endcapture %}
{% include display-example.html component=float-util %}

<br>

## Type Sizes
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

<br>

## Type Face
`fd-has-font-family-body` renders Open-Sans font.
`fd-has-font-family-header` renders Roboto font.
{% capture type-face %}
<p class="fd-has-font-family-body">This is body text</p>
<p class="fd-has-font-family-header">This is header text</p>
<p class="fd-has-font-family-code">This is code text</p>
{% endcapture %}
{% include display-example.html component=type-face %}

<br>

## Type Weights
used with `fd-has-font-family-header` for illustrate weight variants
{% capture type-weight %}
<p class="fd-has-font-family-header fd-has-font-weight-light">This is font with weight light</p>
<p class="fd-has-font-family-header fd-has-font-weight-reg">This is font with weight regular</p>
<p class="fd-has-font-family-header fd-has-font-weight-med">This is font with weight medium</p>
<p class="fd-has-font-family-header fd-has-font-weight-semi">This is font with weight semi-bold</p>
<p class="fd-has-font-family-header fd-has-font-weight-bold">This is font with weight bold</p>
{% endcapture %}
{% include display-example.html component=type-weight %}

<br>

## Colors
Helper classes are available as a foreground color class `fd-has-color-{color-group}-{color-number}` or as a background color `fd-has-background-color-{color-group}-{color-number}`.
A foreground color class applies the color property to the element for example `.fd-has-color-primary` results in `color: ##006fbb !important`

Colors can be accessed via color function [`fd-color(color-group, color-numer)`](how-to-use-scss.html#core-functions-and-mix-ins)

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

{% endcapture %}
{% include display-example.html component=color %}



.fd-has-color-text-inverse,
.fd-has-color-text-inverse-1 {
  color: #fff!important
}
.fd-has-color-text-inverse-2 {
  color: #f6f8f9!important
}
.fd-has-color-text-inverse-3 {
  color: #eef1f3!important
}
.fd-has-color-background,
.fd-has-color-background-1 {
  color: #fff!important
}
.fd-has-color-background-2 {
  color: #f0f5ff!important
}
.fd-has-color-background-3 {
  color: #000!important
}
.fd-has-color-neutral,
.fd-has-color-neutral-1 {
  color: #f9fbfc!important
}
.fd-has-color-neutral-2 {
  color: #d7d7d7!important
}
.fd-has-color-neutral-3 {
  color: #ccdaeb!important
}
.fd-has-color-neutral-4 {
  color: #8a8fa1!important
}
.fd-has-color-status,
.fd-has-color-status-1 {
  color: #61bf33!important
}
.fd-has-color-status-2 {
  color: #e97326!important
}
.fd-has-color-status-3 {
  color: #df1919!important
}
