---
title: Section
id: section
keywords: section layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/section.html
folder: layouts
summary:
---
The section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.
{: .docs-intro}

You will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.

Can hold two child types:
- `.fd-panel` (optionally with `.fd-panel-grid`) is the most common use.
- `.fd-container` and `fd-col--[num]` can be used to organize panels or content when a grid layout is not desired.

<br>

## Section structure
Shows an example of a background color applied with a helper class.

{% capture section-layout %}
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section fd-has-background-color-accent-4 fd-has-color-action-2">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
{% endcapture %}
{% include display-component.html component=section-layout class="section" %}


## Section with panel grid
{: .docs-header-h3}
Shows an example with the grid span helper class. This is most appropriate when displaying a collection of content in a linear order.
{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-panel-grid">
        <div class="fd-panel fd-has-grid-column-span-2">
            .fd-panel
        </div>
        <div class="fd-panel">
            .fd-panel
        </div>
        <div class="fd-panel">
            .fd-panel
        </div>
        <div class="fd-panel">
            .fd-panel
        </div>
        <div class="fd-panel">
            .fd-panel
        </div>
    </div>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}


## Section with panels
{: .docs-header-h3}
Shows an alternate layout option using columns. This may be more appropriate depending on the need to maintain source order and structure.
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


## Section with header
{: .docs-header-h3}
Header and title elements are available when necessary to label content groups.
{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-section__header">
      <h1 class="fd-section__title">Section title</h1>
    </div>
    <div class="fd-panel">
        .fd-panel
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
