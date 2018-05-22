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
