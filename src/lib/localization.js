import translations from './translations.json';
import constants from './constants.js';

export const localization = (key) => {
  const lang = constants.defaultLanguage;
  if (key in translations) {
    if (lang in translations[key]) {
      return translations[key][lang];
    }
    return translations[key].en;
  } else {
    return "Translation not found";
  }
};