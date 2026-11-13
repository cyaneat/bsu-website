"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import type { DepartmentRecord } from "@/lib/department-data";

export default function DepartmentDirectory({ items }: { items: DepartmentRecord[] }) {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("all");
  const facultyOptions = useMemo(
    () => Array.from(new Map(items.map((item) => [item.facultySlug, item.facultyName])).entries()),
    [items]
  );
  const filtered = useMemo(() => {
    const search = query.toLocaleLowerCase("ru").trim();
    return items.filter((item) =>
      (faculty === "all" || item.facultySlug === faculty) &&
      (!search || `${item.name} ${item.facultyName}`.toLocaleLowerCase("ru").includes(search))
    );
  }, [items, query, faculty]);

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,280px)]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Поиск кафедры</span>
          <span className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 focus-within:ring-2 focus-within:ring-blue-300">
            <Search size={19} className="text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Название кафедры..." className="min-w-0 w-full py-3 outline-none" />
          </span>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Факультет</span>
          <select value={faculty} onChange={(event) => setFaculty(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3">
            <option value="all">Все подразделения</option>
            {facultyOptions.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
          </select>
        </label>
      </div>
      <p className="my-5 text-sm text-slate-500" aria-live="polite">Найдено кафедр: {filtered.length}</p>
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">По вашему запросу кафедры не найдены.</div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((department) => (
            <li key={department.slug}>
              <Link href={`/departments/${department.slug}`} className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#a48652]">Кафедра</p>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-[#102b4e]">{department.name}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{department.facultyName}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e]">Подробнее <ArrowUpRight size={17} className="transition group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
