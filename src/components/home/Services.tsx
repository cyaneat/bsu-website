import { BookOpen, CalendarDays, FileText, LibraryBig } from "lucide-react";

export default function Services() {
  return (
    <>
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
    </>
  );
}
