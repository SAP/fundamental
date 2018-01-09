---
title: Modal
keywords: modal, modals
sidebar: left-navigation-sidebar
toc: false
permalink: modal.html
folder: components
summary:
---

The Modal component is a high level component, used as a temporary container to be displayed on response of an user action. Can be used to collect simple information from the user: a small form; or give some contextual information that doesn't need the use user to navigate to a new page.

<hr />

## Informational Modal

Used when you need to inform the user but the [Alert Component](alert.html) doesn't fit all the information. Also when the user have to acknowledge the information, actively, by clicking a button or closing the Modal.

{% capture default-modal %}
<div class="modal-demo-bg">
<div class="tn-modal">
    <div class="tn-modal__content">
        <div class="tn-modal__header">
            <button class="tn-button tn-button--text tn-button--icon tn-button--small" aria-label="close">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
            <h4 class="tn-modal__title">Product Added</h4>
        </div>
        <div class="tn-modal__body">
            <b>Thew new product have been added to your catalog.</b><br/>
            <br/>
            Automatic Product ID: <b>PD-3465334</b><br/>
            <br/>
            Expiration date: <b>13/03/2018</b><br/>
            <br/>
        </div>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-modal %}

<br/>

## Confirmation Modal

Used to confirm with the user before continuing with destructive or complex actions. In this case the modal have two buttons at the bottom. With the "positive" path always been the primary button.

{% capture default-confirmation %}
<div class="modal-demo-bg">
<div class="tn-modal">
    <div class="tn-modal__content">
        <div class="tn-modal__header">
            <button class="tn-button tn-button--text tn-button--icon tn-button--small" aria-label="close">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
            <h4 class="tn-modal__title">Delete</h4>
        </div>
        <div class="tn-modal__body">
            Do you want to delete item <b>X</b>?
        </div>
        <footer class="tn-modal__footer-items">
            <button class="tn-modal__button-primary">Yes</button>
            <button class="tn-modal__button-secondary">No</button>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-confirmation %}

<br />

## Form Modal

Used to collect simple information from the user. Please use with care and don't include more than five inputs on a modal to avoid scrolling inside the modal.

{% capture default-form %}
<div class="modal-demo-bg">
<div class="tn-modal">
    <div class="tn-modal__content">
        <div class="tn-modal__header">
            <button class="tn-button tn-button--text tn-button--icon tn-button--small" aria-label="close">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
            <h4 class="tn-modal__title">Invite user</h4>
        </div>
        <div class="tn-modal__body">
        <div class="tn-form__group">
            <div class="tn-form__item">
                <label class="tn-form__label is-required" for="input-2">Email*</label>
                <input class="tn-form__control" type="text" id="input-2">
            </div>
        </div>
        </div>
        <footer class="tn-modal__footer-items">
            <button class="tn-modal__button-primary">Invite</button>
            <button class="tn-modal__button-secondary">Cancel</button>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-form %}
