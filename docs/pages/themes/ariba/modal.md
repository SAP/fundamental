---
title: Ariba Modal
keywords: modal, modals, ariba
sidebar: left-navigation-sidebar
toc: false
permalink: themes/ariba/modal.html
folder: ariba
summary:
---

<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/theme/ariba/fundamental-ui-ariba-icons.css">

The modal is a container generally displayed in response to an action. It is used for short forms, confirmation messages or to display contextual information that does not require a page. The modal should always be used in conjunction with the [Application Layout Containers](/layouts/application-layout.html#application-with-ui-overlay). See an example [App layout page with Modal](/demo-pages/modal-overlay-demo-page.html)

<hr/>
<style>
.modal-demo-bg{
    background-color:rgba(50, 54, 58, 0.5);
    padding: 40px;
}
.modal-demo-bg  p {
  padding: 0;
}
</style>
## Informational Modal
This is used to present information to the user but the Alert Component doesn’t fit all the information.
<div>
    <label class="fd-form__label " for="ImBw455111">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455111" class="toggle-rtl" aria-controls="rtl-contianer-modal-info">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-modal-info'>
{% capture default-modal %}
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Account already exists</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
           There's already an SAP account with your username: john.doe@aryzta.com. You don't need to create a new account. Please log in using your existing SAP account.
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--main">Continue</button>
            </div>
        </footer>
    </div>
</div>
</div>
<br>

</div>
{% endcapture %}

{% include display-component.html component=default-modal %}
</div>
<br/>

## Confirmation Modal
This is used to confirm with the user before continuing with a destructive or complex action. In this case, the modal has action buttons at the bottom.
<div>
    <label class="fd-form__label " for="ImBw455112">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455112" class="toggle-rtl" aria-controls="rtl-contianer-modal-confirm">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-modal-confirm'>
{% capture default-confirmation %}
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Delete Product</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
           <p><b>Are you sure you want to countine ?</b></p>
           <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--secondary">No</button>
                <button class="fd-button--main">Yes</button>
            </div>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-confirmation %}
</div>
<br />

## Form Modal
This is used for short forms in order to collect information from the user.

<div>
    <label class="fd-form__label " for="ImBw455113">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455113" class="toggle-rtl" aria-controls="rtl-contianer-modal-form">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-modal-form'>
{% capture default-form %}
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Invite user</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            <div class="fd-form__group">
                <div class="fd-form__item">
                    <label class="fd-form__label is-required" for="input-2">Email*</label>
                    <input class="fd-form__control" type="text" id="input-2">
                </div>
            </div>
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--secondary">Cancel</button>
                <button class="fd-button--main">Invite</button>
            </div>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-form %}
</div>

<br />

## User notification dialog
This is used for short forms in order to collect information from the user.
<div>
    <label class="fd-form__label " for="ImBw455114">
        <span class="fd-toggle fd-toggle--xxs fd-form__control">
            <input type="checkbox" name="" value="" id="ImBw455114" class="toggle-rtl" aria-controls="rtl-contianer-modal-notify">
            <span class="fd-toggle__switch" role="presentation"></span>
        </span>
        Simulate RTL
    </label>  
</div>
<div id='rtl-contianer-modal-notify'>
{% capture default-form %}
<div class="modal-demo-bg">
<div class="fd-modal --success">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Product Successfully Added</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
           Lorem ipsum dolor sit amet, consectetur adipiscing el it. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--main">Continue</button>
            </div>
        </footer>
    </div>
</div>
<br><br>
<div class="fd-modal --warning">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Are you sure ?</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
           Lorem ipsum dolor sit amet, consectetur adipiscing el it. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--main">Continue</button>
            </div>
        </footer>
    </div>
</div>
<br><br>
<div class="fd-modal --error">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Cannot Continue</h1>
            <button class="fd-button--secondary fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing el it. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--main">Continue</button>
            </div>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-form %}
</div>
<br>