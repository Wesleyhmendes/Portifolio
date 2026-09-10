import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  LanguageContext,
  STORAGE_KEY,
  detectLanguage,
  dictionaries,
  type Language,
} from './language';
import type { TranslationKey } from './en';
import type { Localized } from '../content/types';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // sem persistência: a escolha ainda vale para esta sessão
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => dictionaries[language][key],
      localize: (content: Localized) => content[language],
    }),
    [language, setLanguage],
  );

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
