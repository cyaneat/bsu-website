
"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  FileText,
  Globe,
  GraduationCap,
  LibraryBig,
  Menu,
  Newspaper,
  Search,
  Users,
  X,
} from "lucide-react";

const navigation = [
  {
    title: "Университет",
    links: [
      "История университета",
      "Ректорат",
      "Структура университета",
      "Факультеты и институты",
      "Контакты",
    ],
  },
  {
    title: "Образование",
    links: [
      "Бакалавриат",
      "Магистратура",
      "Аспирантура",
      "Образовательные программы",
    ],
  },
  {
    title: "Поступление",
    links: [
      "Приёмная комиссия",
      "Правила поступления",
      "Стоимость обучения",
      "Иностранным абитуриентам",
    ],
  },
  {
    title: "Наука",
    links: [
      "Научная деятельность",
      "Конференции",
      "Публикации",
    ],
  },
  {
    title: "Студентам",
    links: [
      "Расписание",
      "Электронные сервисы",
      "Библиотека",
      "Документы",
    ],
  },
];

const quickLinks = [
  {
    title: "Абитуриентам",
    description: "Поступление и образовательные программы",
    icon: GraduationCap,
    href: "#education",
  },
  {
    title: "Студентам",
    description: "Учебные материалы и электронные сервисы",
    icon: BookOpen,
    href: "#services",
  },
  {
    title: "Преподавателям",
    description: "Документы и ресурсы университета",
    icon: Users,
    href: "#services",
  },
  {
    title: "Новости",
    description: "События университетской жизни",
    icon: Newspaper,
    href: "#news",
  },
];

const education = [
  {
    title: "Бакалавриат",
    description: "Основные программы высшего образования",
  },
  {
    title: "Магистратура",
    description: "Углублённая профессиональная подготовка",
  },
  {
    title: "Аспирантура",
    description: "Научная и исследовательская деятельность",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
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

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === item.title}
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === item.title ? null : item.title
                    )
                  }
                  className="flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-100"
                >
                  {item.title}
                  <ChevronDown size={14} />
                </button>

                {activeMenu === item.title && (
                  <div className="absolute left-0 top-full w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {item.links.map((link) => (
                      <a
                        key={link}
                        href="#sections"
                        onClick={() => setActiveMenu(null)}
                        className="block rounded-lg px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-900"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

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

      <main>
        {/* Главный баннер */}
        <section className="relative overflow-hidden bg-[#102b4e] text-white">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-blue-100">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Образование · Наука · Развитие
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
                Бишкекский государственный
                <span className="block text-[#d5b780]">университет</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
                имени академика Кусеина Карасаева.
                Пространство знаний, исследований и новых возможностей.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#education"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#d5b780] px-6 py-4 font-semibold text-[#102b4e] transition hover:bg-white"
                >
                  Образование <ArrowRight size={18} />
                </a>
                <a
                  href="#sections"
                  className="rounded-xl border border-white/40 px-6 py-4 font-semibold transition hover:bg-white/10"
                >
                  Об университете
                </a>
              </div>
            </div>

            <div className="flex min-h-80 flex-col justify-end rounded-3xl border border-white/20 bg-gradient-to-br from-blue-600/30 to-[#071a32] p-8 shadow-2xl">
              <GraduationCap size={64} className="mb-6 text-[#d5b780]" />
              <h2 className="text-2xl font-bold">
                Новая цифровая платформа БГУ
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                Информация об университете, образовательные программы,
                новости и электронные сервисы в одном пространстве.
              </p>
            </div>
          </div>
        </section>

        {/* Быстрый доступ */}
        <section id="sections" className="scroll-mt-28 bg-[#f5f7fb] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#a7864c]">
                Навигация
              </p>
              <h2 className="text-3xl font-bold text-[#102b4e]">
                Быстрый доступ
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon size={34} className="mb-6 text-[#163d70]" />
                    <h3 className="text-lg font-bold text-[#102b4e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 min-h-12 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                    <ArrowRight
                      size={20}
                      className="mt-5 text-[#b39562] transition group-hover:translate-x-2"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Образование */}
        <section id="education" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#a7864c]">
              Образовательные возможности
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#102b4e]">
              Образование в БГУ
            </h2>
            <p className="mb-10 max-w-2xl text-slate-500">
              Информация об уровнях образования и программах университета.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {education.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-8 transition hover:border-blue-300 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-[#b39562]">
                    0{index + 1}
                  </span>
                  <BookOpen className="my-7 text-[#163d70]" size={36} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Новости */}
        <section id="news" className="scroll-mt-28 bg-[#f5f7fb] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#a7864c]">
                  Пресс-центр
                </p>
                <h2 className="text-3xl font-bold text-[#102b4e]">
                  Новости и события
                </h2>
              </div>
              <span className="text-sm text-slate-500">
                Подключение к API запланировано
              </span>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Newspaper size={42} className="mx-auto text-slate-400" />
              <h3 className="mt-5 text-xl font-bold">
                Лента новостей университета
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
                Здесь будут отображаться реальные новости, фотографии,
                даты публикаций и анонсы мероприятий из backend API.
              </p>
            </div>
          </div>
        </section>

        {/* Электронные сервисы */}
        <section id="services" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-10 text-3xl font-bold text-[#102b4e]">
              Электронные сервисы
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Учебные ресурсы", icon: BookOpen },
                { title: "Библиотека", icon: LibraryBig },
                { title: "Расписание", icon: CalendarDays },
                { title: "Документы", icon: FileText },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-5"
                  >
                    <Icon className="text-[#163d70]" size={25} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-[#0b203b] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">БГУ</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Бишкекский государственный университет имени академика
              Кусеина Карасаева.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Информация</h3>
            <p className="mt-3 text-sm text-slate-300">
              Официальные контакты, адреса подразделений и полезные
              ссылки будут добавлены после проверки данных.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 px-5 pt-6 text-xs text-slate-400 sm:px-8">
          БГУ · Разработка нового официального сайта
        </div>
      </footer>
    </div>
  );
}
