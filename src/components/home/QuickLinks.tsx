"use client";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Newspaper, Users } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
export default function QuickLinks(){const {t}=useLocale();const items=[
  {title:t("forApplicants"),description:t("forApplicantsDesc"),icon:GraduationCap,href:"/admissions"},
  {title:t("forStudents"),description:t("forStudentsDesc"),icon:BookOpen,href:"/#services"},
  {title:t("forTeachers"),description:t("forTeachersDesc"),icon:Users,href:"/documents"},
  {title:t("newsShort"),description:t("newsShortDesc"),icon:Newspaper,href:"/news"},
];return <section id="sections" className="scroll-mt-28 bg-[#f5f7fb] py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8">
  <div className="mb-10"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#a7864c]">{t("navLabel")}</p><h2 className="text-3xl font-bold text-[#102b4e]">{t("quickAccess")}</h2></div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(item=>{const Icon=item.icon;return <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><Icon size={34} className="mb-6 text-[#163d70]"/><h3 className="text-lg font-bold text-[#102b4e]">{item.title}</h3><p className="mt-3 min-h-12 text-sm leading-relaxed text-slate-500">{item.description}</p><ArrowRight size={20} className="mt-5 text-[#b39562] transition group-hover:translate-x-2"/></Link>})}</div>
</div></section>}
