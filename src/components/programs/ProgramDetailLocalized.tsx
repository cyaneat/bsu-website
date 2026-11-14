"use client";
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import type { ProgramRecord } from "@/lib/program-data";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { translateContent, contentHasTranslation } from "@/lib/content-translations";
import { programPageTranslations } from "@/lib/program-page-i18n";

export default function ProgramDetailLocalized({ program: p }: { program: ProgramRecord }) {
  const { locale } = useLocale();
  const t = programPageTranslations[locale];
  const field = (value?: string | null) => translateContent(value, locale);
  const untranslated = [p.title, p.facultyName, p.description, p.profile, p.duration, p.languages]
    .filter((s): s is string => Boolean(s)).some((s) => !contentHasTranslation(s, locale));
  return <main>
    <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3 text-sm text-blue-100"><Link href="/" className="hover:underline">{t.home}</Link><span>/</span><Link href="/programs" className="hover:underline">{t.programs}</Link></div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#d5b780]">{field(p.level)} {p.code ? `· ${p.code}` : ""}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{field(p.title)}</h1>
        <p className="mt-5 text-blue-100">{field(p.facultyName)}</p>
      </div>
    </section>
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-7">
        {untranslated && <p role="status" className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">{t.fallback}</p>}
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3"><BookOpen size={26} className="text-[#102b4e]"/><h2 className="text-2xl font-bold text-[#102b4e]">{t.about}</h2></div>
          <p className="mt-5 leading-7 text-slate-700">{p.description ? field(p.description) : t.emptyDescription}</p>
          {p.profile && <p className="mt-4 leading-7"><span className="font-semibold">{t.profile}: </span>{field(p.profile)}</p>}
        </section>
        <Link href={`/faculties/${p.facultySlug}`} className="block rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-[#102b4e] hover:border-blue-300">{t.facultyLink} →</Link>
        <Link href="/programs" className="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={18}/>{t.allPrograms}</Link>
      </div>
      <aside className="lg:self-start"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-[#102b4e]"><GraduationCap size={23}/>{t.details}</div>
        <dl className="mt-5 space-y-4 text-sm">
          <div><dt className="text-slate-500">{t.level}</dt><dd className="mt-1 font-semibold">{field(p.level)}</dd></div>
          {p.code && <div><dt className="text-slate-500">{t.code}</dt><dd className="mt-1 font-semibold">{p.code}</dd></div>}
          {p.duration && <div><dt className="text-slate-500">{t.duration}</dt><dd className="mt-1 font-semibold">{field(p.duration)}</dd></div>}
          {p.languages && <div><dt className="text-slate-500">{t.languages}</dt><dd className="mt-1 font-semibold">{field(p.languages)}</dd></div>}
        </dl>
        <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#102b4e] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-900">{t.verify} <ExternalLink size={16}/></a>
        <p className="mt-4 text-xs leading-5 text-slate-500">{t.disclaimer}</p>
      </div></aside>
    </div>
  </main>;
}
