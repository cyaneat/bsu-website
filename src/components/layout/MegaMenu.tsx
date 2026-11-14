"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export type NavLink = { label: string; href?: string; description?: string };
export type NavGroup = { title: string; links: NavLink[] };
export type NavSection = { title: string; summary: string; groups: NavGroup[] };

// Content routes will be connected as they are implemented. Missing href = not published yet.
export const navigation: NavSection[] = [
  {
    title: "Университет", summary: "Структура, руководство и жизнь университета",
    groups: [
      {
  title: "О БГУ",
  links: [
    { label: "Об университете", href: "/about" },
    { label: "История университета", href: "/about/history" },
    { label: "Миссия университета", href: "/about/mission" },
    { label: "Ректорат", href: "/about/leadership" },
    { label: "Учёный совет" },
    { label: "Преподаватели и сотрудники", href: "/staff" },
  ],
},
      
{
  title: "Структура",
  links: [
    {
      label: "Факультеты и институты",
      href: "/faculties"
    },
    {
      label: "Кафедры",
      href: "/departments"
    },
    {
      label: "Административные подразделения"
    },
    { label: "Контактная информация", href: "/contacts" },
  ],
},

    ],
  },
  {
    title: "Образование", summary: "Уровни образования и образовательные программы",
    groups: [
      { title: "Программы", links: [
        { label: "Образование в БГУ", href: "/#education" },
        { label: "Бакалавриат", href: "/#education" },
        { label: "Магистратура", href: "/#education" },
        { label: "Аспирантура", href: "/#education" },
      ] },
      { title: "Учебный процесс", links: [
        { label: "Образовательные программы", href: "/programs" },
        { label: "Академический календарь" },
        { label: "Расписание занятий" },
      ] },
    ],
  },
  {
    title: "Поступление", summary: "Всё необходимое для будущих студентов",
    groups: [
      { title: "Абитуриентам", links: [
        { label: "Образовательные направления", href: "/#education" },
        { label: "Приёмная комиссия" },
        { label: "Правила поступления" },
        { label: "Стоимость обучения" },
      ] },
      { title: "Дополнительно", links: [
        { label: "Иностранным абитуриентам" },
        { label: "Часто задаваемые вопросы" },
      ] },
    ],
  },
  {
    title: "Наука", summary: "Исследования, конференции и публикации",
    groups: [
      { title: "Научная деятельность", links: [
        { label: "Научные исследования" },
        { label: "Конференции" },
        { label: "Научные публикации" },
        { label: "Диссертационные советы" },
      ] },
      { title: "Актуальное", links: [
        { label: "Новости и мероприятия", href: "/#news" },
        { label: "Международные проекты" },
      ] },
    ],
  },
  {
    title: "Студентам", summary: "Учебные материалы, поддержка и цифровые сервисы",
    groups: [
      { title: "Сервисы", links: [
        { label: "Электронные сервисы", href: "/#services" },
        { label: "Библиотека", href: "/#services" },
        { label: "Расписание", href: "/#services" },
        { label: "Документы", href: "/documents" },
      ] },
      { title: "Студенческая жизнь", links: [
        { label: "Новости университета", href: "/#news" },
        { label: "Студенческие организации" },
        { label: "Общежития" },
      ] },
    ],
  },
];

export default function MegaMenu() {
  const [active, setActive] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const current = navigation.find((section) => section.title === active);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    function closeOnOutside(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
    };
  }, []);

  return (
    <nav ref={rootRef} aria-label="Основная навигация" className="relative hidden lg:flex lg:items-center">
      {navigation.map((section) => (
        <button
          type="button"
          key={section.title}
          aria-expanded={active === section.title}
          aria-controls="bsu-mega-panel"
          onMouseEnter={() => setActive(section.title)}
          onFocus={() => setActive(section.title)}
          onClick={() => setActive(active === section.title ? null : section.title)}
          className={`flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${active === section.title ? "bg-[#edf3fa] text-[#102b4e]" : "text-slate-700 hover:bg-slate-100"}`}
        >
          {section.title}<ChevronDown size={15} aria-hidden="true" />
        </button>
      ))}
      {current && (
        <div
          id="bsu-mega-panel"
          onMouseLeave={() => setActive(null)}
          className="absolute left-1/2 top-full z-50 w-[min(900px,calc(100vw-40px))] -translate-x-1/2 rounded-b-2xl border border-slate-200 bg-white p-7 shadow-2xl"
        >
          <div className="mb-5 border-b border-slate-100 pb-5">
            <div className="text-xl font-bold text-[#102b4e]">{current.title}</div>
            <p className="mt-1 text-sm text-slate-500">{current.summary}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {current.groups.map((group) => (
              <div key={group.title}>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#a7864c]">{group.title}</div>
                <div className="space-y-1">
                  {group.links.map((link) => link.href ? (
                    <Link key={link.label} href={link.href} onClick={() => setActive(null)} className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-[#f3f6fa] hover:text-[#102b4e]">
                      <span>{link.label}</span><ArrowRight size={15} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    </Link>
                  ) : (
                    <div key={link.label} className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-400">
                      <span>{link.label}</span><span className="text-[10px]">Скоро</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
