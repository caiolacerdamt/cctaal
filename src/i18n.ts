import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt', // Default to Portuguese if detection fails
        supportedLngs: ['pt', 'en', 'es', 'zh'], // Valid languages: Portuguese, English, Spanish, Chinese

        debug: true, // Enable debug during development to see missing keys

        interpolation: {
            escapeValue: false, // React already safeguards against XSS
        },

        backend: {
            loadPath: `/locales/{{lng}}/translation.json${import.meta.env.DEV ? '?t=' + new Date().getTime() : ''}`,
        },

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // Cache the user's choice in localStorage
        }
    });

export default i18n;
