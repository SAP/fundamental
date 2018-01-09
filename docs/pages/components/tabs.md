---
title: Tabs
keywords: tab, tabs
sidebar: left-navigation-sidebar
toc: false
permalink: tabs.html
folder: components
summary:
---

NOTE: The .tn-tabs__item container is optional. You can use nav and a elements to the same effect.

{% capture default-tab %}
<ul class="tn-tabs" role="tablist">
    <li class="tn-tabs__item">
        <a class="tn-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">Link</a>
    </li>
    <li class="tn-tabs__item">
        <a class="tn-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">Selected</a>
    </li>
    <li class="tn-tabs__item">
        <a class="tn-tabs__link" aria-controls="7ae0T849" href="#7ae0T849" role="tab">Link</a>
    </li>
    <li class="tn-tabs__item">
        <a class="tn-tabs__link" aria-controls="IR27Y941" aria-disabled="true" role="tab">Disabled</a>
    </li>
</ul>
<div class="tn-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="tn-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="tn-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
<div class="tn-tabs__panel" aria-expanded="false" id="IR27Y941" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}

<br />

{% include display-component.html component=default-tab %}

{% capture modified-tab %}
<nav class="tn-tabs" role="tablist">
    <a class="tn-tabs__link" aria-controls="kf8369" href="#kf8369" role="tab">Link</a>
    <a class="tn-tabs__link" aria-controls="9uQ282" aria-selected="true" href="#9uQ282" role="tab">Selected</a>
    <a class="tn-tabs__link" aria-controls="DGl707" href="#DGl707" role="tab">Link</a>
    <a class="tn-tabs__link" aria-controls="98q398" aria-disabled="true" role="tab">Disabled</a>
</nav>
<div class="tn-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="tn-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="tn-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
<div class="tn-tabs__panel" aria-expanded="false" id="98q398" role="tabpanel">
    Tincidunt nunc
</div>
{% endcapture %}

{% include display-component.html component=modified-tab %}
