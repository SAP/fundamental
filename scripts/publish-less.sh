#! /bin/bash
set -e

for f in scss/*.less.scss; do 
    fbname=$(basename "$f" .less.scss)
    #convert to css
    node-sass --output-style expanded --precision 5 $f --output less2/;
    lessname=$(basename "$fbname".less.css)
    #autoprefix
    postcss --config config/postcss.config.js less2/$lessname --replace;
    echo "less2/$lessname"
    #clean
    cleancss --format beautify less2/$lessname -o less2/$lessname;
    # replace calc(var) with '~"calc\($1var$2\)"'
    # sed -i -n 's/calc\((.*)var(.*)\)/g' 
    #rename with prefix
    # mv -- "less2/$lessname" "less2/fiori-$fbname.less";
 done


