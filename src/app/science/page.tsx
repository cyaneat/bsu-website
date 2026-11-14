import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, GraduationCap, Presentation } from "lucide-react";
import ScienceShell from "@/components/science/ScienceShell";
import { scienceSections } from "@/lib/science-data";

export const metadata:Metadata={title:"Научная деятельность | БГУ",description:"Наука в БГУ: исследования, конференции, публикации, диссертации."};
const icons=[FlaskConical,Presentation,BookOpen,GraduationCap];
export default function SciencePage(){return <ScienceShell title="Научная деятельность" description="Исследования, научные мероприятия, журналы и подготовка исследователей в Бишкекском государственном университете.">
 <section className="grid gap-5 sm:grid-cols-2">{scienceSections.map((s,i)=>{const Icon=icons[i];return <Link key={s.slug} href={`/science/${s.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"><Icon size={27} className="text-[#a7864c]"/><h2 className="mt-5 text-xl font-bold text-[#102b4e]">{s.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{s.teaser}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e]">Подробнее <ArrowRight size={16}/></span></Link>})}</section>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-[#102b4e]">Архив научных материалов</h2><p className="mt-3 text-sm leading-7 text-slate-600">До полной миграции с bsu.kg раздел содержит ссылки на первоисточники. Для официального запуска проверим действующие советы, мероприятия, номера журналов и связанные файлы.</p></section>
 </ScienceShell>}
