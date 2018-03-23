---
title: Application Layout
keywords: application layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layout/application-layout.html
folder: guides
summary:
---
Application layout is the shell that holds your app. It consists of a global header, sidebar, the main app and a footer.

## Application Layout Structure
{: .docs-header-h2}

* `.fd-ui`: The outer most wrapper of the app
    * `.fd-ui__header`: Global header of the app
    * `.fd-ui__app`: The wrapper for the main app
        * `.fd-app`: The secondary wrapper for the app (in case you need to switch between different apps)
            * `.fd-app__sidebar`: Side bar navigation for the app
            * `.fd-app__main`: Main app content
    * `.fd_ui__footer`: Global footer for the application

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
