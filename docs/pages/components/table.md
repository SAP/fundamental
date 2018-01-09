---
title: Table
keywords: table
sidebar: left-navigation-sidebar
toc: false
permalink: table.html
folder: components
---

The Table component is a common component used to display data that can be compared. Usually a set of item of the same type which data is divided on columns to facilitate the comparison between items.

<hr />

## Default Table

Header columns should be present to allow the user to know and understand the data represented. When more details are needed, one of the columns data can be make a link to a details page, or a modal component with more data about the object.

{% capture table-icon %}
<table class="tn-table">
    <thead>
        <tr>
            <th></th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png"
            class="tn-has-border-radius-50percent"
            width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png"
            class="tn-has-border-radius-50percent" width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png"
            class="tn-has-border-radius-50percent" width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-icon %}

<br />

## Table with checkbox

When needed to make bulk changes on multiple object at once, the checkbox input can be used at the beginning of the row. It is recommended to add the parameter `area-selected="true` to the row that is selected.

{% capture table-checkbox %}
<table class="tn-table">
    <thead>
        <tr>
            <th></th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr aria-selected="true">
            <td><input type="checkbox" checked></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-checkbox %}

<br />

## Table with Actions

When needed the table row can have Actions to be performed on the object represented. The Actions are done as Small Text buttons with only an icon.

{% capture table-actions %}
<table class="tn-table">
    <thead>
        <tr>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--edit tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--sync tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--clone tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--remove tn-icon--small" role="presentation"></span>
                </button>
            </td>
        </tr>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--edit tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--sync tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--clone tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--remove tn-icon--small" role="presentation"></span>
                </button>
            </td>
        </tr>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--edit tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--sync tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--clone tn-icon--small" role="presentation"></span>
                </button>
                <button class="tn-button tn-button--text tn-button--icon tn-button--small">
                    <span class="tn-icon tn-icon--remove tn-icon--small" role="presentation"></span>
                </button>
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-actions %}

<br />

## Table with Contextual Menu

When there is more than four actions to display we recommend the use of the contextual menu and display all the actions.

{% capture table-menu %}
<table class="tn-table">
    <thead>
        <tr>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <div class="tn-dropdown">
                    <button class="tn-button tn-button--icon tn-button--text tn-button--small" aria-controls="nH3Yk786" aria-haspopup="true" aria-label="More">
                        <span class="tn-icon tn-icon--more tn-icon--small" role="presentation"></span>
                    </button>
                    <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="nH3Yk786">
                        <li><a class="tn-dropdown__item">Edit</a></li>
                        <li><a class="tn-dropdown__item">Sync</a></li>
                        <li><a class="tn-dropdown__item">Clone</a></li>
                        <li><a class="tn-dropdown__item">Archive</a></li>
                        <li><a class="tn-dropdown__item">Remove</a></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <div class="tn-dropdown">
                    <button class="tn-button tn-button--icon tn-button--text tn-button--small" aria-controls="nH3Yk787" aria-haspopup="true" aria-label="More">
                        <span class="tn-icon tn-icon--more tn-icon--small" role="presentation"></span>
                    </button>
                    <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="nH3Yk787">
                        <li><a class="tn-dropdown__item">Edit</a></li>
                        <li><a class="tn-dropdown__item">Sync</a></li>
                        <li><a class="tn-dropdown__item">Clone</a></li>
                        <li><a class="tn-dropdown__item">Archive</a></li>
                        <li><a class="tn-dropdown__item">Remove</a></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <div class="tn-dropdown">
                    <button class="tn-button tn-button--icon tn-button--text tn-button--small" aria-controls="nH3Yk788" aria-haspopup="true" aria-label="More">
                        <span class="tn-icon tn-icon--more tn-icon--small" role="presentation"></span>
                    </button>
                    <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="nH3Yk788">
                        <li><a class="tn-dropdown__item">Edit</a></li>
                        <li><a class="tn-dropdown__item">Sync</a></li>
                        <li><a class="tn-dropdown__item">Clone</a></li>
                        <li><a class="tn-dropdown__item">Archive</a></li>
                        <li><a class="tn-dropdown__item">Remove</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-menu %}
