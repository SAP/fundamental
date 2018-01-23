
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
})();
