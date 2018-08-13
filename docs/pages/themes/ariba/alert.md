---
title: Ariba Alert
keywords: alert, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/alert.html
folder: ariba
summary:
---
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">

Alerts provide messages within the application that are color-coded to emphasize the level of urgency. For Alert placement guidelines within the application, see [Application Layout page](http://localhost:4000/layouts/application-layout.html#application-with-ui-overlay) and [Application Alerts overlay Demo Page](http://localhost:4000/demo-pages/alert-overlay-demo-page.html)

<hr>

## Default Alert
The alert provides information that is useful and relevant, but not critical. It can also provide feedback that an action has been executed. The user will need to dismiss the message.

<div>
    <label class="fd-form__label " for="ImBw455100">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455100" class="toggle-rtl" aria-controls="rtl-contianer-alert">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-alert'>
{% capture default-alert %}

<div class="fd-alert" role="alert" id="j2ALl4231sd">
    <div class='fd-alert--message'>
          Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>  
</div>
<br>
<div class="fd-alert" role="alert" id="j2ALl4231scd">
    <div class='fd-alert--message'>
          J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </div>
</div>
<br>
<div class="fd-alert fd-alert--dismissible" role="alert" id="j2ALl4231sced">
    <button class="fd-alert__close" aria-controls="j2ALl4231" aria-label="Close"></button>
    <div class='fd-alert--message'>
        Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>
</div>
<br>
<div class="fd-alert fd-alert--dismissible" role="alert" id="j2ALl4231sced">
    <button class="fd-alert__close" aria-controls="j2ALl4231" aria-label="Close"></button>
    <div class='fd-alert--message'>
      J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-alert %}
</div>

## Success / Positive
The alert warns of potential issues, but the user can still continue. The user will need to dismiss the message.

Add the modifier class `fd-alert--success` for Warning alert.
<div>
    <label class="fd-form__label " for="ImBw455110">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455110" class="toggle-rtl" aria-controls="rtl-contianer-alert-success">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-alert-success'>

{% capture warning-alert %}
<div class="fd-alert fd-alert--success" role="alert" id="j2ALl4231s">
    <div class='fd-alert--message'>
          Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>  
</div>
<br>
<div class="fd-alert fd-alert--success" role="alert" id="j2ALl4231sc">
    <div class='fd-alert--message'>
          J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </div>
</div>
<br>
<div class="fd-alert fd-alert--success fd-alert--dismissible" role="alert" id="j2ALl4231sce">
    <button class="fd-alert__close" aria-controls="j2ALl4231" aria-label="Close"></button>
    <div class='fd-alert--message'>
        Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>
</div>
<br>
<div class="fd-alert fd-alert--success fd-alert--dismissible" role="alert" id="j2ALl4231sce">
    <button class="fd-alert__close" aria-controls="j2ALl4231" aria-label="Close"></button>
    <div class='fd-alert--message'>
      J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>
</div>

{% endcapture %}

{% include display-component.html component=warning-alert %}
</div>

## Warning
The alert warns of potential issues, but the user can still continue. The user will need to dismiss the message.

Add the modifier class `fd-alert--warning` for Warning alert.
<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-alert-Warning">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-alert-Warning'>
{% capture warning-alert %}
<div class="fd-alert fd-alert--warning" role="alert" id="j2ALl4231sw">
    <div class='fd-alert--message'>
          Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>  
</div>
<br>
<div class="fd-alert fd-alert--warning fd-alert--dismissible" role="alert" id="j2ALl4231sceew">
    <button class="fd-alert__close" aria-controls="j2ALl4231sceew" aria-label="Close"></button>
    <div class='fd-alert--message'>
      J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=warning-alert %}
</div>

## Negative / Error
This alert is triggered after the user entered data incorrectly or a system error has occurred. It should interrupt the user. A final action such as Submit cannot be carried out until the user has rectified the error. The user will need to dismiss the message.

Add the modifier class `fd-alert--error` for Error alert.
<div>
    <label class="fd-form__label " for="ImBw455122">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455122" class="toggle-rtl" aria-controls="rtl-contianer-alert-Warning-Error">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-alert-Warning-Error'>
{% capture error-alert %}
<div class="fd-alert fd-alert--error" role="alert" id="j2ALl4231se">
    <div class='fd-alert--message'>
          Warning message with a <a href="#" class="fd-link">link <span class="sap-icon--arrow-right sap-icon--s"></span></a>
    </div>  
</div>
<br>
<div class="fd-alert fd-alert--error" role="alert" id="j2ALl4231sce">
    <div class='fd-alert--message'>
          J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc J, Congratulations! You have successfully reset your password. Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
    </div>
</div>
<br>

{% endcapture %}

{% include display-component.html component=error-alert %}
</div>
<br>