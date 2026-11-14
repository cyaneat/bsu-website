"use client";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
export default function Education(){const {t}=useLocale();const items=[
  {title:t("bachelor"),description:t("bachelorDesc")},
  {title:t("master"),description:t("masterDesc")},
  {title:t("phd"),description:t("phdDesc")},
];return <section id="education" className="scroll-mt-28 py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#a7864c]">{t("eduOpportunities")}</p><h2 className="mb-4 text-3xl font-bold text-[#102b4e]">{t("educationInBSU")}</h2><p className="mb-10 max-w-2xl text-slate-500">{t("eduIntro")}</p>
  <div className="grid gap-6 md:grid-cols-3">{items.map((item,index)=><article key={index} className="rounded-2xl border border-slate-200 p-8 transition hover:border-blue-300 hover:shadow-lg"><span className="text-sm font-bold text-[#b39562]">0{index+1}</span><BookOpen className="my-7 text-[#163d70]" size={36}/><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p></article>)}</div>
  <div className="mt-10 flex flex-wrap gap-3"><Link href="/faculties" className="inline-flex items-center rounded-xl bg-[#102b4e] px-6 py-3 font-semibold text-white transition hover:bg-blue-800">{t("viewFaculties")} →</Link><Link href="/departments" className="inline-flex items-center rounded-xl border border-[#102b4e] px-6 py-3 font-semibold text-[#102b4e] transition hover:bg-[#102b4e] hover:text-white">{t("viewDepartments")} →</Link></div>
</div></section>}
