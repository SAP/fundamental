## Icons Overview
The icon font is generated using files in `icons/svgs`. Template files are included here to generate the SCSS and data files used by the library.

Build the font and associated files.

> NOTE: This directory is concerned ONLY with generating the files needed for the icons, always run this first before build the library or the documentation site. Follow the instructions below to rebuild library and documentation site.

```
gulp icons
```

Build the library.
```
gulp pkg-icons
```

Build the documentation site.

> NOTE: When generating the documentation site to reflect any modification made to the icon set, you will first need to build the dist package with production flag - `gulp build:dist --production`

```
gulp docs-icons
```

## Generated Files
The generated files include `scss/icons/icon.css` and WOFF and WOFF2 formats of `FundamentalIcons` in the same directory. The data file can be found at `test/templates/icon/data.json` which is used by the component test file.

Library and website specific gulp tasks utilize these files.

## Adding New Icons  
To add a new icon, simply drop an SVG file in `icons/svg` folder The name of the file will be used as the key for the icon, i.e, `foo.svg` would generate the class name `tn-icon--foo`.

Requirements:
- The canvas size for the SVG should be 132 x 132 pixel
- All the SVG artwork should fill the canvas edge to edge.
- Icon fills should be black.

**Pull requests will not be merged for new icons unless they meet the above criteria.**
