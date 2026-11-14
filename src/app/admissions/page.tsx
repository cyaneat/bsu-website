import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, ClipboardList, FileCheck2, PhoneCall } from 'lucide-react';
import AdmissionsShell from '@/components/admissions/AdmissionsShell';
import { admissionSections, admissionSources } from '@/lib/admissions-data';
export const metadata: Metadata = { title: 'Абитуриентам | БГУ', description: 'Как поступить в БГУ: программы, документы, правила и контакты.' };
const steps = [
  { title:'Выберите программу', desc:'Изучите направления и факультеты, уровень и формат обучения.', href:'/programs' },
  { title:'Ознакомьтесь с правилами', desc:'Проверьте требования, действующие для вашего уровня и категории поступления.', href:'/admissions/rules' },
  { title:'Подготовьте документы', desc:'Сверьтесь с официальным перечнем и уточните условия подачи.', href:'/admissions/documents' },
  { title:'Уточните сроки и подайте заявление', desc:'Сроки и порядок приёма конкретной кампании подтверждает приёмная комиссия.', href:'/contacts' },
];
export default function AdmissionsPage(){return <AdmissionsShell title="Абитуриентам" description="Информация для поступающих в Бишкекский государственный университет имени академика К. Карасаева: с чего начать и где найти необходимые сведения.">
  <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="flex items-center gap-3 text-2xl font-bold text-[#102b4e]"><ClipboardList size={26}/>Как поступить</h2><ol className="mt-6 space-y-4">{steps.map((s,i)=><li key={s.title} className="flex gap-4 rounded-xl bg-slate-50 p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102b4e] font-bold text-white">{i+1}</span><div><h3 className="font-bold">{s.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</p><Link href={s.href} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#102b4e] hover:underline">Перейти <ArrowRight size={15}/></Link></div></li>)}</ol></section>
  <section><h2 className="text-2xl font-bold text-[#102b4e]">Полезные разделы</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{admissionSections.slice(1).map(s=><Link key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"><h3 className="font-bold text-[#102b4e]">{s.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#102b4e]">Подробнее <ArrowRight size={15}/></span></Link>)}</div></section>
  <section className="grid gap-4 sm:grid-cols-3"><Link href="/programs" className="rounded-xl border border-slate-200 bg-white p-5"><BookOpen className="text-[#102b4e]"/><p className="mt-3 font-semibold">Образовательные программы</p></Link><Link href="/admissions/documents" className="rounded-xl border border-slate-200 bg-white p-5"><FileCheck2 className="text-[#102b4e]"/><p className="mt-3 font-semibold">Пакет документов</p></Link><Link href="/contacts" className="rounded-xl border border-slate-200 bg-white p-5"><PhoneCall className="text-[#102b4e]"/><p className="mt-3 font-semibold">Связаться с БГУ</p></Link></section>
  <a href={admissionSources.rules} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline">Общие правила на действующем сайте БГУ <ArrowUpRight size={16}/></a>
</AdmissionsShell>}
