import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import nlTranslation from './locales/nl/translation.json';
import frTranslation from './locales/fr/translation.json';
import enTranslation from './locales/en/translation.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'nl', // Default language is Dutch
    supportedLngs: ['nl', 'fr', 'en'], // Supported languages
    interpolation: {
      escapeValue: false, // React handles XSS
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
      caches: ['localStorage'], // Persist language choice
    },
    resources: {
      nl: {
        translation: nlTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
  });

export default i18next;