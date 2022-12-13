import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enLocale from '#/configs/locales/en.json';

export const resources = {
  en: {
    translation: enLocale,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: localStorage.getItem('locale') || 'en',
    resources,
  });

export default i18n;
