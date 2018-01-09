---
title: Icons
keywords: icon, icons
sidebar: left-navigation-sidebar
toc: false
permalink: icons.html
folder: components
summary:
---
Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun. Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components

<hr>

## Icon usage
{% highlight html %}
<span class="tn-icon tn-icon--{icon-name}"></span>
<span class="tn-icon tn-icon--{icon-name} tn-icon--medium"></span>
<span class="tn-icon tn-icon--{icon-name} tn-icon--large"></span>
{% endhighlight %}

<br />

## Available Icons
{% for icon in site.data.icons %}
<div class="demo-icon-wrapper">
  <span class="tn-icon tn-icon--{{ icon.name }}"></span>
  <span class="tn-icon tn-icon--{{ icon.name }} tn-icon--medium"></span>
  <span class="tn-icon tn-icon--{{ icon.name }} tn-icon--large"></span>
  <h4>.tn-icon--{{ icon.name }}</h4>
</div>
{% endfor %}
