---
title: Badge, Status & Label
keywords: status indicators, status, indicators, badge, label
sidebar: left-navigation-sidebar
toc: false
permalink: components/badge-label-status.html
folder: components
---

Badges and labels are used to indicate status. Colors, generally in combination with text, are used to easily highlight the state of an object.

The following colors should be used:

* **Black**: default or inactive status
* **Green**: positive status, used for active, published, approved
* **Orange**: a warning status or to indicate that an action can be taken
* **Red**: error status

<hr />

## Default Badge

{% capture badge %}
<span class="fd-badge">Default</span>
<span class="fd-badge fd-badge--success">Default</span>
<span class="fd-badge fd-badge--warning">Default</span>
<span class="fd-badge fd-badge--error">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Pill Badge
`fd-badge--pill` modifier can be used to render a pill version of the badge.
{% capture badge %}
<span class="fd-badge fd-badge--pill"> Default </span>
<span class="fd-badge fd-badge--success fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--error fd-badge--pill">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Filled Badge
`fd-badge--filled` modifier can be used to render a filled version of the badge.
{% capture badge %}
<span class="fd-badge fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--success fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--error fd-badge--filled">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Label

{% capture badge %}
<span class="fd-label">Default</span>
<span class="fd-label fd-label--success">Success</span>
<span class="fd-label fd-label--warning">Warning</span>
<span class="fd-label fd-label--error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Status Indicator Label with build in status icons

{% capture badge %}
<span class="fd-status-label fd-status-label--available">Available</span>
<span class="fd-status-label fd-status-label--away">Away</span>
<span class="fd-status-label fd-status-label--busy">Busy</span>
<span class="fd-status-label fd-status-label--offline">Appear Offline</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Status Indicator Label with any icons

{% capture badge %}
<span class="fd-status-label sap-icon--history">Custom Icon</span>
<span class="fd-status-label sap-icon--message-success">Success</span>
<span class="fd-status-label sap-icon--message-warning">Warning</span>
<span class="fd-status-label sap-icon--message-error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Status Indicator Label with symentic colors

{% capture badge %}
<span class="fd-status-label">Default</span>
<span class="fd-status-label fd-status-label--success">Success</span>
<span class="fd-status-label fd-status-label--warning">Warning</span>
<span class="fd-status-label fd-status-label--error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}


<style>
.fd-badge, .fd-label, .fd-status-label {
    margin-right: 20px;
}
</style>
