---
title: Application Layout
keywords: application layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layout/application-layout.html
folder: guides
summary:
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Application Layout Structure
{: .docs-header-h2}

```
.fd-ui
    .fd-ui__header
    .fd-ui__app
        .fd-app
            .fd-app__sidebar
            .fd-app__main
    .fd_ui__footer
```
{% capture app-layout %}
<div class="docs-example__app">
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
</div>

{% endcapture %}
{% include display-example.html component=app-layout %}
