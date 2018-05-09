---
title: Status Indicators
keywords: status indicators, status, indicators, badge, label
sidebar: left-navigation-sidebar
toc: false
permalink: components/status-indicators.html
folder: components
---

The Status indicators are used to show the status of an object or a process. They can be displayed as **Labels**, **Badges** or **Pills** depending on the context.

The following color options are avialable for fast recognition of the status:

* **Black**: the default color, used when the status doesn't have active/inactive or error states.
* **Green**: signal positive status: active, published, approved, etc.
* **Orange**: used for status like: in process, waiting, reviewing, etc.
* **Red**: signal the user that the object or process needs attention: in error, rejected, expired, etc.

<hr />

## Indicators

{% capture badge %}
<span class="fd-label">
    Default
</span>
<span class="fd-label fd-label--success">
    Success
</span>
<span class="fd-label fd-label--warning">
    Warning
</span>
<span class="fd-label fd-label--error">
    Error
</span>

<span class="fd-badge">
    Default
</span>
<span class="fd-badge fd-badge--success">
    Success
</span>
<span class="fd-badge fd-badge--warning">
    Warning
</span>
<span class="fd-badge fd-badge--error">
    Error
</span>

<span class="fd-badge fd-badge--pill">
    Default
</span>
<span class="fd-badge fd-badge--success fd-badge--pill">
    Success
</span>
<span class="fd-badge fd-badge--warning fd-badge--pill">
    Warning
</span>
<span class="fd-badge fd-badge--error fd-badge--pill">
    Error
</span>
{% endcapture %}

{% include display-component.html component=badge %}

<style>
.fd-badge, .fd-label {
    margin-right: 20px;
}
</style>
