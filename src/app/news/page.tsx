import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsDirectory from "@/components/news/NewsDirectory";
import { getNews } from "@/lib/news-data";
export const metadata:Metadata={title:"Новости и мероприятия | БГУ",description:"Новости, научные события и мероприятия Бишкекского государственного университета"};
export default async function NewsPage(){const items=await getNews();return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main><section className="bg-[#102b4e] px-5 py-16 text-white sm:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="text-sm text-blue-100 hover:underline">Главная</Link><p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#d5b780]">Пресс-центр</p><h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Новости и мероприятия БГУ</h1><p className="mt-5 max-w-2xl text-blue-100">События университета, научная деятельность и международные проекты.</p></div></section><section className="mx-auto max-w-7xl px-5 py-12 sm:px-8"><NewsDirectory items={items}/><p className="mt-10 text-xs text-slate-500">Предварительная подборка материалов по bsu.kg. Полные тексты и фотографии будут перенесены после редакционной проверки; данные пока не обновляются автоматически.</p></section></main><Footer/></div>}
