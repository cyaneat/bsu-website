"use client";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
export default function Hero(){const {t}=useLocale();return <section className="relative overflow-hidden bg-[#102b4e] text-white">
  <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"/><div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"/>
  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
    <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-blue-100"><span className="h-2 w-2 rounded-full bg-amber-400"/>{t("heroTag")}</div>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">{t("heroLine1")} <span className="block text-[#d5b780]">{t("heroLine2")}</span></h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">{t("heroDesc")}</p>
      <div className="mt-9 flex flex-wrap gap-4"><Link href="/programs" className="inline-flex items-center gap-2 rounded-xl bg-[#d5b780] px-6 py-4 font-semibold text-[#102b4e] transition hover:bg-white">{t("heroLearn")}<ArrowRight size={18}/></Link><Link href="/about" className="rounded-xl border border-white/40 px-6 py-4 font-semibold transition hover:bg-white/10">{t("heroAbout")}</Link></div>
    </div>
    <div className="flex min-h-80 flex-col justify-end rounded-3xl border border-white/20 bg-gradient-to-br from-blue-600/30 to-[#071a32] p-8 shadow-2xl"><GraduationCap size={64} className="mb-6 text-[#d5b780]"/><h2 className="text-2xl font-bold">{t("heroPlatform")}</h2><p className="mt-3 text-sm leading-relaxed text-blue-100">{t("heroPlatformDesc")}</p></div>
  </div>
</section>}
