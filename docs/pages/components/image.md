---
title: Image
id: image
keywords: image
sidebar: left-navigation-sidebar
toc: false
permalink: components/image.html
folder: components
summary:
---

An image is used to apply shapes to images.
{: .docs-intro}


<hr>

When using images, use the following helpers classes to adjust the size and the shape.


## Size and Shape

Size Options: `--s` 24x24, `--m` 36x36, `--l` 48x48

Shape Option: `--circle` will render a round image

{% capture default %}
<span class="fd-image--s" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--m" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--l" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<br><br>

<span class=" fd-image--s fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--m fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--l fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>
{% endcapture %}

{% include display-component.html component=default %}
