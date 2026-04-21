'use client';

import React, { createContext, useContext } from 'react';
import { dictionaries, DEFAULT_LOCALE } from './dictionaries';

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  dict: dictionaries[DEFAULT_LOCALE],
});

/**
 * Wraps a page tree in a locale context. Section components call useDict()
 * to read translated strings. When no provider is present (e.g. on the
 * existing EN home page), useDict() transparently falls back to English.
 */
export function LocaleProvider({ locale = DEFAULT_LOCALE, children }) {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext).locale;
}

export function useDict() {
  return useContext(LocaleContext).dict;
}
