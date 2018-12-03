---
title: Badge, Counter, Status & Label
keywords: status indicators, status, indicators, badge, label, counter
sidebar: left-navigation-sidebar
toc: false
permalink: components/badge-counter-label-status.html
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

## Default Counter
Minium value 1. Maximum display is 999+
{% capture badge %}
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter inline with a paragraph
{% capture badge %}
<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter with Tabs

{% capture badge %}
<ul class="fd-tabs" role="tablist">
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AvcVC566" href="#AvcVC566" role="tab">Link
      <span class="fd-counter" aria-label="Unread count">25</span></a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="5mxO9110" aria-selected="true" href="#5mxO9110"
      role="tab">Selected</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="r0pk3445" href="#r0pk3445" role="tab">Link</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="Dj1Ri832" aria-disabled="true"
      role="tab">Disabled</a>
   </li>
</ul>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter with `--notification` modifier

{% capture badge %}
<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>

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
