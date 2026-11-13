import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Building2, ChevronRight, ExternalLink, Mail, MapPin, Phone, UserRound } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getFacultyBySlug } from "@/lib/faculty-data";

// Next.js 16 Cache Components: dynamically resolve route params for this page.
export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);
  return { title: faculty ? `${faculty.name} | БГУ` : "Подразделение не найдено | БГУ", description: faculty?.summary };
}

export default async function FacultyPage({ params }: Props) {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) notFound();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-blue-100">
              <Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/>
              <Link href="/faculties" className="hover:underline">Факультеты и институты</Link><ChevronRight size={15}/>
              <span aria-current="page" className="text-white">{faculty.shortName ?? faculty.name}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">{faculty.kind === "faculty" ? "Факультет" : "Институт"} · {faculty.category}</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{faculty.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100">{faculty.summary}</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3"><span className="rounded-lg bg-blue-50 p-3 text-[#102b4e]"><Building2 size={23}/></span><h2 className="text-2xl font-bold text-[#102b4e]">О подразделении</h2></div>
              <p className="mt-5 leading-7 text-slate-700">{faculty.summary}</p>
              <p className="mt-4 text-sm text-slate-500">Ниже приведены сведения, опубликованные на прежнем сайте университета. Полная историческая справка и дополнительные материалы будут добавляться после согласования с редакторами БГУ.</p>
            </section>
            {faculty.departments && faculty.departments.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-[#102b4e]">Кафедры</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">{faculty.departments.map((name) => (
                  <li key={name} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-800">{name}</li>
                ))}</ul>
                <p className="mt-4 text-xs text-slate-500">Опубликованный на старом сайте перечень; структура требует проверки на актуальность.</p>
              </section>
            )}
            {faculty.programs && faculty.programs.length > 0 && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3"><BookOpen size={23} className="text-[#102b4e]"/><h2 className="text-2xl font-bold text-[#102b4e]">Направления подготовки</h2></div>
                <div className="mt-5 space-y-3">{faculty.programs.map((program, index) => (
                  <div key={`${program.title}-${index}`} className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center">
                    <div><h3 className="font-semibold">{program.title}</h3>{program.degree && <p className="mt-1 text-sm text-slate-500">{program.degree}</p>}</div>
                    {program.code && <span className="self-start rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#102b4e]">{program.code}</span>}
                  </div>
                ))}</div>
              </section>
            )}
            <Link href="/faculties" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={17}/>Вернуться к списку факультетов</Link>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500"><UserRound size={18}/>{faculty.leadTitle}</div>
              <h2 className="mt-3 text-xl font-bold leading-snug text-[#102b4e]">{faculty.leader}</h2>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-[#102b4e]">Контакты</h2>
              <div className="space-y-5 break-words text-sm">
                {faculty.address && <div className="flex gap-3"><MapPin size={19} className="shrink-0 text-[#a48652]"/><span>{faculty.address}</span></div>}
                {faculty.phone && <div className="flex gap-3"><Phone size={19} className="shrink-0 text-[#a48652]"/><a className="hover:underline" href={`tel:${faculty.phone.replace(/[^+\d]/g, "")}`}>{faculty.phone}</a></div>}
                {faculty.email && <div className="flex gap-3"><Mail size={19} className="shrink-0 text-[#a48652]"/><a className="hover:underline" href={`mailto:${faculty.email}`}>{faculty.email}</a></div>}
              </div>
              <a href={faculty.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#102b4e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-900">Официальная страница <ExternalLink size={16}/></a>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">Проверьте актуальные сведения на официальном сайте БГУ.</p>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
