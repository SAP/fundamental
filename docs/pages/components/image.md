---
title: Image
keywords: image
sidebar: left-navigation-sidebar
toc: false
permalink: image.html
folder: components
summary:
---

When using images you can use our helpers classes to adjust the size and the shape.

<hr>

## Sizes

Sizes helper classes are named from `tn-image-xs` to `tn-image-xxl`.

{% capture default %}
<span class="tn-image tn-image--xs" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--s" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--m" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--l" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--xl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--xxl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
{% endcapture %}

{% include display-component.html component=default %}

<br>

## Shapes

The images can also have different shapes. The default been square when you don't specify the shape. Also you can use rounded corners with `tn-image--rounded` or a full circle shape `tn-image--circle`. 

{% capture shapes %}
<span class="tn-image tn-image--xxl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--xxl tn-image--rounded" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="tn-image tn-image--xxl tn-image--circle" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
{% endcapture %}

{% include display-component.html component=shapes %}

<br>

# Placeholders

Some of the images element can be empty at some point so you can use our helpers classes to display a placeholder instead. We defined two main placeholders, `tn-image--profile` used when displaying user avatars; `tn-image--product` for products, services, etc.

The placeholders can be combined also with the sizes and shapes helpers as well.

{% capture placeholders %}
<span class="tn-image tn-image--xl tn-image--rounded tn-image--product" aria-label="Product"></span>
<span class="tn-image tn-image--xxl tn-image--rounded tn-image--product" aria-label="Product"></span>
<span class="tn-image tn-image--xl tn-image--circle tn-image--profile" aria-label="John Smith"></span>
<span class="tn-image tn-image--xxl tn-image--circle tn-image--profile" aria-label="John Smith"></span>
{% endcapture %}

{% include display-component.html component=placeholders %}
