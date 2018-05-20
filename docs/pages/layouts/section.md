---
title: Section Layout
keywords: section layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/section.html
folder: layouts
summary:
---
`fd-section` is used to divide a page into different sections. The primary purpose of a section is to hold one or more panels.
Panels can further be organized using `fd-container` and `fd-col--[num]` inside of a section

<hr/>

## Section structure
{% capture section-layout %}
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
{% endcapture %}
{% include display-example.html component=section-layout class="section" %}

## Section with panels
{: .docs-header-h3}

{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-panel">
            .fd-panel
        </div>
    </div>
</section>
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-col--6">
            <div class="fd-panel">
                .fd-panel
            </div>
        </div>
        <div class="fd-col--6">
            <div class="fd-panel">
                .fd-panel
            </div>
        </div>
    </div>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}

<style media="screen">
    .fd-panel{
        padding: 20px;
        padding-top:40px;
        height: 100px;
        text-align: center;
    }
</style>
