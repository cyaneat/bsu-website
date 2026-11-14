import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Info } from 'lucide-react';
import AdmissionsShell from '@/components/admissions/AdmissionsShell';
import { admissionSources } from '@/lib/admissions-data';
export const metadata:Metadata = {title:'Правила приёма | БГУ'};
const rules = [
  {title:'Бакалавриат', text:'Для поступления на ряд программ используются результаты общереспубликанского тестирования (ОРТ). Уточните действующие пороговые баллы и условия конкурса.'},
  {title:'Магистратура', text:'На старом сайте БГУ описаны вступительные собеседования. Конкретные требования зависят от направления подготовки.'},
  {title:'Иностранные граждане', text:'На сайте университета предусмотрен отдельный порядок приёма, в том числе собеседование и подтверждение документов об образовании.'},
  {title:'Колледж', text:'На опубликованной странице колледжа указан конкурс по среднему баллу документа об образовании. Действующие правила набора необходимо сверить.'},
];
export default function Rules(){return <AdmissionsShell title="Правила приёма" description="Обзор порядка поступления по опубликованным материалам БГУ. Это не официальное объявление о наборе на 2026–2027 учебный год."><div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><Info size={20} className="mb-2"/>Сроки приёма, пороговые баллы, перечень испытаний и конкурсные условия меняются. Проверяйте правила для конкретного года и программы.</div><div className="grid gap-4 sm:grid-cols-2">{rules.map(rule=><section key={rule.title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-[#102b4e]">{rule.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{rule.text}</p></section>)}</div><div className="flex flex-wrap gap-4"><a href={admissionSources.rules} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline">Общие правила БГУ <ArrowUpRight size={17}/></a><a href={admissionSources.college} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline">Приём в колледж <ArrowUpRight size={17}/></a></div><Link href="/admissions/documents" className="inline-block rounded-xl bg-[#102b4e] px-5 py-3 font-semibold text-white">Перейти к документам →</Link></AdmissionsShell>}
