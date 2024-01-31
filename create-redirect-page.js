require('fs').writeFileSync('dist/fundamental/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fundamental Library</title>
</head>
<body>
<noscript>
  <p>Please enable JavaScript to use this page.</p>
</noscript>
<script>
  const languageCodes = ['en', 'fr', 'de'];
  const defaultLanguage = 'en';
  const browserLanguage = navigator.language ? (languageCodes.find((availableLangCode) => navigator.language.startsWith(availableLangCode)) || defaultLanguage) : defaultLanguage;

  location.href = \`\${location.href}/\${browserLanguage}\`;
</script>
</body>
</html>
`);
