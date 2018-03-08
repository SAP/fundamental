---
title: Image
keywords: image
sidebar: left-navigation-sidebar
toc: false
permalink: components/image.html
folder: components
summary:
---

When using images you can use our helpers classes to adjust the size and the shape.

<hr>

## Sizes

Sizes helper classes are named from `fd-image-xs` to `fd-image-xxl`.

{% capture default %}
<span class="fd-image fd-image--xs" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--s" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--m" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--l" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--xl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--xxl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
{% endcapture %}

{% include display-component.html component=default %}

<br>

## Shapes

The images can also have different shapes. The default been square when you don't specify the shape. Also you can use rounded corners with `fd-image--rounded` or a full circle shape `fd-image--circle`.

{% capture shapes %}
<span class="fd-image fd-image--xxl" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--xxl fd-image--rounded" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
<span class="fd-image fd-image--xxl fd-image--circle" aria-label="Image label" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
{% endcapture %}

{% include display-component.html component=shapes %}

<br>

# Placeholders

Some of the images element can be empty at some point so you can use our helpers classes to display a placeholder instead. We defined two main placeholders, `fd-image--profile` used when displaying user avatars; `fd-image--product` for products, services, etc.

The placeholders can be combined also with the sizes and shapes helpers as well.

{% capture placeholders %}
<span class="fd-image fd-image--xl fd-image--rounded fd-image--product" aria-label="Product"></span>
<span class="fd-image fd-image--xxl fd-image--rounded fd-image--product" aria-label="Product"></span>
<span class="fd-image fd-image--xl fd-image--circle fd-image--profile" aria-label="John Smith"></span>
<span class="fd-image fd-image--xxl fd-image--circle fd-image--profile" aria-label="John Smith"></span>
{% endcapture %}

{% include display-component.html component=placeholders %}
