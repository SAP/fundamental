---
title: Page Layout
keywords: page layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/page-layout.html
folder: layouts
summary:
---
`.fd-page`: is the main element that contains all elements present in the page.

## Page Layout Structure
{: .docs-header-h2}

The elements used to construct a page are:
* `.fd-page`: is the page level layout it consists of a header, intro and content.
  * `.fd-page__header`: the page level heading
  * `.fd-page__content`: holds the page page content

<br/>

{% capture page-layout %}
<article class="fd-page">
    <header class="fd-page__header">
        fd-page_header
    </header>
    <div class="fd-page__content">
        fd-page_content
    </div>
</article>
{% endcapture %}
{% include display-example.html component=page-layout  class="page"%}
