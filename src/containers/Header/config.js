import { language } from '../../config.js';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'armenian',
      locale: 'hy',
      text: 'ARM'
    },
    {
      languageId: 'english',
      locale: 'en',
      text: 'ENG',
    }
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });

  return selecetedLanguage;
}
export default config;
