"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Search, X } from "lucide-react";
import type { FacultyRecord } from "@/lib/faculty-data";

type Filter = "all" | "faculty" | "institute";

export default function FacultyDirectory({ items }: { items: FacultyRecord[] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase("ru-RU");
    return items.filter((item) => {
      const typeMatches = filter === "all" || item.kind === filter;
      const content = [item.name, item.shortName, item.category, item.summary].filter(Boolean).join(" ").toLocaleLowerCase("ru-RU");
      return typeMatches && (!q || content.includes(q));
    });
  }, [items, search, filter]);

  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
          <input
            aria-label="Поиск факультетов и институтов"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по названию, направлению или специализации"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 text-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
          />
          {search && <button onClick={() => setSearch("")} aria-label="Очистить поиск" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 hover:bg-slate-200"><X size={17}/></button>}
        </div>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Тип подразделения">
          {([ ["all", "Все подразделения"], ["faculty", "Факультеты"], ["institute", "Институты"] ] as const).map(([value, label]) => (
            <button key={value} onClick={() => setFilter(value)} aria-pressed={filter === value} className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === value ? "bg-[#102b4e] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{label}</button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-sm text-slate-500">Найдено подразделений: {filtered.length}</p>
      </div>
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-14 text-center">
          <Search className="mx-auto text-slate-400" size={32}/>
          <h2 className="mt-4 font-semibold text-slate-900">Ничего не найдено</h2>
          <p className="mt-2 text-sm text-slate-500">Попробуйте другой запрос или сбросьте фильтр.</p>
          <button onClick={() => { setSearch(""); setFilter("all"); }} className="mt-5 rounded-lg bg-[#102b4e] px-5 py-2 text-sm font-medium text-white">Показать все</button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => {
            const Icon = item.kind === "faculty" ? GraduationCap : Building2;
            return (
              <Link key={item.slug} href={`/faculties/${item.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                <div className="flex items-start justify-between gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#102b4e]"><Icon size={25}/></span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item.kind === "faculty" ? "Факультет" : "Институт"}</span></div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#a48652]">{item.category}</span>
                <h2 className="mt-2 text-xl font-bold leading-snug text-[#102b4e]">{item.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-[#102b4e]">Подробнее <ArrowRight size={19} className="transition group-hover:translate-x-1"/></div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
