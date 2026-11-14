import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, Compass, History, Mail, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aboutSources } from '@/lib/about-data';
export const metadata: Metadata = { title: 'Об университете | БГУ', description: 'История, миссия и структура Бишкекского государственного университета имени К. Карасаева.' };
const cards = [
  { title: 'История университета', desc: 'От педагогического института 1979 года до современного БГУ.', href: '/about/history', icon: History },
  { title: 'Миссия и ценности', desc: 'Приоритеты, принципы деятельности и стратегические ориентиры.', href: '/about/mission', icon: Compass },
  { title: 'Руководство', desc: 'Ректорат и контактная информация руководства.', href: '/about/leadership', icon: Users },
  { title: 'Факультеты и институты', desc: 'Академическая структура университета.', href: '/faculties', icon: Building2 },
  { title: 'Образовательные программы', desc: 'Направления подготовки и уровни образования.', href: '/programs', icon: BookOpen },
  { title: 'Контакты', desc: 'Адрес университета, номера телефонов и электронная почта.', href: '/contacts', icon: Mail },
];
export default function AboutPage() { return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main>
  <section className="bg-[#102b4e] px-5 py-16 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl"><Link href="/" className="text-sm text-blue-100 hover:underline">Главная</Link><p className="mt-8 text-sm font-semibold uppercase tracking-[.2em] text-[#d5b780]">БГУ имени К. Карасаева</p><h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Об университете</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">Бишкекский государственный университет имени академика Кусеина Карасаева — образовательное и научное учреждение с историей, начавшейся в 1979 году.</p></div></section>
  <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16"><h2 className="text-2xl font-bold text-[#102b4e] sm:text-3xl">Знакомство с БГУ</h2><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{cards.map(({title,desc,href,icon:Icon})=><Link href={href} key={href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"><Icon size={28} className="text-[#a7864c]"/><h3 className="mt-5 text-xl font-bold text-[#102b4e]">{title}</h3><p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">{desc}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e]">Перейти <ArrowRight size={16}/></span></Link>)}</div><p className="mt-8 text-xs text-slate-500">Сведения для предварительного переноса со <a href={aboutSources.history} target="_blank" rel="noopener noreferrer" className="underline">старого сайта БГУ</a>. Перед официальным запуском необходима редакторская проверка.</p></section>
</main><Footer/></div> }
