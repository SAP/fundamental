const languages = [
  { name: 'English', code: 'en', url: '/fundamental/en' },
  { name: 'Français', code: 'fr', url: '/fundamental/fr' },
  { name: 'Deutsch', code: 'de', url: '/fundamental/de' }
];

const languageCodes = languages.map(l => l.code);

export const environments = {
  languages,
  languageCodes
}
