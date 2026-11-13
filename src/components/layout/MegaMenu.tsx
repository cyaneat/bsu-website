"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const navigation = [
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

export type NavigationItem = (typeof navigation)[number];

// Меню работает по наведению и нажатию.
// Ссылки пока демонстрационные и будут заменены реальными маршрутами.
export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
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
  );
}
