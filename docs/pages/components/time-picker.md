---
title: Time Picker
keywords: time picker
sidebar: left-navigation-sidebar
toc: false
permalink: components/time-picker.html
folder: components
summary:
---

Timepicker is a componet composed of an input-group, a popover, and the time component to create a time selection interaction.

<hr/>

## Basic Time Picker
A basic example of a time picker.

{% capture default-timepicker %}
<div class="fd-time-picker">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after">
                <input type="time" id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                    <button class="fd-popover__control fd-button--icon fd-button--secondary sap-icon--fob-watch"
                    aria-controls="Cy29K184" aria-expanded="false" aria-haspopup="true"
                    aria-hidden="true"></button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body" aria-hidden="true" id="Cy29K184">
            <div class="fd-time">
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
                        aria-label="Increase hours" aria-controls="S8Vs0670"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="hh" value=""
                        id="S8Vs0670" aria-label="Hours" />
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-down-arrow"
                        aria-label="Decrease hours" aria-controls="S8Vs0670"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
                        aria-label="Increase minutes" aria-controls="k2Vkv811"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="mm" value=""
                        id="k2Vkv811" aria-label="Minutes" />
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-down-arrow"
                        aria-label="Decrease minutes" aria-controls="k2Vkv811"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
                        aria-label="Increase seconds" aria-controls="WC1cw348"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="ss" value="" id="WC1cw348"
                        aria-label="Seconds" />
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-down-arrow"
                        aria-label="Decrease seconds" aria-controls="WC1cw348"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-up-arrow"
                        aria-label="Increase period" aria-controls="T1V37459"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="am" value="" id="T1V37459"
                        aria-label="Period" />
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--secondary fd-button--xs sap-icon--navigation-down-arrow"
                        aria-label="Decrease period" aria-controls="T1V37459"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-timepicker %}
