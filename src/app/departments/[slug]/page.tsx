import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ExternalLink, Building2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDepartmentBySlug } from "@/lib/department-data";

// Keep compatibility with the project's current Next.js 16 Cache Components configuration.
export const instant = false;
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const department = await getDepartmentBySlug(slug);
  return { title: department ? `${department.name} | БГУ` : "Кафедра не найдена | БГУ" };
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const department = await getDepartmentBySlug(slug);
  if (!department) notFound();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/><Link href="/faculties" className="hover:underline">Факультеты</Link><ChevronRight size={15}/><Link href="/departments" className="hover:underline">Кафедры</Link><ChevronRight size={15}/><span aria-current="page" className="text-white">{department.name}</span></nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">Кафедра</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{department.name}</h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-blue-100">{department.facultyName}</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">О кафедре</h2><p className="mt-4 leading-7 text-slate-700">Кафедра входит в структуру факультета. Описание деятельности, история кафедры и направления исследований будут размещены после подтверждения университетом.</p></section>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">Сотрудники и программы</h2><p className="mt-4 leading-7 text-slate-700">Список преподавателей, заведующий кафедрой, учебные программы и документы пока уточняются. Backend-команда сможет предоставлять эти сведения через API.</p></section>
            <Link href="/departments" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={17}/> Ко всем кафедрам</Link>
          </div>
          <aside className="lg:self-start"><section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><Building2 className="text-[#a48652]"/><h2 className="text-xl font-bold text-[#102b4e]">Факультет</h2></div><Link href={`/faculties/${department.facultySlug}`} className="mt-4 block font-medium leading-relaxed text-[#102b4e] hover:underline">{department.facultyName}</Link><a href={department.facultySourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#102b4e] hover:underline">Источник на сайте БГУ <ExternalLink size={15}/></a><p className="mt-4 text-xs leading-5 text-slate-500">Информация требует проверки на актуальность перед официальной публикацией.</p></section></aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
