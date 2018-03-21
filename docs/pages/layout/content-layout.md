---
title: Content Layout
keywords: content layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layout/content-layout.html
folder: guides
summary:
---
Content Layout required three main component - `.fd-page`, `.fd-section`, and `.fd-panel`.

## Page Layout
{: .docs-header-h2}

* `.fd-page` - this is the page level layout it consists of a header, intro and content.
  * `.fd-page__header` - This is the page level heading
  * `.fd-page__intro` - This can hold page intro or help text
  * `.fd-page__content` - This container holds the page page content


### Page Structure
{: .docs-header-h3}

{% capture page-layout %}
<div class="docs-example__page">
    <article class="fd-page">
        <header class="fd-page__header">
            fd-page_header
        </header>
        <div class="fd-page__intro">
            <p><em>fd-page_intro</em></p>
        </div>
        <div class="fd-page__content">
            fd-page_content
        </div>
    </article>
</div>
{% endcapture %}
{% include display-example.html component=page-layout %}

### Page Example
{: .docs-header-h3}

The following page example inlcudes the [action bar](/components/action-bar.html) componnet in the `fd-page__header`

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

## Section Layout
{: .docs-header-h2}

`fd-section` are used to divide a page into different areas on the same page. For example, a form and table on the same page can be split into difference page `sections`.

* `.fd-section` - This is the wrapper container for the section
  * `.fd-section__title` - This will hold the title of the section
  * `.fd-section__actions` - This can hold the action buttons for the section such as a add, remove or a contextual menu.
  * `.fd-section__footer` - This is the optional footer of the section


```
.fd-section
    .fd-section__header
        .fd-section__title
        .fd-section__actions
    .fd-container
    .fd-section__footer
```

{% capture section-layout %}
<div class="docs-example__section">
    <section class="fd-section">
        <header class="fd-section__header">
            <h1 class="fd-section__title">
                fd-section__title
            </h1>
            <div class="fd-section__actions">
                fd-section__actions
            </div>
        </header>
        <div class="fd-container">
            fd-container
        </div>
        <footer class="fd-section__footer">
            fd-section__footer
        </footer>
    </section>
</div>

{% endcapture %}
{% include display-example.html component=section-layout %}

### Section Example
{: .docs-header-h3}

{% capture section-layout-example %}
<section class="fd-section">
    <header class="fd-section__header">
        <h1 class="fd-section__title">
            Vivamus sagittis <span class="fd-badge fd-badge--success">Active</span>
        </h1>
        <div class="fd-section__actions">
            <div class="fd-dropdown">
                <button class="fd-button fd-button--text fd-button--action-bar" aria-controls="3ewpS611" aria-haspopup="true" aria-expanded="false" aria-label="More">
                    <span class="fd-icon fd-icon--more fd-icon--medium" role="presentation"></span>
                </button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="3ewpS611">
                    <li><a href="#" class="fd-dropdown__item">Action 1</a></li>
                    <li><a href="#" class="fd-dropdown__item">Action 2</a></li>
                    <li><a href="#" class="fd-dropdown__item">Action 3</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="fd-container">
        <div class="fd-col--2"><span class="fd-image fd-image--xxl fd-image--circle fd-image--profile" aria-label="Image label"></span></div>
        <div class="fd-col--10">
            <div class="fd-col--6">
                <div class="fd-form__item">
                    <label class="fd-form__label" for="VDQ4Z626">
                        Label
                    </label>
                    <input type="text" class="fd-form__control" id="VDQ4Z626" readonly="" value="Non-editable value">
                </div>
                <div class="fd-form__item">
                    <label class="fd-form__label" for="uaB3S746">
                        Label
                        <span class="fd-form__help">
                            <span class="fd-inline-help">
                                <span class="fd-inline-help__content">
                                    Lorem ipsim dolor sit amet
                                </span>
                            </span>
                        </span>
                    </label>
                    <input type="text" class="fd-form__control" id="uaB3S746" placeholder="Field placholder value">
                    <span class="fd-form__message">
                        Start with a letter, use only alphanumeric characters 3-16 characters
                    </span>
                </div>
            </div>
            <div class="fd-col--6">
                <div class="fd-form__item">
                    <label class="fd-form__label" for="RTiFm834">
                        Creation Date
                    </label>
                    <input type="text" class="fd-form__control" id="RTiFm834" readonly="" value="12/04/15">
                </div>
                <div class="fd-form__item">
                    <label class="fd-form__label" for="xptZT462">
                        Version
                        <span class="fd-form__help">
                            <span class="fd-inline-help">
                                <span class="fd-inline-help__content">
                                    Lorem ipsim dolor sit amet
                                </span>
                            </span>
                        </span>
                    </label>
                    <input type="text" class="fd-form__control" id="xptZT462" placeholder="Field placholder value">
                </div>
            </div>
        </div>
    </div>
    <footer class="fd-section__footer">
        <em>Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.</em>
    </footer>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}

## Panel Layout
{: .docs-header-h2}

a section of a page can further be broken down into a panel. You have have multiple
panels withing a section in verticle columns or horizaontal rows.

### Panel Structure
{: .docs-header-h3}

{% capture panel-layout%}
<div class="docs-example__panel">
    <div class="fd-panel">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title">
                fd-panel__title
            </h1>
            <div class="fd-panel__actions">
                fd-panel__actions
            </div>
        </div>
        <p>Very much like a <code>.fd-section</code> but intended to be used inside of a column.</p>
        <p>A <code>.fd-panel</code> should only be used when a title, actions and/or footer are needed
            with the content, otherwise the content can be placed directly inside the <code>.fd-col</code></p>
        <div class="fd-panel__footer">
            fd-panel__footer
        </div>
    </div>
</div>

{% endcapture %}
{% include display-example.html component=panel-layout %}
