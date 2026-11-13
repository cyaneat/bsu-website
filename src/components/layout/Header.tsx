"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Globe, GraduationCap, Menu, Search, X } from "lucide-react";
import MegaMenu, { navigation } from "./MegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // This is navigation search, not site-wide content search.
  const matches = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("ru");
    if (!q) return [];
    return navigation.flatMap((section) => section.groups.flatMap((group) =>
      group.links.filter((link) => link.href && link.label.toLocaleLowerCase("ru").includes(q))
        .map((link) => ({ ...link, section: section.title }))
    )).slice(0, 8);
  }, [query]);

  return (
    <>
      <div className="bg-[#102b4e] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 text-xs sm:px-8">
          <span>Бишкекский государственный университет</span>
          <span className="flex shrink-0 items-center gap-2" title="Другие языковые версии добавим позднее">
            <Globe size={14} aria-hidden="true" /> RU <span className="text-white/40">· KG · EN</span>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex shrink-0 items-center gap-3" aria-label="БГУ — главная">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102b4e] text-white"><GraduationCap size={27} aria-hidden="true" /></div>
            <div><div className="text-2xl font-extrabold tracking-tight text-[#102b4e]">БГУ</div><div className="max-w-44 text-[10px] leading-tight text-slate-500">имени академика Кусеина Карасаева</div></div>
          </Link>
          <MegaMenu />
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setSearchOpen((v) => !v)} aria-label="Поиск по разделам" aria-expanded={searchOpen} className="rounded-full p-2 hover:bg-slate-100"><Search size={21} /></button>
            <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"} className="rounded-lg p-2 hover:bg-slate-100 lg:hidden">{mobileOpen ? <X size={25} /> : <Menu size={25} />}</button>
          </div>
        </div>
        {searchOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-md">
            <div className="mx-auto max-w-3xl">
              <label htmlFor="bsu-nav-search" className="mb-2 block text-sm font-medium text-[#102b4e]">Поиск по доступным разделам</label>
              <input id="bsu-nav-search" autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Например, новости или образование" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#102b4e]" />
              {query.trim() && <div className="mt-2 space-y-1" aria-live="polite">{matches.length ? matches.map((match) => (
                <Link key={`${match.section}-${match.label}`} href={match.href!} onClick={() => { setSearchOpen(false); setQuery(""); }} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100"><span className="text-slate-500">{match.section} · </span>{match.label}</Link>
              )) : <p className="px-3 py-2 text-sm text-slate-500">В доступных разделах ничего не найдено</p>}</div>}
            </div>
          </div>
        )}
        {mobileOpen && (
          <nav aria-label="Мобильная навигация" className="max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            {navigation.map((section) => (
              <details key={section.title} className="border-b border-slate-100">
                <summary className="cursor-pointer py-4 font-semibold text-[#102b4e]">{section.title}</summary>
                <div className="grid gap-4 pb-4 pl-3 sm:grid-cols-2">
                  {section.groups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#a7864c]">{group.title}</p>
                      {group.links.map((link) => link.href ? (
                        <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-slate-700">{link.label}</Link>
                      ) : <div key={link.label} className="flex justify-between gap-3 py-2 text-sm text-slate-400"><span>{link.label}</span><span className="text-xs">Скоро</span></div>)}
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
