---
title: Tree
keywords: tree
sidebar: left-navigation-sidebar
toc: false
permalink: components/tree.html
folder: components
---

A tree is used to display data in a visual hierarchy.
Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.

<hr/>

## Tree with multiple levels and actions

{% capture tree %}
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="tWsod582" aria-pressed="false"></button>
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Status
        </div>
        <div class="fd-tree__col fd-tree__col--actions">
        </div>
    </div>
</div>
<ul class="fd-tree" id="tWsod582" role="tree">
    <li class="fd-tree__item" role="treeitem" id="inYUX852" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
                aria-pressed="false"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                <span class="fd-label">
                    Inactive
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1 is-hidden" role="group" aria-hidden="true">
            <li class="fd-tree__item" role="treeitem" id="Bxd8s850" aria-expanded="false">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        <button class="fd-tree__control" aria-label="Expand" aria-controls="Bxd8s850"
                        aria-pressed="false"></button>
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Inactive
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                        aria-expanded="false" aria-controls="WQIDD179-1" aria-haspopup="true"></button>
                        <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-1">
                            <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                            <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                            <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                            <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                        </ul>
                    </div>
                </div>
                <ul class="fd-tree__group fd-tree__group--sublevel-2 is-hidden" role="group" aria-hidden="true">
                    <li class="fd-tree__item" role="treeitem" id="qz9hB117" aria-expanded="false">
                        <div class="fd-tree__row">
                            <div class="fd-tree__col fd-tree__col--control">
                                <button class="fd-tree__control" aria-label="Expand" aria-controls="qz9hB117"
                                aria-pressed="false"></button>
                                Third Level
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                <span class="fd-label">
                                    Inactive
                                </span>
                            </div>
                            <div class="fd-tree__col fd-tree__col--actions">
                                <button class="fd-button--secondary sap-icon--vertical-grip"
                                aria-label="More"
                                aria-expanded="false" aria-controls="WQIDD179-2"
                                aria-haspopup="true"></button>
                                <ul class="fd-dropdown__menu fd-contextual-menu"
                                aria-hidden="true" id="WQIDD179-2">
                                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <ul class="fd-tree__group fd-tree__group--sublevel-3 is-hidden"
                        role="group" aria-hidden="true">
                            <li class="fd-tree__item" role="treeitem">
                                <div class="fd-tree__row">
                                    <div class="fd-tree__col fd-tree__col--control">
                                        Fourth Level
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                        <span class="fd-label">
                                            Inactive
                                        </span>

                                    </div>
                                    <div class="fd-tree__col fd-tree__col--actions">
                                        <button class="fd-button--secondary sap-icon--vertical-grip"
                                        aria-label="More"
                                        aria-expanded="false" aria-controls="WQIDD179-3"
                                        aria-haspopup="true"></button>
                                        <ul class="fd-dropdown__menu fd-contextual-menu"
                                        aria-hidden="true" id="WQIDD179-3">
                                            <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                                            <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                                            <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                                            <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Default
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                        aria-expanded="false" aria-controls="WQIDD179-4" aria-haspopup="true"></button>
                        <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-4">
                            <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                            <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                            <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                            <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="lkEDI899" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="lkEDI899"
                aria-pressed="false"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                <span class="fd-label">
                    Default
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                aria-expanded="false" aria-controls="WQIDD179-5" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-5">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1 is-hidden" role="group" aria-hidden="true">
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Inactive
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                        aria-expanded="false" aria-controls="WQIDD179-6" aria-haspopup="true"></button>
                        <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-6">
                            <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                            <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                            <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                            <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                <span class="fd-label">
                    Inactive
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button--secondary sap-icon--vertical-grip" aria-label="More"
                aria-expanded="false" aria-controls="WQIDD179-8" aria-haspopup="true"></button>
                <ul class="fd-dropdown__menu fd-contextual-menu" aria-hidden="true" id="WQIDD179-8">
                    <li><a href="#" class="fd-dropdown__item">Edit</a></li>
                    <li><a href="#" class="fd-dropdown__item">Lock</a></li>
                    <li><a href="#" class="fd-dropdown__item">Duplicate</a></li>
                    <li><a href="#" class="fd-dropdown__item">Delete</a></li>
                </ul>
            </div>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=tree %}
