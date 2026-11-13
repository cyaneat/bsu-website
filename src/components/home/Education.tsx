import { BookOpen } from "lucide-react";

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

export default function Education() {
  return (
    <>
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
    </>
  );
}
