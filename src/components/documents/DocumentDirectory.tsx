"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, Search } from "lucide-react";
import type { DocumentRecord } from "@/lib/document-data";

type Props = { documents: DocumentRecord[] };

export default function DocumentDirectory({ documents }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Все категории");
  const categories = ["Все категории", ...Array.from(new Set(documents.map((item) => item.category)))];
  const filtered = useMemo(() => {
    const normalized = query.toLocaleLowerCase("ru").trim();
    return documents.filter((document) =>
      (category === "Все категории" || document.category === category) &&
      `${document.title} ${document.description} ${document.category}`.toLocaleLowerCase("ru").includes(normalized)
    );
  }, [documents, query, category]);

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[minmax(0,1fr)_280px]">
        <label className="relative block">
          <span className="mb-2 block text-sm font-semibold text-[#102b4e]">Поиск документов</span>
          <Search size={19} aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Например, академическая мобильность" className="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-3 outline-none focus:border-blue-700" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#102b4e]">Категория</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-blue-700">
            {categories.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <p className="my-6 text-sm text-slate-500" aria-live="polite">Найдено: {filtered.length} из {documents.length}</p>
      {filtered.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((document) => (
            <article key={document.slug} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#9b773f]"><FileText size={16}/>{document.category}</div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#102b4e]">{document.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{document.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-500">{document.format}</span>
                <Link href={`/documents/${document.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#102b4e] hover:underline">Подробнее <ArrowUpRight size={17}/></Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center text-slate-500">Ничего не найдено. Измените запрос или категорию.</div>
      )}
    </div>
  );
}
