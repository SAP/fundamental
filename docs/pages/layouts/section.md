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
                <button class=" fd-button--secondary sap-icon--vertical-grip" aria-controls="pQqQR213"
                aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                <nav class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="pQqQR213">
                  <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Pellentesque metus</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duis malesuada odio volutpat</a></li>
                    <li><a href="#" class="fd-dropdown__item">Suspendisse</a></li>
                    <li><a href="#" class="fd-dropdown__item">Donec mattis arcu et velit</a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
    <div class="fd-container">
        <div class="fd-col--1">
            <span class=" fd-identifier--l fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
        </div>
        <div class="fd-col--11">
            <div class="fd-col--6">
                <div class="fd-form__set">
                    <div class="fd-form__item">
                        <label class="fd-form__label" for="input-44">
                            Input with inline help
                            <span class="fd-inline-help fd-has-float-right">
                                <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </label>
                        <input class="fd-form__control" type="text" id="input-45" value="Read only data" readonly>
                    </div>
                    <div class="fd-form__item">
                        <label class="fd-form__label" for="input-44">
                            Input with inline help
                            <span class="fd-inline-help fd-has-float-right">
                                <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </label>
                        <input class="fd-form__control" type="text" id="input-45" value="Read only data">
                    </div>
                </div>
            </div>
            <div class="fd-col--6">
                <div class="fd-form__set">
                    <div class="fd-form__item">
                        <label class="fd-form__label" for="input-44">
                            Input with inline help
                            <span class="fd-inline-help fd-has-float-right">
                                <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </label>
                        <input class="fd-form__control" type="text" id="input-45" value="Read only data" readonly>
                    </div>
                    <div class="fd-form__item">
                        <label class="fd-form__label" for="input-44">
                            Input with inline help
                            <span class="fd-inline-help fd-has-float-right">
                                <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                </span>
                            </span>
                        </label>
                        <input class="fd-form__control" type="text" id="input-45" value="Read only data">
                    </div>
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
            <button class="fd-button sap-icon--add">Add New</button>
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
        <button class="fd-button--secondary">Secondary Button</button>
    </footer>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}
