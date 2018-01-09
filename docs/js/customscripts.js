$( document ).ready(function() {
    
    //AnchorJS
    anchors.add('.post-content>h2');

});

(function() {
    //dropdown
    var els = document.querySelectorAll("[aria-controls]");
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        el.addEventListener('click', function(e) {
            var targetId = this.getAttribute("aria-controls");
            var target = document.getElementById(targetId);
            //alert
            var isAlert = this.parentElement.getAttribute("role") === "alert";
            if (isAlert) {
                //remove or hide if we want some animation
                // target.setAttribute("aria-hidden", true);
                target.remove();
                return;
            }
            //dropdown
            var isDropdown = this.getAttribute("aria-haspopup") === "true";
            if (isDropdown) {
                //trigger
                var isExpanded = this.getAttribute("aria-expanded") === "true";
                this.setAttribute("aria-expanded", !isExpanded);
                //target
                var targetIsHidden = target.getAttribute("aria-hidden") == "true";
                target.setAttribute("aria-hidden", isExpanded);
                return;
            }
            //tree
            var isTree = target.getAttribute("role") === "tree";
            var isTreeItem = target.getAttribute("role") === "treeitem";
            function setPressed(el, bool) {
                el.setAttribute("aria-pressed", bool);
                if (bool) {
                    el.classList.add('is-pressed');
                } else {
                    el.classList.remove('is-pressed');
                }
            }
            function setExpanded(el, bool) {
                el.setAttribute("aria-expanded", bool);
                //get group
                var group = el.querySelector("[role=group]");
                group.setAttribute("aria-hidden", !bool);
                if (!bool) {
                    group.classList.add('is-hidden');
                } else {
                    group.classList.remove('is-hidden');
                }
            }
            var isPressed;
            //handle the primary trigger
            if(isTree || isTreeItem) {
                isPressed = this.getAttribute("aria-pressed") === "true";
                setPressed(this, !isPressed);
            }
            //toggle a single treeitem
            if(isTreeItem) {
                setExpanded(target, !isPressed);
            }
            //toggle all treeitems
            if(isTree) {
                //all triggers
                var controls = target.querySelectorAll("[aria-controls]");
                for (var i = 0; i < controls.length; i++) {
                    var control = controls[i];
                    setPressed(control, !isPressed);
                    targetId = control.getAttribute("aria-controls");
                    target = document.getElementById(targetId);
                    setExpanded(target, !isPressed);
                }
            }
        })
    }

    //climb up DOM to get block element
    function getBlock(control) {
        var block = control.parentNode;
        while (block.getAttribute("role") !== "tablist") {
            block = block.parentNode;
        }
        return block;
    }
    //get all tablists
    var tablists = document.querySelectorAll('[role="tablist"]');
    //handle each tablist
    for (var i = 0; i < tablists.length; i++) {
        var tablist = tablists[i];
        //get all the tabs
        var tabs = tablist.querySelectorAll("[aria-controls]");
        for (var j = 0; j < tabs.length; j++) {
            var el = tabs[j];
            el.addEventListener('click', function(e) {
                e.preventDefault();
                //check states
                var isDisabled = this.getAttribute("aria-disabled") === "true";
                var isSelected = this.getAttribute("aria-selected") === "true";
                if (isDisabled || isSelected) {
                    return;
                }
                //get all controls in grouping
                var block = getBlock(this);
                var controls = block.querySelectorAll("[aria-controls]");
                //handle each controls
                for (var k = 0; k < controls.length; k++) {
                    var control = controls[k];
                    //new selected tab
                    var isTriggerTab = control === this;
                    //get panel
                    var panelId = control.getAttribute("aria-controls");
                    var panel = document.getElementById(panelId);
                    //set states
                    control.setAttribute("aria-selected", isTriggerTab);
                    control.classList.remove('is-selected');
                    panel.setAttribute("aria-expanded", isTriggerTab);
                    panel.classList.remove('is-expanded');
                }
            })
        }
    }
})();
