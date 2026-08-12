import { createContext, useContext, useState, type ReactNode } from 'react';
import { currencyByLang, translations, type CurrencyCode, type Lang, type Translation } from '@/data/translations';

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  t: Translation;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');
  const [currency, setCurrency] = useState<CurrencyCode>('CAD');
  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    setCurrency(currencyByLang[nextLang].defaultCurrency);
  };
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, currency, setCurrency, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
