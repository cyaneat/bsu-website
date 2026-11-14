"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, FlaskConical, GraduationCap, Presentation } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { scienceSections } from "@/lib/science-data";
import { scienceUi, localizedScience } from "@/lib/science-i18n";

const icons = [FlaskConical, Presentation, BookOpen, GraduationCap];
export default function ScienceLocalized({ slug }: { slug?: string }) {
  const { locale } = useLocale();
  const t = scienceUi[locale];
  const sections = scienceSections.map((s) => localizedScience(s, locale));
  const current = slug ? sections.find((s) => s.slug === slug) : undefined;
  const title = current?.title ?? t.title;
  const description = current?.teaser ?? t.intro;
  return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header /><main>
    <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl">
      <nav aria-label={t.home} className="flex flex-wrap gap-2 text-sm text-blue-100">
        <Link href="/" className="hover:underline">{t.home}</Link><span>/</span>
        {current ? <><Link href="/science" className="hover:underline">{t.science}</Link><span>/</span><span aria-current="page" className="text-white">{title}</span></> : <span aria-current="page" className="text-white">{t.science}</span>}
      </nav>
      <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#d5b780]">{t.badge}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-3xl leading-7 text-blue-100">{description}</p>
    </div></section>
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 space-y-6">
        {!current ? <>
          <section className="grid gap-5 sm:grid-cols-2">
            {sections.map((section,i) => {const Icon=icons[i];return <Link key={section.slug} href={`/science/${section.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"><Icon size={27} className="text-[#a7864c]"/><h2 className="mt-5 text-xl font-bold text-[#102b4e]">{section.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{section.teaser}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e]">{t.more} <ArrowRight size={16}/></span></Link>})}
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-[#102b4e]">{t.archive}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{t.archiveText}</p></section>
        </> : <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t.overview}</h2><div className="mt-5 space-y-4">{current.body.map((paragraph,i)=><p key={i} className="leading-7 text-slate-700">{paragraph}</p>)}</div></section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t.materials}</h2><div className="mt-5 grid gap-3">{current.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300"><div><h3 className="font-semibold text-[#102b4e]">{source.label}</h3>{source.description && <p className="mt-1 text-sm text-slate-500">{source.description}</p>}</div><ExternalLink size={17} className="shrink-0 text-slate-500"/></a>)}</div><p className="mt-5 text-xs leading-5 text-slate-500">{t.sourceNote}</p></section>
        </>}
        <p className="text-xs leading-5 text-slate-500">{t.notice}</p>
        {current && <Link href="/science" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={17}/>{t.back}</Link>}
      </div>
      <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-28"><h2 className="font-bold text-[#102b4e]">{t.sections}</h2><div className="mt-4 space-y-1">{sections.map((section)=><Link key={section.slug} href={`/science/${section.slug}`} aria-current={section.slug===slug ? "page":undefined} className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#102b4e]"><span>{section.title}</span><ArrowRight size={15} className="shrink-0"/></Link>)}</div><a href="https://bsu.kg/ru/category/nauka/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-[#102b4e] hover:underline">{t.legacy} <ExternalLink size={15}/></a></aside>
    </div>
  </main><Footer/></div>;
}
