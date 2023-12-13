const languages = [
  { name: 'English', code: 'en', url: '/en' },
  { name: 'Français', code: 'fr', url: '/fr' },
  { name: 'Deutsch', code: 'de', url: '/de' },
  { name: 'Български', code: 'bg', url: '/bg' },
  { name: 'Latinus', code: 'la', url: '/la' }
];

const languageCodes = languages.map(l => l.code);

export const environments = {
  languages,
  languageCodes
}
