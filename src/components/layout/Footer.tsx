"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n";

// Keep the university's localized short and full names together to avoid
// wrong word order in Kyrgyz and Chinese and doubled punctuation.
const names: Record<Locale, { short: string; full: string }> = {
  ru: { short: "БГУ", full: "Бишкекский государственный университет имени академика Кусеина Карасаева" },
  ky: { short: "БМУ", full: "Академик Кусейин Карасаев атындагы Бишкек мамлекеттик университети" },
  en: { short: "BSU", full: "Bishkek State University named after Academician Kusein Karasaev" },
  "zh-CN": { short: "比什凯克国立大学", full: "以库赛因·卡拉萨耶夫院士命名的比什凯克国立大学" },
};

export default function Footer() {
  const { locale, t } = useLocale();
  const name = names[locale];
  return (
    <footer className="bg-[#0b203b] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <h2 className="max-w-full break-words text-2xl font-bold leading-tight">{name.short}</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{name.full}</p>
        </div>
        <div>
          <h3 className="font-bold">{t("footerInfo")}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{t("footerDisclaimer")}</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 px-5 pt-6 text-xs text-slate-400 sm:px-8">
        {name.short} · {t("footerDev")}
      </div>
    </footer>
  );
}
