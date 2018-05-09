---
title: Modal
keywords: modal, modals
sidebar: left-navigation-sidebar
toc: false
permalink: components/modal.html
folder: components
summary:
---

The Modal component is a high level component, used as a temporary container to be displayed on response of an user action. Can be used to collect simple information from the user: a small form; or give some contextual information that doesn't need the use user to navigate to a new page.

<hr />

## Informational Modal

Used when you need to inform the user but the [Alert Component](alert.html) doesn't fit all the information. Also when the user have to acknowledge the information, actively, by clicking a button or closing the Modal.

{% capture default-modal %}
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Product Added</h1>
            <button class="fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
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
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Delete</h1>
            <button class="fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            Do you want to delete item <b>X</b>?
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button--secondary">No</button>
                <button class="fd-button--">Yes</button>
            </div>
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
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Invite user</h1>
            <button class="fd-modal__close" aria-label="close"></button>
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
                <button class="fd-button--">Invite</button>
            </div>
        </footer>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=default-form %}
