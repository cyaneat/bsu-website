export default function Footer() {
  return (
    <>
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
    </>
  );
}
