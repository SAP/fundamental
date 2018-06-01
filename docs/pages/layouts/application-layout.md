---
title: Application Layout
keywords: application layouts overlay
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/application-layout.html
folder: layouts
summary:
---

Application layout containers are used to construct the master shell, providing structure to your application templates. The structure is divided into two layout components — `ui` and `app`.

- The `ui` layer is only for high-level containers: global header, app content, global footer and full-page overlay.
- The `app` layer is for application-level containers: sidebar and page content.

These are dumb containers only concerned with placement with no effect on their contents. Simple responsive behaviors are built-in.
<br><br>

## Container hierarchy

* `.fd-ui`: The outermost full-screen root wrapper
    * `.fd-ui__header`: Global header
        * `.fd-ui__header--fixed`: Modifier to make the header persistent (sticky)
    * `.fd-ui__app`: The wrapper for the app content
        * `.fd-app`: The root application content container
            * `.fd-app__sidebar`: Optional sidebar navigation container
            * `.fd-app__main`: Main app content
    * `.fd_ui__footer`: Optional global footer
        * `.fd-ui__footer--fixed`: Modifier to make the footer persistent (sticky)
    * `.fd-ui__overlay`: Appended container for overlaying content
        * `.fd-overlay`: Common standalone component used to dim background

## Application with only Top Bar
{: .docs-header-h2}
This is the master layout which provides the foundation for all page templates. Use this foundation when a full-width layout is needed, e.g., home page, launchpad, dashboard, etc.

Both the header and footer can be fixed by applying the `.fd-ui--fixed` modifier to the `.fd-ui` container, or each can be fixed individual by apply `.fd-ui__header--fixed` or `.fd-ui__footer--fixed`.

The `app` containers here provide additional structure to application content.

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
{% include display-component.html component=app-layout-no-sidebar class="app" %}

## Application with Sidebar
{: .docs-header-h2}

The sidebar is an optional `app` layout container and should be used with applications with more than two levels of navigation.

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
{% include display-component.html component=app-layout class="app" %}

## Application with UI overlay
{: .docs-header-h2}
The overlay container is meant to accommodate any content that needs to be positioned on top of the UI. The is often included at the bottom of the DOM to overcome positioning and overflow styles of content container.

Commonly the `fd-overlay` class will be added to the overlay to dim the background and center the content, as with a modal. However, the container is generic enough to accommodate any full-UI takeover.

The container visibility can be toggled with the `aria-hidden` attribute.

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
    <div class="fd-ui__overlay fd-overlay" aria-hidden="false">
        fd-ui_overlay fd-overlay
    </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout-no-sidebar class="app" %}
