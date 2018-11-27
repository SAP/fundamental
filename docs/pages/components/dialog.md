---
title: Dialog
keywords: dialog, dialogs
sidebar: left-navigation-sidebar
toc: false
permalink: components/dialog.html
folder: components
summary:
---

The dialog is a container generally displayed in response to an action. It is used for short forms, confirmation messages or to display contextual information that does not require a page. The dialog should always be used in conjunction with the [Application Layout Containers](/layouts/application-layout.html#application-with-ui-overlay). See an example [App layout page with Modal](/demo-pages/modal-overlay-demo-page.html)

<hr/>

## Informational Dialog
This is used to present information to the user but the Alert Component doesn’t fit all the information.

{% capture default-dialog %}
<div class="modal-demo-bg">
<div class="fd-dialog--small" role="dialog">
  <div class="fd-dialog__content" role="document">
      <header class="fd-dialog__header">
          <h1 class="fd-dialog__title sap-icon--message">Modal Dialog</h1>
      </header>
    <div class="fd-dialog__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes vitae erat feugiat, cursus lorem a condimentum sem.</p>
    </div>
    <footer class="fd-dialog__footer">
        <div class="fd-dialog__actions">
         <button class=" fd-button--emphasized">Confirm</button>
          <button class=" fd-button--secondary">Cancel</button>
        </div>
    </footer>
  </div>

</div>
</div>
{% endcapture %}

{% include display-component.html component=default-dialog %}

<br/>

## Error Dialog
This is used to present error to the user 

{% capture error-dialog %}
<div class="modal-demo-bg">
<div class="fd-dialog--small" role="dialog">
  <div class="fd-dialog__content" role="document">
      <header class="fd-dialog__header-error">
          <h1 class="fd-dialog__title sap-icon--message-error">Error Message</h1>
      </header>
    <div class="fd-dialog__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes vitae erat feugiat, cursus lorem a condimentum sem.</p>
    </div>
    <footer class="fd-dialog__footer">
        <div class="fd-dialog__actions">
         <button class=" fd-button--emphasized">Confirm</button>
          <button class=" fd-button--secondary">Cancel</button>
        </div>
    </footer>
  </div>

</div>
</div>
{% endcapture %}

{% include display-component.html component=error-dialog %}

<br/>
## Warning Dialog
This is used to present error to the user 

{% capture warning-dialog %}
<div class="modal-demo-bg">
<div class="fd-dialog--small" role="dialog">
  <div class="fd-dialog__content" role="document">
      <header class="fd-dialog__header-warning">
          <h1 class="fd-dialog__title sap-icon--message-warning">Warning Message</h1>
      </header>
    <div class="fd-dialog__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes vitae erat feugiat, cursus lorem a condimentum sem.</p>
    </div>
    <footer class="fd-dialog__footer">
        <div class="fd-dialog__actions">
         <button class=" fd-button--emphasized">Confirm</button>
          <button class=" fd-button--secondary">Cancel</button>
        </div>
    </footer>
  </div>

</div>
</div>
{% endcapture %}

{% include display-component.html component=warning-dialog %}

<br/>

## Success Dialog
This is used to present error to the user 

{% capture success-dialog %}
<div class="modal-demo-bg">
<div class="fd-dialog--small" role="dialog">
  <div class="fd-dialog__content" role="document">
      <header class="fd-dialog__header-success">
          <h1 class="fd-dialog__title sap-icon--message-success">Success Message</h1>
      </header>
    <div class="fd-dialog__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes vitae erat feugiat, cursus lorem a condimentum sem.</p>
    </div>
    <footer class="fd-dialog__footer">
        <div class="fd-dialog__actions">
         <button class=" fd-button--emphasized">Confirm</button>
          <button class=" fd-button--secondary">Cancel</button>
        </div>
    </footer>
  </div>

</div>
</div>
{% endcapture %}

{% include display-component.html component=success-dialog %}

<br/>

