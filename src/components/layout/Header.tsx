"use client";

import { useState } from "react";
import { Globe, GraduationCap, Menu, Search, X } from "lucide-react";
import MegaMenu, { navigation } from "./MegaMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
{/* Верхняя информационная панель */}
      <div className="bg-[#102b4e] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs sm:px-8">
          <span>Бишкекский государственный университет</span>
          <span className="flex items-center gap-2">
            <Globe size={14} />
            RU
          </span>
        </div>
      </div>

      {/* Шапка */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102b4e] text-white">
              <GraduationCap size={27} />
            </div>
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-[#102b4e]">
                БГУ
              </div>
              <div className="max-w-44 text-[10px] leading-tight text-slate-500">
                имени академика Кусеина Карасаева
              </div>
            </div>
          </a>

          <MegaMenu />

          <div className="flex items-center gap-3">
            <a
              href="#services"
              aria-label="Электронные сервисы"
              className="rounded-full p-2 hover:bg-slate-100"
            >
              <Search size={21} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <nav className="max-h-[75vh] overflow-y-auto border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            {navigation.map((item) => (
              <details key={item.title} className="border-b border-slate-100">
                <summary className="cursor-pointer py-4 font-semibold">
                  {item.title}
                </summary>
                <div className="pb-3 pl-4">
                  {item.links.map((link) => (
                    <a
                      key={link}
                      href="#sections"
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 text-sm text-slate-600"
                    >
                      {link}
                    </a>
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
