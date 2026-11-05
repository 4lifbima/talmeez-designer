import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'alifbima-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'id') return stored;
  } catch {
    // localStorage can be unavailable in private browsing / restricted contexts.
  }

  return 'en';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Persisting the preference is optional; the UI still works without it.
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
