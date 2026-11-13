"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, Search } from "lucide-react";
import type { Faculty } from "@/lib/api/faculties";

export default function FacultyCatalog({ faculties }: { faculties: Faculty[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ru");
    return faculties.filter((item) =>
      `${item.name} ${item.shortDescription}`.toLocaleLowerCase("ru").includes(normalized)
    );
  }, [faculties, query]);

  return (
    <>
      <label className="relative mt-8 block max-w-xl">
        <span className="sr-only">Поиск факультета</span>
        <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Поиск по названию факультета"
          className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
        />
      </label>
      <p aria-live="polite" className="mt-5 text-sm text-slate-500">
        Найдено: {filtered.length}
      </p>
      {filtered.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed p-8 text-slate-600">По вашему запросу ничего не найдено.</p>
      ) : (
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {filtered.map((faculty) => (
            <article key={faculty.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <Building2 size={34} className="text-[#12345b]" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold text-[#102b4e]">{faculty.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{faculty.shortDescription}</p>
              <Link href={`/faculties/${faculty.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-800 hover:underline">
                Подробнее <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
