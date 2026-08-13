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
  // Começar com inglês, verificar localStorage
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('dxt-lang');
    return saved === 'pt' || saved === 'ru' || saved === 'fr' || saved === 'es' || saved === 'de' ? saved as Lang : 'en';
  });
  
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem('dxt-lang', nextLang);
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
