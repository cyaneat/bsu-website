import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AdmissionsShell from '@/components/admissions/AdmissionsShell';
import { admissionFaq } from '@/lib/admissions-data';
export const metadata:Metadata = {title:'Вопросы и ответы для абитуриентов | БГУ'};
export default function FAQ(){return <AdmissionsShell title="Частые вопросы" description="Ответы на основные вопросы поступающих и ссылки на связанные разделы."><div className="space-y-4">{admissionFaq.map(x=><details key={x.q} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><summary className="cursor-pointer list-none font-semibold text-[#102b4e]">{x.q}<span className="float-right text-slate-400 group-open:rotate-90"><ChevronRight size={19}/></span></summary><p className="mt-4 text-sm leading-7 text-slate-600">{x.a}</p><Link href={x.href} className="mt-3 inline-block text-sm font-semibold text-[#102b4e] underline">{x.link}</Link></details>)}</div></AdmissionsShell>}
