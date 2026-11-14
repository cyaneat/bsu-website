"use client";
import Link from "next/link";
import { BookOpen, CalendarDays, FileText, LibraryBig } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
export default function Services(){const {t}=useLocale();const items=[
  {title:t("learningResources"),icon:BookOpen,href:"/programs"},
  {title:t("library"),icon:LibraryBig,href:"/about"},
  {title:t("scheduleShort"),icon:CalendarDays,href:"/admissions"},
  {title:t("documents"),icon:FileText,href:"/documents"},
];return <section id="services" className="scroll-mt-28 py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="mb-10 text-3xl font-bold text-[#102b4e]">{t("eServices")}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(item=>{const Icon=item.icon;return <Link key={item.title} href={item.href} className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300"><Icon className="shrink-0 text-[#163d70]" size={25}/><span className="font-semibold">{item.title}</span></Link>})}</div></div></section>}
