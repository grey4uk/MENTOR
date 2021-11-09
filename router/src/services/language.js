import { createContext, useContext, useState } from 'react';
import i18n from './i18n';

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const { language } = i18n;
  const [lang, setLang] = useState(language);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
