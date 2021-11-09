import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../database/en.json';
import ru from '../database/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  order: ['querystring', 'cookie'],

  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
