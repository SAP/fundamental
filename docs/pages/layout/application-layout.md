---
title: Application Layouts
keywords: application layouts
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/application-layouts.html
folder: guides
summary:
---
Application layouts is the shell that holds your app. It consists of a global header, sidebar, the main app and a footer.

## Application Layouts Structure
{: .docs-header-h2}

Bellow are the main elements that conform an application build with Fundamental UI.

* `.fd-ui`: The outer most wrapper of the app
    * `.fd-ui__header`: Global header of the app
    * `.fd-ui__app`: The wrapper for the main app
        * `.fd-app`: The secondary wrapper for the app (in case you need to switch between different apps)
            * `.fd-app__sidebar`: Side bar navigation for the app
            * `.fd-app__main`: Main app content
    * `.fd_ui__footer`: Global footer for the application

<br/>

## Aplication with Sidebar

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

<br/>

## Aplication with only Top Bar

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
