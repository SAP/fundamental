---
title: Table
keywords: table
sidebar: left-navigation-sidebar
toc: false
permalink: components/table.html
folder: components
---

The Table component is a common component used to display data that can be compared. Usually a set of item of the same type which data is divided on columns to facilitate the comparison between items.

<hr />

## Default Table

Header columns should be present to allow the user to know and understand the data represented. When more details are needed, one of the columns data can be make a link to a details page, or a modal component with more data about the object.

{% capture table-icon %}
<table class="fd-table">
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
            <td><span class=" fd-image--s fd-image--circle" aria-label="Image label" style="background-image: url(http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png);"></span></td>
            <td><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><span class=" fd-image--s fd-image--circle" aria-label="Image label" style="background-image: url(http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png);"></span></td>
            <td><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><span class=" fd-image--s fd-image--circle" aria-label="Image label" style="background-image: url(http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png);"></span></td>
            <td><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
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
<table class="fd-table">
    <thead>
        <tr>
            <th><input type="checkbox"></th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr aria-selected="true">
            <td><input type="checkbox" checked></td>
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-checkbox %}

<br />

## Table with Contextual Menu

When there is more than four actions to display we recommend the use of the contextual menu and display all the actions.

{% capture table-actions %}
<table class="fd-table">
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
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More" aria-expanded="false" aria-controls="WQIDD179-2" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-2">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>01/26/17</td>
            <td>
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More" aria-expanded="false" aria-controls="WQIDD179-3" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-3">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-actions %}
