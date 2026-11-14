import Link from 'next/link';
import { ArrowUpRight, ChevronRight, GraduationCap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { admissionSections } from '@/lib/admissions-data';

export default function AdmissionsShell({ title, eyebrow, description, children }: {title: string; eyebrow?: string; description: string; children: React.ReactNode}) {
  return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main>
    <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl">
      <nav aria-label="Навигационная цепочка" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/>{title !== 'Абитуриентам' ? <><Link href="/admissions" className="hover:underline">Абитуриентам</Link><ChevronRight size={15}/></> : null}<span aria-current="page" className="text-white">{title}</span></nav>
      <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#d5b780]">{eyebrow ?? 'Поступление в БГУ'}</p><h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl leading-7 text-blue-100">{description}</p>
    </div></section>
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="min-w-0 space-y-7">{children}<p className="text-xs leading-6 text-slate-500">Информация предварительная и переносится со старого сайта БГУ. Действующие правила, сроки, перечень программ и стоимость необходимо подтвердить в приёмной комиссии перед официальной публикацией.</p></div>
      <aside className="space-y-5 lg:self-start"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="flex items-center gap-2 text-lg font-bold text-[#102b4e]"><GraduationCap size={20}/> Разделы приёма</h2><nav aria-label="Разделы для абитуриентов" className="mt-4 space-y-1">{admissionSections.map(s => <Link key={s.href} href={s.href} className="flex justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#102b4e]">{s.title}<ChevronRight size={16} className="shrink-0"/></Link>)}</nav></section><section className="rounded-2xl bg-[#e9eef5] p-5"><p className="font-semibold text-[#102b4e]">Не нашли ответ?</p><p className="mt-2 text-sm leading-6 text-slate-600">Свяжитесь с университетом и уточните информацию о приёмной кампании.</p><Link href="/contacts" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#102b4e] hover:underline">Контакты БГУ <ArrowUpRight size={16}/></Link></section></aside>
    </div></main><Footer/></div>;
}
