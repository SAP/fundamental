---
title: Application Layout
keywords: application layouts overlay
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/application-layout.html
folder: layouts
summary:
---

Application layout is the shell that holds your app. It consists of a global header, sidebar, the main app and a footer.Bellow are the main elements that conform an application build with Fundamental UI.

<hr/>

## Application layout structure
{: .docs-header-h2}
* `.fd-ui`: The outer most wrapper of the app
    * `.fd-ui__header`: Global header of the app
        * `.fd-ui__header--fixed`: Modifier to make the header persistent (sticky)
    * `.fd-ui__app`: The wrapper for the main app
        * `.fd-app`: The secondary wrapper for the app (in case you need to switch between different apps)
            * `.fd-app__sidebar`: Side bar navigation for the app
            * `.fd-app__main`: Main app content
    * `.fd_ui__footer`: Global footer for the application
        * `.fd-ui__footer--fixed`: Modifier to make the footer persistent (sticky)
* `.fd-overlay`: Overlay element that is used to dim out the application UI when a modal is open

<br>

## Application with Sidebar
{: .docs-header-h2}

Use this layout when your application needs a sidebar to navigate inside the application.

{% capture app-layout %}
<div class="fd-ui fd-ui--fundamental">
    <div class="fd-ui__header">
        fd-ui_header
    </div>
    <div class="fd-ui__app">
        <div class="fd-app">
            <div class="fd-app__sidebar">
                fd-app_sidebar
            </div>
            <main class="fd-app__main">
                fd-app_main
            </main>
        </div>
    </div>
    <div class="fd-ui__footer">
        fd-ui_footer
    </div>
</div>
{% endcapture %}
{% include display-example.html component=app-layout class="app" %}

<br>

## Application with Sidebar and example components
{: .docs-header-h2}

Use this layout when your application needs a sidebar to navigate inside the application.

{% capture app-layout %}
<div class="fd-ui fd-ui--fundamental">
    <div class="fd-ui__header">
        <nav class="fd-global-nav">
            <div class="fd-global-nav__group fd-global-nav__group--left"><div class="fd-global-nav__side-menu">
                <button class=" fd-button--secondary fd-button--l sap-icon--menu2 fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
            </div>
            <div class="fd-global-nav__logo fd-has-margin-left-none"></div><div class="fd-global-nav__product-name">
                Product Name
            </div>
        </div>
        <div class="fd-global-nav__group fd-global-nav__launchpad">
            <button class=" fd-button--secondary fd-button--l" aria-haspopup="true" aria-controls="launchpad">Suite Name</button>
            <nav class="fd-mega-menu" aria-hidden="true" id="launchpad">
                <div class="fd-mega-menu__header">
                    <a href="#" class="fd-mega-menu__header-link sap-icon--home">SAP Hybris Home</a>
                </div>
                <div class="fd-mega-menu__group">
                    <h1 class="fd-mega-menu__title">Group Name</h1>
                    <ul class="fd-mega-menu__list">
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link has-child" href="#" aria-controls="4qrOw359" aria-haspopup="true">
                                item link
                            </a>
                            <ul class="fd-mega-menu__sublist" id="4qrOw359" aria-hidden="true">
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="fd-mega-menu__group">
                    <h1 class="fd-mega-menu__title">Group Name</h1>
                    <ul class="fd-mega-menu__list">
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                        item link
                    </a>
                    <ul class="fd-mega-menu__sublist" id="gBhrI826" aria-hidden="true">
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-mega-menu__item">
                    <a class="fd-mega-menu__link" href="#">
                        item link
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div class="fd-global-nav__group fd-global-nav__group--right">
    <div class="fd-global-nav__context-menu">
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border fd-button--secondary" aria-controls="7CuNa393" aria-expanded="false" aria-haspopup="true">
                Context Switcher
            </button>
            <nav class="fd-dropdown__menu" aria-hidden="true" id="7CuNa393">
                <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="fd-global-nav__actions">
        <div class="fd-global-nav__search">
            <button class=" fd-button--secondary fd-button--m sap-icon--search fd-global-nav__btn" aria-label="BUTTON_LABEL" aria-controls="P4Iil144" aria-haspopup="true" aria-expanded="false"></button>
            <input type="text" class="fd-form__control" id="P4Iil144" aria-hidden="true" placeholder="Search... ">
        </div>
        <button class=" fd-button--secondary fd-button--m sap-icon--action-settings fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
        <button class=" fd-button--secondary fd-button--m fd-global-nav__btn" aria-label="BUTTON_LABEL"><span class=" fd-identifier--s fd-identifier--circle">WW</span></button>
    </div>
</div>
</nav>
</div>
<div class="fd-app">
    <div class="fd-app__sidebar">
        <nav class="fd-side-nav">
            <div class="fd-side-nav__group">
                <ul class="fd-side-nav__list">
                    <li class="fd-side-nav__item">
                        <a class="fd-side-nav__link" href="#">
                            <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                            Home
                        </a>
                    </li>
                    <li class="fd-side-nav__item">
                        <a class="fd-side-nav__link is-expanded has-child" aria-expanded="true" href="#" aria-controls="tpbPj628" aria-haspopup="true">
                            <span class="fd-side-nav__icon sap-icon--video sap-icon--l" role="presentation"></span>
                            Category
                        </a>
                        <ul class="fd-side-nav__sublist" id="tpbPj628" aria-hidden="false">
                            <li class="fd-side-nav__subitem">
                                <a class="fd-side-nav__sublink" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="fd-side-nav__subitem">
                                <a class="fd-side-nav__sublink is-selected" aria-selected="true" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="fd-side-nav__subitem">
                                <a class="fd-side-nav__sublink" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="fd-side-nav__subitem">
                                <a class="fd-side-nav__sublink" href="#">
                                    Link
                                </a>
                            </li></ul></li>
                            <li class="fd-side-nav__item"><a class="fd-side-nav__link" href="#"><span class="fd-side-nav__icon sap-icon--pending sap-icon--l" role="presentation"></span>
                                Page
                            </a></li>
                            <li class="fd-side-nav__item"><a class="fd-side-nav__link has-child" href="#" aria-controls="FExGc636" aria-haspopup="true"><span class="fd-side-nav__icon sap-icon--retail-store sap-icon--l" role="presentation"></span>
                                Category
                            </a>
                            <ul class="fd-side-nav__sublist" id="FExGc636" aria-hidden="true">
                                <li class="fd-side-nav__subitem">
                                    <a class="fd-side-nav__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-side-nav__subitem">
                                    <a class="fd-side-nav__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-side-nav__subitem">
                                    <a class="fd-side-nav__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-side-nav__subitem">
                                    <a class="fd-side-nav__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="fd-side-nav__item"><a class="fd-side-nav__link" href="#">
                            <span class="fd-side-nav__icon sap-icon--leads sap-icon--l" role="presentation"></span>
                            Page
                        </a></li>
                        <li class="fd-side-nav__item"><a class="fd-side-nav__link" href="#">
                            <span class="fd-side-nav__icon sap-icon--history sap-icon--l" role="presentation"></span>
                            Page
                        </a>
                    </li>
                </ul>
            </div>
            <div class="fd-side-nav__group">
                <h1 class="fd-side-nav__title">Group</h1>
                <ul class="fd-side-nav__list">
                    <li class="fd-side-nav__item">
                        <a class="fd-side-nav__link" href="#">
                            <span class="fd-side-nav__icon sap-icon--user-settings sap-icon--l" role="presentation"></span>
                            Page
                        </a>
                    </li>
                    <li class="fd-side-nav__item">
                        <a class="fd-side-nav__link" href="#">
                            <span class="fd-side-nav__icon sap-icon--cloud sap-icon--l" role="presentation"></span>
                            Page
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <main class="fd-app__main">
        <article class="fd-page">
            <header class="fd-page__header">
                <ul class="fd-breadcrumb">
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                </ul>
                <div class="fd-action-bar">
                    <div class="fd-action-bar__header">
                        <h1 class="fd-action-bar__title">
                            Page Title
                        </h1>
                        <p class="fd-action-bar__description">Optional page intro lorem ipsum dolor</p>
                    </div>
                    <div class="fd-action-bar__actions">
                        <button class=" fd-button--secondary fd-button--l">Cancel</button>
                        <button class=" fd-button--main fd-button--l">Save</button>
                    </div>
                </div>
            </header>
            <div class="fd-page__content">
                <section class="fd-section">
                </section>
            </div>
        </article>
    </main>
</div>
<div class="fd-ui__footer">
    fd-ui_footer
</div>
</div>
{% endcapture %}
{% include display-example.html component=app-layout class="app-example" %}

<br>

## Application with only Top Bar
{: .docs-header-h2}
Use this layout when your application is very simple and doesn't need a sidebar navigation.

{% capture app-layout-no-sidebar %}
<div class="fd-ui fd-ui--fundamental">
    <div class="fd-ui__header">
        fd-ui_header
    </div>
    <div class="fd-ui__app">
        <div class="fd-app">
            <main class="fd-app__main">
                fd-app_main
            </main>
        </div>
    </div>
    <div class="fd-ui__footer">
        fd-ui_footer
    </div>
</div>
{% endcapture %}
{% include display-example.html component=app-layout-no-sidebar class="app" %}

<br>

## Application with Sidebar and example components
{: .docs-header-h2}

Use this layout when your application needs a sidebar to navigate inside the application.

{% capture app-layout %}
<div class="fd-ui fd-ui--fundamental">
    <div class="fd-ui__header">
        <nav class="fd-global-nav">
            <div class="fd-global-nav__group fd-global-nav__group--left"><div class="fd-global-nav__side-menu">
                <button class=" fd-button--secondary fd-button--l sap-icon--menu2 fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
            </div>
            <div class="fd-global-nav__logo fd-has-margin-left-none"></div><div class="fd-global-nav__product-name">
                Product Name
            </div>
        </div>
        <div class="fd-global-nav__group fd-global-nav__launchpad">
            <button class=" fd-button--secondary fd-button--l" aria-haspopup="true" aria-controls="launchpad">Suite Name</button>
            <nav class="fd-mega-menu" aria-hidden="true" id="launchpad">
                <div class="fd-mega-menu__header">
                    <a href="#" class="fd-mega-menu__header-link sap-icon--home">SAP Hybris Home</a>
                </div>
                <div class="fd-mega-menu__group">
                    <h1 class="fd-mega-menu__title">Group Name</h1>
                    <ul class="fd-mega-menu__list">
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link has-child" href="#" aria-controls="4qrOw359" aria-haspopup="true">
                                item link
                            </a>
                            <ul class="fd-mega-menu__sublist" id="4qrOw359" aria-hidden="true">
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                                <li class="fd-mega-menu__subitem">
                                    <a class="fd-mega-menu__sublink" href="#">
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="fd-mega-menu__group">
                    <h1 class="fd-mega-menu__title">Group Name</h1>
                    <ul class="fd-mega-menu__list">
                        <li class="fd-mega-menu__item">
                            <a class="fd-mega-menu__link" href="#">
                                item link
                            </a>
                        </li>
                        item link
                    </a>
                    <ul class="fd-mega-menu__sublist" id="gBhrI826" aria-hidden="true">
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                        <li class="fd-mega-menu__subitem">
                            <a class="fd-mega-menu__sublink" href="#">
                                Link
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-mega-menu__item">
                    <a class="fd-mega-menu__link" href="#">
                        item link
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div class="fd-global-nav__group fd-global-nav__group--right">
    <div class="fd-global-nav__context-menu">
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border fd-button--secondary" aria-controls="7CuNa393" aria-expanded="false" aria-haspopup="true">
                Context Switcher
            </button>
            <nav class="fd-dropdown__menu" aria-hidden="true" id="7CuNa393">
                <ul class="fd-dropdown__list">
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                    <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="fd-global-nav__actions">
        <div class="fd-global-nav__search">
            <button class=" fd-button--secondary fd-button--m sap-icon--search fd-global-nav__btn" aria-label="BUTTON_LABEL" aria-controls="P4Iil144" aria-haspopup="true" aria-expanded="false"></button>
            <input type="text" class="fd-form__control" id="P4Iil144" aria-hidden="true" placeholder="Search... ">
        </div>
        <button class=" fd-button--secondary fd-button--m sap-icon--action-settings fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
        <button class=" fd-button--secondary fd-button--m fd-global-nav__btn" aria-label="BUTTON_LABEL"><span class=" fd-identifier--s fd-identifier--circle">WW</span></button>
    </div>
</div>
</nav>
</div>
<div class="fd-app">
    <main class="fd-app__main">
        <article class="fd-page">
            <header class="fd-page__header">
                <ul class="fd-breadcrumb">
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                    <li class="fd-breadcrumb__item">
                        <a class="fd-breadcrumb__link" href="#">Link Text</a>
                    </li>
                </ul>
                <div class="fd-action-bar">
                    <div class="fd-action-bar__header">
                        <h1 class="fd-action-bar__title">
                            Page Title
                        </h1>
                        <p class="fd-action-bar__description">Optional page intro lorem ipsum dolor</p>
                    </div>
                </div>
            </header>
            <div class="fd-page__content">
                <section class="fd-section">
                </section>
            </div>
        </article>
    </main>
</div>
<div class="fd-ui__footer">
    fd-ui_footer
</div>
</div>
{% endcapture %}
{% include display-example.html component=app-layout class="app-example" %}

## Application Overlay
{: .docs-header-h2}

You can use the `.fd-overlay` to block out the UI when a is open and the user needs to take an action in order to move forward.

Then put inside other components like [modals](/components/modal.html).

{% capture app-layout-no-sidebar %}
<div class="fd-ui fd-ui--fundamental">
    <div class="fd-ui__header">
        fd-ui_header
    </div>
    <div class="fd-ui__app">
        <div class="fd-app">
            <main class="fd-app__main">
                fd-app_main
            </main>
        </div>
    </div>
    <div class="fd-ui__footer">
        fd-ui_footer
    </div>
</div>
<div class="fd-overlay">
    <div class="fd-modal">
        <div class="fd-modal__content">
            <div class="fd-modal__header">
                <h1 class="fd-modal__title">Modal</h1>
                <button class="fd-modal__close" aria-label="close"></button>
            </div>
            <div class="fd-modal__body">
                <p>Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-example.html component=app-layout-no-sidebar class="app" %}
