# Code Styles

## Coding standards

*Every CSS rule should contain a single selector, with only a few exceptions*
- Core styles should be a single element (specificity 0-0-1)
```
body { }
```
- Layout and component styles should be a single class (specificity 0-1-0)
```
.foo { }
```

*Never use an ID selector*
- IDs are difficult to override (specificity 1-0-0)
```
#bar { }
```

*Attribute selectors can be used with element and class selectors for specific uses*
- Single form elements may be styled to indicate state or type based on attributes (specificity 0-1-1)
```
fieldset[disabled] { }
input[type=password] { }
```

- Single classes may be styled for to indicate accessibility state based on attributes (specificity 0-2-0)
```
.nav [aria-selected=true] { }
.navitem[aria-haspopup] { }
```

- Include state classes along with ARIA attributes (specificity 0-2-0)
```
.nav [aria-selected=true], .nav .is-selected { }
.navitem[aria-haspopup], .nav .has-popup { }
```

_Note: It is always preferable to use ARIA attributes directly for accessibility purposes. Talk to your JS/backend developers and establish this contract early in your project._

## Core
