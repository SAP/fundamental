---
title: Section Layout
keywords: section layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/section.html
folder: layouts
summary:
---
`.fd-section`: used to encapsulate areas of content. In can contain actions that can be performed

## Section Layout
{: .docs-header-h2}

`fd-section` are used to divide a page into different sections. For example, a form and table or list view on the same page can be split into different page sections.

* `.fd-section`: the wrapper container for the section.
  * `.fd-section__header`: is a wrapper div that hold the section title and action buttons.
  * `.fd-section__title`: hold the title of the section.
  * `.fd-section__actions`: can hold the action buttons for the section such as a add, remove or a contextual menu.
  * `.fd-section__footer`: the optional footer of the section.

<br/>

{% capture section-layout %}
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
{% endcapture %}
{% include display-example.html component=section-layout class="section" %}

### Section Example
{: .docs-header-h3}

Example with two sections, one containing a `form` and the other a `table`.

The section containing the form have a contextual menu as main actions container. The section containing the table have a "add" action.

{% capture section-layout-example %}
<section class="fd-section">
    <header class="fd-section__header">
        <h1 class="fd-section__title">
            Vivamus sagittis <span class="fd-badge fd-badge--success">Active</span>
        </h1>
        <div class="fd-section__actions">
            <div class="fd-dropdown">
                <button class="fd-button fd-button--text fd-button--action-bar"
                aria-controls="3ewpS611" aria-haspopup="true" aria-expanded="false" aria-label="More">
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
        <div class="fd-col--2"><span class="fd-image fd-image--xxl fd-image--circle fd-image--profile"
        aria-label="Image label"></span></div>
        <div class="fd-col--10">
            <div class="fd-col--6">
                <div class="fd-form__item">
                    <label class="fd-form__label" for="VDQ4Z626">
                        Label
                    </label>
                    <input type="text" class="fd-form__control" id="VDQ4Z626"
                    readonly="" value="Non-editable value">
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
                    <input type="text" class="fd-form__control" id="uaB3S746"
                    placeholder="Field placholder value">
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
                    <input type="text" class="fd-form__control" id="xptZT462"
                    placeholder="Field placholder value">
                </div>
            </div>
        </div>
    </div>
    <footer class="fd-section__footer">
        <em>Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.</em>
    </footer>
</section>
<section class="fd-section fd-section--full-bleed">
    <header class="fd-section__header">
        <h1 class="fd-section__title">
            Table
        </h1>
        <div class="fd-section__actions">
            <button class="fd-button fd-button--text fd-button--small">
                <span class="fd-icon fd-icon--add" role="presentation"></span>
                Add
            </button>
        </div>
    </header>
    <table class="fd-table">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1.1</td>
                <td>Data 1.2</td>
                <td>Data 1.3</td>
                <td>Data 1.4</td>
                <td>Data 1.5</td>
            </tr>
            <tr>
                <td>Data 2.1</td>
                <td>Data 2.2</td>
                <td>Data 2.3</td>
                <td>Data 2.4</td>
                <td>Data 2.5</td>
            </tr>
        </tbody>
    </table>
    <footer class="fd-section__footer">
        <a href="#" class="fd-button fd-button--link">See All</a>
    </footer>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}
