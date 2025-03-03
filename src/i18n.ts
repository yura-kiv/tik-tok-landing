import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import uk from '@/locales/uk.json';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

export const supportedLngs = {
  uk: 'UA',
  en: 'EN',
  ru: 'RU',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      uk: {
        translation: uk,
      },
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'uk',
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    lng: localStorage.getItem('i18nextLng') || 'uk',
  } as InitOptions);

export default i18n;
