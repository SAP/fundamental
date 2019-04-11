#! /bin/bash
set -o errexit

mkdir -p -- dist/{fonts,images} dist/fonts/72
 
for file in scss/icons/*.{eot,svg,ttf,woff}; do cp "$file" dist; done

for file in scss/fonts/72/*.{eot,svg,ttf,woff,woff2}; do cp "$file" dist/fonts/72/; done

for file in public/images/*; do cp "$file" dist/images; done