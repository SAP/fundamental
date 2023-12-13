const languages = [
  { name: 'English', code: 'en', url: 'http://localhost:4200' },
  { name: 'Français', code: 'fr', url: 'http://localhost:4201' },
  { name: 'Deutsch', code: 'de', url: 'http://localhost:4202' },
  { name: 'български', code: 'bg', url: 'http://localhost:4203' },
  { name: 'Latinus', code: 'la', url: 'http://localhost:4204' }
];

const languageCodes = languages.map(l => l.code);

export const environments = {
  languages,
  languageCodes
}
