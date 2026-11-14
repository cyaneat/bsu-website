"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import type { ProgramLevel, ProgramRecord } from "@/lib/program-data";

type Props = { programs: ProgramRecord[] };
export default function ProgramsDirectory({ programs }: Props) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<ProgramLevel | "">("");
  const [faculty, setFaculty] = useState("");
  const faculties = useMemo(() => [...new Set(programs.map(p => p.facultyName))].sort((a, b) => a.localeCompare(b, "ru")), [programs]);
  const results = useMemo(() => programs.filter(p => {
    const q = query.trim().toLocaleLowerCase("ru");
    const haystack = `${p.title} ${p.code ?? ""} ${p.profile ?? ""} ${p.facultyName}`.toLocaleLowerCase("ru");
    return (!q || haystack.includes(q)) && (!level || p.level === level) && (!faculty || p.facultyName === faculty);
  }), [programs, query, level, faculty]);
  const field = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#102b4e] focus:ring-2 focus:ring-blue-100";
  return <>
    <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
      <label className="block"><span className="mb-2 block text-sm font-semibold">Поиск</span><span className="relative block"><Search size={17} className="pointer-events-none absolute left-3 top-3.5 text-slate-400"/><input aria-label="Поиск программы" value={query} onChange={e => setQuery(e.target.value)} placeholder="Название, код, профиль..." className={`${field} pl-10`} /></span></label>
      <label className="block"><span className="mb-2 block text-sm font-semibold">Уровень</span><select value={level} onChange={e => setLevel(e.target.value as ProgramLevel | "")} className={field}><option value="">Все уровни</option><option>Бакалавриат</option><option>Магистратура</option><option>PhD</option></select></label>
      <label className="block"><span className="mb-2 block text-sm font-semibold">Факультет / институт</span><select value={faculty} onChange={e => setFaculty(e.target.value)} className={field}><option value="">Все подразделения</option>{faculties.map(f => <option key={f} value={f}>{f}</option>)}</select></label>
    </div>
    <div className="mt-7 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-600" aria-live="polite">Найдено программ: <strong>{results.length}</strong></p><button type="button" onClick={() => {setQuery("");setLevel("");setFaculty("");}} className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-white">Сбросить фильтры</button></div>
    {results.length ? <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{results.map(p => <Link href={`/programs/${p.slug}`} key={p.slug} className="group flex min-h-56 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"><div><div className="mb-4 flex items-center justify-between"><BookOpen size={25} className="text-[#102b4e]"/><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#102b4e]">{p.level}</span></div><h2 className="text-xl font-bold text-[#102b4e]">{p.title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{p.facultyName}</p>{p.code && <p className="mt-2 text-xs text-slate-500">Код: {p.code}</p>}</div><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e]">Подробнее <ArrowRight size={17} className="transition group-hover:translate-x-1"/></span></Link>)}</div> : <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">Ничего не найдено. Попробуйте изменить фильтры.</div>}
  </>;
}
