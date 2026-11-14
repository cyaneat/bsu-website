"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Search } from "lucide-react";
import type { NewsRecord, NewsCategory } from "@/lib/news-data";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { formatLocalizedNewsDate, localizeNews, newsUi } from "@/lib/news-i18n";
const categories: ("all" | NewsCategory)[] = ["all", "Новости", "Наука", "Международное сотрудничество", "Мероприятия"];
export default function NewsDirectory({items}:{items:NewsRecord[]}){
 const {locale}=useLocale(); const ui=newsUi[locale];
 const [query,setQuery]=useState("");const [category,setCategory]=useState<(typeof categories)[number]>("all");
 const filtered=useMemo(()=>items.map(x=>localizeNews(x,locale)).filter(x=>{
  const raw=items.find(raw=>raw.slug===x.slug);
  const matchCategory=category==="all"||raw?.category===category;
  const haystack=`${x.title} ${x.excerpt} ${raw?.title??""} ${raw?.excerpt??""}`.toLocaleLowerCase();
  return matchCategory&&haystack.includes(query.trim().toLocaleLowerCase());
 }),[items,locale,query,category]);
 return <>
 <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_250px]">
 <label className="relative"><span className="sr-only">{ui.search}</span><Search size={19} className="absolute left-4 top-3.5 text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={ui.search} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"/></label>
 <label><span className="sr-only">{ui.category}</span><select aria-label={ui.category} value={category} onChange={e=>setCategory(e.target.value as (typeof categories)[number])} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">{categories.map(c=><option value={c} key={c}>{c==="all"?ui.all:ui.categories[c]}</option>)}</select></label>
 </div>
 <p className="mb-5 text-sm text-slate-500" aria-live="polite">{ui.found}: {filtered.length}</p>
 <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(x=><Link key={x.slug} href={`/news/${x.slug}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"><span className="text-xs font-bold uppercase tracking-wider text-[#a7864c]">{ui.categories[x.category]}</span><h2 className="mt-4 text-xl font-bold leading-snug text-[#102b4e] group-hover:underline">{x.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{x.excerpt}</p><div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><CalendarDays size={15}/>{formatLocalizedNewsDate(x.date,locale)}</span><ArrowUpRight size={19} className="text-[#102b4e]"/></div></Link>)}</div>
 {!filtered.length&&<p className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center text-slate-500">{ui.none}</p>}
 </>;
}
