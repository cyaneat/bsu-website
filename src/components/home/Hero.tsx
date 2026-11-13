import { ArrowRight, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <>
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
    </>
  );
}
