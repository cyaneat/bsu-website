"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { dictionaries, isLocale, type Locale, type TranslationKey } from "@/lib/i18n";

const storageKey = "bsu-ui-locale";
const changeEvent = "bsu-locale-change";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
function getSnapshot(): Locale {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return isLocale(saved) ? saved : "ru";
  } catch {
    return "ru";
  }
}
function getServerSnapshot(): Locale { return "ru"; }

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};
const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const setLocale = (next: Locale) => {
    if (typeof window === "undefined") return;
    try { window.localStorage.setItem(storageKey, next); } catch { /* private browser mode */ }
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(changeEvent));
  };
  return <LocaleContext.Provider value={{ locale, setLocale, t: (key) => dictionaries[locale][key] }}>
    {children}
  </LocaleContext.Provider>;
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
