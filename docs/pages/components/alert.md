---
title: Alerts
keywords: alert, alerts
sidebar: left-navigation-sidebar
toc: false
permalink: alert.html
folder: components
summary:
---

Alerts are used to display short messages that need the user attention.

<hr>

## Default Alert
Use to let people know there is something happening, but you can dismiss and act upon it later if needed, e.g. a service subscribed to needs updating. It’s recommended to use the dark blue treatment for Alerts. Alerts should display until they are dismissed by clicking or tapping X.

{% capture default-alert %}
<div class="tn-alert" role="alert" id="defautl-alert">
    <button class="tn-alert__close" aria-controls="defautl-alert">
        <span class="tn-icon tn-icon--close" role="presentation"></span>
    </button>
    Default Message
</div>
{% endcapture %}

{% include display-component.html component=default-alert %}

## Notification
Use to let people know about some information or action that happened, but no action is needed on their part, e.g. the service will be deprecated at a future date. It’s recommended to use the dark blue treatment for Notifications. Notifications should display for 3 seconds, and disappear on their own or by clicking or tapping X.

Add the modifier class `tn-alert--warning` for Notification alert.

{% capture warning-alert %}
<div class="tn-alert tn-alert--warning" role="alert" id="warning-alert">
    <button class="tn-alert__close" aria-controls="warning-alert">
        <span class="tn-icon tn-icon--close" role="presentation"></span>
    </button>
    Warning Message
</div>
{% endcapture %}

{% include display-component.html component=warning-alert %}

## Error
Use to let people know there is an issue that needs attention immediately, e.g. an authorization is expired and no work can proceed until it’s resolved. It’s recommended to use the red treatment for Errors. Errors should display until they are dismissed by clicking or tapping X.

Add the modifier class `tn-alert--error` for Error alert.

{% capture error-alert %}
<div class="tn-alert tn-alert--error" role="alert" id="error-alert">
    <button class="tn-alert__close" aria-controls="error-alert">
        <span class="tn-icon tn-icon--close" role="presentation"></span>
    </button>
    Error Message
</div>
{% endcapture %}

{% include display-component.html component=error-alert %}
