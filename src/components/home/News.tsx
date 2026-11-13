import { Newspaper } from "lucide-react";

export default function News() {
  return (
    <>
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
    </>
  );
}
