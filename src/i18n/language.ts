import { createContext } from 'react';
import { en, type TranslationKey } from './en';
import { pt } from './pt';
import type { Localized } from '../content/types';

export const languages = ['en', 'pt'] as const;
export type Language = (typeof languages)[number];

export const dictionaries: Record<Language, Record<TranslationKey, string>> = { en, pt };

export const STORAGE_KEY = 'portfolio:lang';

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Traduz uma chave do dicionário de interface. */
  t: (key: TranslationKey) => string;
  /** Escolhe o idioma corrente de um conteúdo bilíngue. */
  localize: (value: Localized) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}

/** Inglês é o padrão; o português só entra por escolha salva ou pelo idioma do navegador. */
export function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // localStorage indisponível (modo privado, cookies bloqueados): segue no padrão
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}
