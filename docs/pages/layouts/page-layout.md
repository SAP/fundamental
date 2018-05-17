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

<br/>

### App Structure Example
{: .docs-header-h3}

The following page example includes the [action bar](/components/action-bar.html) component in the `fd-page__header`

{% capture page-layout-example %}
<article class="fd-page">
    <header class="fd-page__header">
        <div class="fd-action-bar">
            <div class="fd-action-bar__navigation">
                <button class="fd-button fd-button--text fd-button--icon fd-button--large" aria-label="Back">
                    <span class="fd-icon fd-icon--backarrow fd-icon--large" role="presentation"></span>
                </button>
            </div>
            <h1 class="fd-action-bar__title">
                Page Title
            </h1>
            <div class="fd-action-bar__actions">
                <div class="fd-action-bar__action-item">
                    <button class="fd-button fd-button--text fd-button--action-bar">
                        <span class="fd-icon fd-icon--close fd-icon--medium" role="presentation"></span>
                        Cancel
                    </button>
                </div>
                <div class="fd-action-bar__action-item">
                    <button class="fd-button fd-button--action-bar">
                        <span class="fd-icon fd-icon--checked fd-icon--medium" role="presentation"></span>
                        Save
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__intro">
        <p><em>This is where the page devel help/into text goes</em></p>
    </div>
    <div class="fd-page__content">
        <p class="fd-has-padding-reg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</article>
{% endcapture %}

{% include display-component.html component=page-layout-example %}
