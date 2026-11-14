"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { locales, type Locale } from "@/lib/i18n";

const names: Record<Locale, string> = { ru: "RU", ky: "KG", en: "EN", "zh-CN": "中文" };
export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return <div className="flex items-center gap-1" role="group" aria-label="Language / Тил / Язык / 语言">
    <Globe size={15} aria-hidden="true" className="mr-1 text-white/70" />
    {locales.map((value) => <button key={value} type="button" lang={value} onClick={() => setLocale(value)}
      aria-pressed={locale === value} className={`rounded-md px-1.5 py-1 text-xs font-semibold transition sm:px-2 ${locale === value ? "bg-white text-[#102b4e]" : "text-white/75 hover:bg-white/15 hover:text-white"}`}>
      {names[value]}
    </button>)}
  </div>;
}
