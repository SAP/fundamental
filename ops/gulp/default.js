const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const task = (cb) => {
    gulpSequence('dev-jekyll', ['dev-serve', 'dev-watch'], 'docs-build', 'docs-site', cb);
    const unicorn = `
 \
   \\
    \\\\
     \\\\
      >\\/7
 _.-(6'  \\
 (=___._/\` \\
      )  \\ |
     /   / |
    /    > /
   j    < _\\
_.-' :      \`\`.
\\ r=._\\        \`.
<\`\\\\_  \\         .\`-.
\\ r-7  \`-. ._  ' .  \`\\
\\\`,      \`-.\`7  7)   )
 \\/         \\|  \\'  / \`-._
            ||    .'
             \\\\  (
             >\\  >
          ,.-' >.'
         <.'_.''
           <'
`;
  console.log(unicorn);
}

gulp.task('default', task);
module.exports = task;
