---
title: Tree
keywords: tree
sidebar: left-navigation-sidebar
toc: false
permalink: components/tree.html
folder: components
---

The Tree component is used to display hierarchical data in tabular way. Permitting the user to dig deeper into the data in an simple way. Along with displaying the hierarchy information it can also contain other data in the same node as well.

<hr/>

## Simple tree

The tree can be used with a simple hierarchy and the items with data a the end nodes.

{% capture tree %}
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="q3gqJ609" aria-pressed="false"></button>
            Header
        </div>
        <div class="fd-tree__col">
            Header
        </div>
        <div class="fd-tree__col">
            Header
        </div>
        <div class="fd-tree__col">
            Status
        </div>
    </div>
</div>
<ul class="fd-tree" id="q3gqJ609" role="tree">
    <li class="fd-tree__item" role="treeitem" id="wcPvE475" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="wcPvE475" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
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
                        123
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Default
                        </span>
                    </div>
                </div>
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
                        323
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Default
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="to6w3377" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="to6w3377" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
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
                        443
                    </div>
                    <div class="fd-tree__col">
                        <span class="fd-label">
                            Inactive
                        </span>
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
                344
            </div>
            <div class="fd-tree__col">
                <span class="fd-label">
                    Inactive
                </span>
            </div>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=tree %}

<br />

## Actions

The Tree rows can have also Actions, same was as the Table component.

{% capture tree %}
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="a3gqJ609" aria-pressed="false"></button>
            Header
        </div>
        <div class="fd-tree__col">
            Header
        </div>
        <div class="fd-tree__col">
            Header
        </div>
        <div class="fd-tree__col">
        </div>
    </div>
</div>
<ul class="fd-tree" id="a3gqJ609" role="tree">
    <li class="fd-tree__item" role="treeitem" id="wcPvE476" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="wcPvE476" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
            </div>
            <div class="fd-tree__col">
            </div>
            <div class="fd-tree__col">
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                </button>
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                </button>
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
                        123
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                        </button>
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                        </button>
                    </div>
                </div>
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
                        323
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                        </button>
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="to6w3378" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="to6w3378" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
            </div>
            <div class="fd-tree__col">
            </div>
            <div class="fd-tree__col">
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                </button>
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                </button>
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
                        443
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                        </button>
                        <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                            <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                        </button>
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
                344
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--edit fd-icon--small" role="presentation"></span>
                </button>
                <button class="fd-button fd-button--text fd-button--icon fd-button--small">
                    <span class="fd-icon fd-icon--close fd-icon--small" role="presentation"></span>
                </button>
            </div>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=tree %}

<br />


## Multiple levels

The Tree component support till four levels on the hierarchy.

{% capture tree-actions %}
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="b3gqJ609" aria-pressed="false"></button>
            Header
        </div>
        <div class="fd-tree__col">
            Header
        </div>
        <div class="fd-tree__col">
            Status
        </div>
        <div class="fd-tree__col fd-tree__col--actions">
        </div>
    </div>
</div>
<ul class="fd-tree" id="b3gqJ609" role="tree">
    <li class="fd-tree__item" role="treeitem" id="acPvE475" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="acPvE475" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
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
                <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                    <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                </button>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1 is-hidden" role="group" aria-hidden="true">
            <li class="fd-tree__item" role="treeitem" id="a2Qhp313" aria-expanded="false">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        <button class="fd-tree__control" aria-label="Expand" aria-controls="a2Qhp313" aria-pressed="false"></button>
                        <a class="fd-has-font-weight-semi">Second Level</a>
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
                        <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                            <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                        </button>
                    </div>
                </div>
                <ul class="fd-tree__group fd-tree__group--sublevel-2 is-hidden" role="group" aria-hidden="true">
                    <li class="fd-tree__item" role="treeitem" id="aKWZR356" aria-expanded="false">
                        <div class="fd-tree__row">
                            <div class="fd-tree__col fd-tree__col--control">
                                <button class="fd-tree__control" aria-label="Expand" aria-controls="aKWZR356" aria-pressed="false"></button>
                                <a class="fd-has-font-weight-semi">Third Level</a>
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
                                <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                                    <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                                </button>
                            </div>
                        </div>
                        <ul class="fd-tree__group fd-tree__group--sublevel-3 is-hidden" role="group" aria-hidden="true">
                            <li class="fd-tree__item" role="treeitem">
                                <div class="fd-tree__row">
                                    <div class="fd-tree__col fd-tree__col--control">
                                        Fourth Level
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
                                        <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                                            <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                                        </button>
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
                        <span class="fd-label">
                            Default
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                            <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="ao6w3377" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="ao6w3377" aria-pressed="false"></button>
                <a class="fd-has-font-weight-semi">First Level</a>
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
                <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                    <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                </button>
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
                        <span class="fd-label">
                            Inactive
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                            <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                        </button>
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
                <span class="fd-label">
                    Inactive
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <button class="fd-button fd-button--icon fd-button--text" aria-label="More">
                    <span class="fd-icon fd-icon--more fd-icon--small" role="presentation"></span>
                </button>
            </div>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=tree-actions %}
