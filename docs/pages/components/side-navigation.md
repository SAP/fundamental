---
title: Side Navigation
keywords: side navigation
sidebar: left-navigation-sidebar
toc: false
permalink: components/side-navigation.html
folder: components
summary:
---

Alerts are used to display short messages that need the user attention.

<hr>

## Default Alert
Use to let people know there is something happening, but you can dismiss and act upon it later if needed, e.g. a service subscribed to needs updating. It’s recommended to use the dark blue treatment for Alerts. Alerts should display until they are dismissed by clicking or tapping X.

{% capture default %}
<div class="fd-alert fd-alert--dismissible" role="alert" id="j2ALl423">
  <button class="fd-alert__close" aria-controls="j2ALl423" aria-label="Close"></button>
  Default alert with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
</div>
{% endcapture %}

{% include display-component.html component=default %}
