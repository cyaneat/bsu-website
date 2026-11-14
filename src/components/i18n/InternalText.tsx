"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n";

/** UI microcopy only. Editorial content must use reviewed localized CMS fields. */
const labels: Record<string, Record<Locale, string>> = {
  "Главная": {
    ru: "Главная", ky: "Башкы бет", en: "Home", "zh-CN": "首页",
  },
  "Образование": {
    ru: "Образование", ky: "Билим берүү", en: "Education", "zh-CN": "教育",
  },
  "Образовательные программы": {
    ru: "Образовательные программы", ky: "Билим берүү программалары",
    en: "Academic programs", "zh-CN": "专业目录",
  },
  "Найдите направление подготовки по названию, уровню или факультету.": {
    ru: "Найдите направление подготовки по названию, уровню или факультету.",
    ky: "Билим берүү программасын аталышы, деңгээли же факультети боюнча издеңиз.",
    en: "Find a program by name, degree level, or faculty.",
    "zh-CN": "按名称、学位层次或学院查找专业。",
  },
};

export default function InternalText({ text }: { text: string }) {
  const { locale } = useLocale();
  return <>{labels[text]?.[locale] ?? text}</>;
}
