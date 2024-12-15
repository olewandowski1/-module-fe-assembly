import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: import.meta.env.NODE_ENV === 'development',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  // We are appending the resources dynamically. Check out the `addDynamicTranslations` utility function.
  resources: {},
});

export default i18n;
