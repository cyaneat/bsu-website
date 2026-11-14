import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getNewsBySlug, newsRecords, formatNewsDate } from "@/lib/news-data";
export const instant = false;
export function generateStaticParams(){return newsRecords.map(x=>({slug:x.slug}));}
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const x=await getNewsBySlug(slug);return {title:x?`${x.title} | БГУ`:"Публикация не найдена | БГУ"};}
export default async function NewsArticle({params}:Props){const {slug}=await params;const item=await getNewsBySlug(slug);if(!item)notFound();return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main><section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8"><div className="mx-auto max-w-4xl"><div className="flex flex-wrap gap-3 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><span>/</span><Link href="/news" className="hover:underline">Новости</Link></div><p className="mt-8 text-sm font-bold uppercase tracking-wider text-[#d5b780]">{item.category}</p><h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">{item.title}</h1><p className="mt-6 flex items-center gap-2 text-blue-100"><CalendarDays size={18}/>{formatNewsDate(item.date)}</p></div></section><section className="mx-auto max-w-4xl px-5 py-12 sm:px-8"><article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"><p className="text-lg leading-8 text-slate-700">{item.excerpt}</p><p className="mt-6 text-sm text-slate-500">Это краткая карточка публикации. Полный текст и медиа будут добавлены после миграции контента и согласования с БГУ.</p><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#102b4e] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900">Официальная лента БГУ <ExternalLink size={17}/></a></article><Link href="/news" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={18}/>Все новости</Link></section></main><Footer/></div>}
