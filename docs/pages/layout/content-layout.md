---
title: Content Layout
keywords: content layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layout/content-layout.html
folder: guides
summary:
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Page Layout
{: .docs-header-h2}

```
.fd-page
    .fd-page__header
    .fd-page__intro
    .fd-page__content
```
{% capture page-layout %}
<article class="fd-page">
    <header class="fd-page__header">
        page_header
    </header>
    <div class="fd-page__intro">
        <p><em>page_intro</em></p>
    </div>
    <div class="fd-page__content">
        page_content
    </div>
</article>
{% endcapture %}
{% include display-example.html component=page-layout %}


## Section Anatomy
{: .docs-header-h2}

```
.fd-section
    .fd-section__header
        .fd-section__title
        .fd-section__actions
    .fd-container
    .fd-section__footer
```

{% capture app-layout %}
<div class="docs-example__section">
    <section class="fd-section">
        <header class="fd-section__header">
            <h1 class="fd-section__title">
                Section Title
            </h1>
            <div class="fd-section__actions">
                Section Actions
            </div>
        </header>
        <div class="fd-container">
            Section Content
        </div>
        <footer class="fd-section__footer">
            Section footer
        </footer>
    </section>
</div>

{% endcapture %}
{% include display-example.html component=app-layout %}
