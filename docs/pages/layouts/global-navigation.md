---
title: Global Navigation
keywords: global navigation
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/global-navigation.html
folder: layouts
summary:
---
The global navigation component offers a similar navigation approach between Hybris applications. It allows for branding, application groupings, access to a left navigation, switch between applications, contexts and access tooling such as search or a users' profile.
Elements and positioning in the global navigation are optional but included are:

* Suite name - identifies the suite or common grouping of the applications
* Logo - allows for common branding. SAP Hybris applications display the SAP logo.
* Left navigation menu icon - allows for the left navigation to be expanded or collapsed
* Application switcher - allows for the identification of the application. Users can switch between applications within the suite/grouping of applications.
* Context switcher - allows for switching context of application such as an organization or subscription.
* Search icon - on click, a search field is displayed.
* User icon - on click, user options are displayed such as Sign Off and Preferences.
Additional tooling icons - if the application requires additional tooling, it can be accessed via an icon in the same area of the global header as the search and user icons.


## Application with Sidebar
{: .docs-header-h2}

Use this layout when your application needs a sidebar to navigate inside the application.

{% capture app-layout %}
<nav class="fd-global-nav">
    <div class="fd-global-nav__group fd-global-nav__group--left">
        <div class="fd-global-nav__side-menu">
            <button class=" fd-button--secondary fd-button--l sap-icon--menu2 fd-global-nav__btn"
                aria-label="BUTTON_LABEL"></button>
        </div>
        <div class="fd-global-nav__logo fd-has-margin-left-none"></div><div class="fd-global-nav__product-name">
            Product Name
        </div>
    </div>
	<div class="fd-global-nav__group fd-global-nav__launchpad">
        <button class=" fd-button--secondary fd-button--l" aria-label="BUTTON_LABEL" aria-haspopup="true"
        aria-controls="launchpad">Suite Name</button>
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
                        <a class="fd-mega-menu__link has-child" href="#" aria-controls="zEjHZ588" aria-haspopup="true">
                            item link
                        </a>
                        <ul class="fd-mega-menu__sublist" id="zEjHZ588" aria-hidden="true">
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
                    <li class="fd-mega-menu__item"><a class="fd-mega-menu__link" href="#">
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
                    <li class="fd-mega-menu__item">
                        <a class="fd-mega-menu__link has-child" href="#"
                        aria-controls="NC0xp739" aria-haspopup="true">
                            item link
                        </a>
                        <ul class="fd-mega-menu__sublist" id="NC0xp739" aria-hidden="true">
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
    <div class="fd-global-nav__group fd-global-nav__group--right"><div class="fd-global-nav__context-menu">
        <div class="fd-dropdown">
            <button class="fd-dropdown__control fd-dropdown__control--no-border" aria-controls="0aNIu838" aria-expanded="false" aria-haspopup="true">
                Context Switcher
            </button>
            <ul class="fd-dropdown__menu" aria-hidden="true" id="0aNIu838">
                <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
                <li><a href="#" class="fd-dropdown__item">Link Name</a></li>
            </ul>
        </div>
    </div>
        <div class="fd-global-nav__actions">
            <div class="fd-global-nav__search">
                <button class=" fd-button--secondary fd-button--m sap-icon--search fd-global-nav__btn" aria-label="BUTTON_LABEL" aria-controls="grH4K890" aria-haspopup="true" aria-expanded="false"></button>
                <input type="text" class="fd-form__control" id="grH4K890" aria-hidden="true" placeholder="Search... ">
            </div>
            <button class=" fd-button--secondary fd-button--m sap-icon--action-settings fd-global-nav__btn" aria-label="BUTTON_LABEL"></button>
            <span class=" fd-identifier--s fd-has-margin-right-xs">WW</span>
        </div>
    </div>
</nav>
{% endcapture %}
{% include display-example.html component=app-layout class="app" %}
