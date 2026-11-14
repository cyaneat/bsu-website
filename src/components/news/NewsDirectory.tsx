"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Search } from "lucide-react";
import type { NewsRecord, NewsCategory } from "@/lib/news-data";
import { formatNewsDate } from "@/lib/news-data";
const cats: ("Все" | NewsCategory)[] = ["Все", "Новости", "Наука", "Международное сотрудничество", "Мероприятия"];
export default function NewsDirectory({items}:{items:NewsRecord[]}) {
 const [query,setQuery]=useState(""); const [cat,setCat]=useState<(typeof cats)[number]>("Все");
 const filtered=useMemo(()=>items.filter(item=>(cat==="Все"||item.category===cat)&&`${item.title} ${item.excerpt}`.toLocaleLowerCase("ru").includes(query.trim().toLocaleLowerCase("ru"))),[items,query,cat]);
 return <><div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_250px]"><label className="relative"><span className="sr-only">Поиск по новостям</span><Search size={19} className="absolute left-4 top-3.5 text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск по новостям..." className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"/></label><label><span className="sr-only">Категория</span><select value={cat} onChange={e=>setCat(e.target.value as (typeof cats)[number])} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">{cats.map(x=><option key={x}>{x}</option>)}</select></label></div>
 <p className="mb-5 text-sm text-slate-500">Найдено публикаций: {filtered.length}</p>
 <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(item=><Link key={item.slug} href={`/news/${item.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"><span className="text-xs font-bold uppercase tracking-wider text-[#a7864c]">{item.category}</span><h2 className="mt-4 text-xl font-bold leading-snug text-[#102b4e] group-hover:underline">{item.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.excerpt}</p><div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><CalendarDays size={15}/>{formatNewsDate(item.date)}</span><ArrowUpRight size={19} className="text-[#102b4e]"/></div></Link>)}</div>
 {!filtered.length&&<p className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center text-slate-500">По вашему запросу публикаций не найдено.</p>}</>;
}
