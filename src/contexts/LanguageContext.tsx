import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import translations from '../utils/translations';

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState(() => getCookie('language') || 'ko');

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'ko' ? 'en' : 'ko';
      setCookie('language', next);
      return next;
    });
  }, []);

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let value: any = (translations as any)[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
