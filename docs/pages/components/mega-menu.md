---
title: Mega Menu
keywords: mega, menu
sidebar: left-navigation-sidebar
toc: false
permalink: components/mega-menu.html
folder: components
summary: Deprecated
---

> <small>`mega-menu` component has been deprecated. It will continue to work until v1.5 release.</small>

Mega menu is used in conjunction with Context Switcher within the Global Navigation (link to Global Nav page) and supports two levels within a hierarchy.

<hr>

## Default Mega Menu

{% capture default-alert %}
<nav class="fd-mega-menu" id="">
    <div class="fd-mega-menu__group">
        <h1 class="fd-mega-menu__title">Group Name</h1>
        <ul class="fd-mega-menu__list">
            <li class="fd-mega-menu__item">
                <a class="fd-mega-menu__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-mega-menu__item">
                <a class="fd-mega-menu__link has-child" href="#" aria-controls="kIGVv418" aria-haspopup="true">
                    item link
                </a>
                <ul class="fd-mega-menu__sublist" id="kIGVv418" aria-hidden="true">
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
            <li class="fd-mega-menu__item">
                <a class="fd-mega-menu__link has-child" href="#" aria-controls="iOnP0943" aria-haspopup="true">
                    item link
                </a>
                <ul class="fd-mega-menu__sublist" id="iOnP0943" aria-hidden="true">
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
{% endcapture %}

{% include display-component.html component=default-alert %}
