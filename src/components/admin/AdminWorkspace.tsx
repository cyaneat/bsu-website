"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowUpRight, BookOpen, Building2, Check, ChevronLeft,
  ChevronRight, ClipboardList, FileText, LayoutDashboard, Menu, Newspaper,
  Pencil, Plus, Search, ShieldAlert, Trash2, Users, X,
} from "lucide-react";

type Item = { id: string; title: string; subtitle: string; source?: string; draft?: boolean };
type ModuleKey = "faculties" | "departments" | "staff" | "programs" | "news" | "documents";
type Module = { key: ModuleKey; name: string; icon: typeof Building2; publicPath: string; note: string };
const modules: Module[] = [
  { key: "faculties", name: "Факультеты", icon: Building2, publicPath: "/faculties", note: "Факультеты и институты" },
  { key: "departments", name: "Кафедры", icon: ClipboardList, publicPath: "/departments", note: "Каталог кафедр" },
  { key: "staff", name: "Сотрудники", icon: Users, publicPath: "/staff", note: "Преподаватели и сотрудники" },
  { key: "programs", name: "Программы", icon: BookOpen, publicPath: "/programs", note: "Образовательные программы" },
  { key: "news", name: "Новости", icon: Newspaper, publicPath: "/news", note: "Новости и мероприятия" },
  { key: "documents", name: "Документы", icon: FileText, publicPath: "/documents", note: "Документы университета" },
];
type Store = Record<ModuleKey, Item[]>;
const empty = (): Store => ({ faculties: [], departments: [], staff: [], programs: [], news: [], documents: [] });
const inputClass = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

export default function AdminWorkspace({ seedFaculties, seedPrograms }: { seedFaculties: Item[]; seedPrograms: Item[] }) {
  const [items, setItems] = useState<Store>(() => ({ ...empty(), faculties: seedFaculties, programs: seedPrograms }));
  const [active, setActive] = useState<ModuleKey | "overview">("overview");
  const [query, setQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [editor, setEditor] = useState<{ module: ModuleKey; id?: string } | null>(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [notice, setNotice] = useState("");
  const [page, setPage] = useState(1);
  const current = modules.find((m) => m.key === active);
  const visible = useMemo(() => {
    if (active === "overview") return [];
    const q = query.trim().toLocaleLowerCase("ru");
    return items[active].filter((item) => `${item.title} ${item.subtitle}`.toLocaleLowerCase("ru").includes(q));
  }, [active, items, query]);
  const pageSize = 8;
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const rows = visible.slice((Math.min(page, pages) - 1) * pageSize, Math.min(page, pages) * pageSize);

  function goTo(key: ModuleKey | "overview") {
    setActive(key); setQuery(""); setPage(1); setNavOpen(false); setNotice("");
  }
  function edit(module: ModuleKey, item?: Item) {
    setTitle(item?.title ?? ""); setSubtitle(item?.subtitle ?? "");
    setEditor({ module, id: item?.id }); setNotice("");
  }
  function save() {
    if (!editor || !title.trim()) return;
    const id = editor.id ?? `draft-${Date.now()}`;
    setItems((old) => ({ ...old, [editor.module]: editor.id
      ? old[editor.module].map((x) => x.id === id ? { ...x, title: title.trim(), subtitle: subtitle.trim(), draft: true } : x)
      : [{ id, title: title.trim(), subtitle: subtitle.trim(), draft: true }, ...old[editor.module]] }));
    setEditor(null); setPage(1); setNotice("Изменение показано только в этом окне. В базу данных ничего не записано.");
  }
  function remove(module: ModuleKey, id: string) {
    if (!window.confirm("Удалить запись только из текущего демонстрационного состояния?")) return;
    setItems((old) => ({ ...old, [module]: old[module].filter((x) => x.id !== id) }));
    setNotice("Запись скрыта в демонстрации. Исходные данные сайта не изменились.");
  }
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-900 lg:flex">
      <aside className={`${navOpen ? "block" : "hidden"} fixed inset-0 z-40 overflow-y-auto bg-[#102b4e] text-white lg:sticky lg:top-0 lg:block lg:h-screen lg:w-72 lg:shrink-0`}>
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d5b780]">БГУ</p><p className="mt-1 text-xl font-bold">Панель управления</p></div>
          <button onClick={() => setNavOpen(false)} className="rounded-lg p-2 hover:bg-white/10 lg:hidden" aria-label="Закрыть меню"><X size={22}/></button>
        </div>
        <div className="px-4 py-6"><p className="px-3 pb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Разделы</p>
          <button onClick={() => goTo("overview")} className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${active === "overview" ? "bg-white text-[#102b4e]" : "text-white/80 hover:bg-white/10"}`}><LayoutDashboard size={19}/> Обзор</button>
          {modules.map(({ key, name, icon: Icon }) => <button key={key} onClick={() => goTo(key)} className={`mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${active === key ? "bg-white text-[#102b4e]" : "text-white/80 hover:bg-white/10"}`}><span className="flex items-center gap-3"><Icon size={19}/>{name}</span><span className="text-xs opacity-60">{items[key].length}</span></button>)}
        </div>
        <div className="px-6 pb-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowLeft size={17}/> На публичный сайт</Link></div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3"><button onClick={() => setNavOpen(true)} className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" aria-label="Открыть меню"><Menu size={24}/></button><div><p className="text-xs font-medium text-slate-500">Бишкекский государственный университет</p><h1 className="mt-1 text-xl font-bold text-[#102b4e] sm:text-2xl">{current?.name ?? "Обзор контента"}</h1></div></div>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900">ДЕМО</span>
        </header>
        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="mb-7 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950"><ShieldAlert className="mt-0.5 shrink-0" size={20}/><p><strong>Прототип без авторизации и backend.</strong> Все изменения существуют только до обновления страницы. Не вводите реальные пароли или конфиденциальные данные. Не публикуйте маршрут <code>/admin</code> в рабочей версии без серверной защиты.</p></div>
          {notice && <div role="status" className="mb-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-[#102b4e]"><Check size={20}/>{notice}</div>}
          {active === "overview" ? <>
            <div className="mb-8"><h2 className="text-2xl font-extrabold text-[#102b4e]">Управление содержимым сайта</h2><p className="mt-2 text-sm text-slate-600">Переходите между модулями, просматривайте предварительные данные и пробуйте формы редактирования.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{modules.map(({key,name,note,icon: Icon}) => <button key={key} onClick={() => goTo(key)} className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"><div className="mb-6 flex items-start justify-between"><span className="rounded-xl bg-blue-50 p-3 text-[#102b4e]"><Icon size={24}/></span><ArrowUpRight size={19} className="text-slate-400 group-hover:text-[#102b4e]"/></div><div className="text-3xl font-extrabold text-[#102b4e]">{items[key].length}</div><h3 className="mt-2 font-bold">{name}</h3><p className="mt-1 text-sm text-slate-500">{note}</p></button>)}</div>
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-bold text-[#102b4e]">Следующие подключения</h3><p className="mt-2 text-sm leading-7 text-slate-600">После появления backend: GET/POST/PATCH/DELETE API, вход администратора, роли редакторов, публикация контента, загрузка файлов, история изменений, статусы модерации и импорт материалов со старого сайта.</p></section>
          </> : <>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-sm text-slate-600">{current?.note}</p><p className="mt-1 text-xs text-slate-500">Показано записей: {visible.length} · данные для демонстрации</p></div><div className="flex flex-wrap gap-2"><Link href={current?.publicPath ?? "/"} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#102b4e] hover:bg-slate-50">Открыть сайт <ArrowUpRight size={16}/></Link><button onClick={() => edit(active)} className="inline-flex items-center gap-2 rounded-xl bg-[#102b4e] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"><Plus size={17}/> Добавить в демо</button></div></div>
            <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"><Search size={20} className="text-slate-400"/><input aria-label="Поиск по записям" placeholder="Поиск по названию или описанию" value={query} onChange={(e) => {setQuery(e.target.value);setPage(1);}} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"/></div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-5 py-4 text-sm font-bold text-[#102b4e]">Список материалов</div>{rows.length ? <div className="divide-y divide-slate-100">{rows.map((item) => <div key={item.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><p className="font-semibold text-slate-900">{item.title} {item.draft && <span className="ml-2 rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-900">Демо-изменение</span>}</p><p className="mt-1 text-sm text-slate-500">{item.subtitle || "Описание не заполнено"}</p></div><div className="flex shrink-0 gap-2"><button onClick={() => edit(active, item)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#102b4e] hover:bg-blue-50"><Pencil size={15}/>Изменить</button><button onClick={() => remove(active, item.id)} aria-label={`Скрыть ${item.title}`} className="rounded-lg border border-slate-200 p-2 text-rose-700 hover:bg-rose-50"><Trash2 size={17}/></button></div></div>)}</div> : <div className="px-6 py-16 text-center"><FileText size={34} className="mx-auto text-slate-300"/><p className="mt-3 font-medium">Записей нет</p><p className="mt-2 text-sm text-slate-500">Для этого раздела пока не подключены данные. Добавьте тестовую запись или дождитесь backend.</p></div>}</div>
            {pages > 1 && <div className="mt-5 flex items-center justify-center gap-4"><button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1,p-1))} className="rounded-lg border border-slate-200 bg-white p-2 disabled:opacity-40" aria-label="Назад"><ChevronLeft size={18}/></button><span className="text-sm">{Math.min(page,pages)} / {pages}</span><button disabled={page >= pages} onClick={() => setPage((p) => Math.min(pages,p+1))} className="rounded-lg border border-slate-200 bg-white p-2 disabled:opacity-40" aria-label="Вперёд"><ChevronRight size={18}/></button></div>}
          </>}
        </main>
      </div>
      {editor && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4" role="presentation"><div role="dialog" aria-modal="true" aria-labelledby="admin-editor-title" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Демонстрационная форма</p><h2 id="admin-editor-title" className="mt-2 text-2xl font-bold text-[#102b4e]">{editor.id ? "Редактировать запись" : "Новая запись"}</h2></div><button aria-label="Закрыть" onClick={() => setEditor(null)} className="rounded-lg p-2 hover:bg-slate-100"><X size={20}/></button></div><form onSubmit={(e) => { e.preventDefault(); save(); }} className="mt-6 space-y-5"><div><label htmlFor="admin-title" className="mb-2 block text-sm font-semibold">Название *</label><input id="admin-title" required maxLength={180} value={title} onChange={e => setTitle(e.target.value)} className={inputClass} placeholder="Название материала"/></div><div><label htmlFor="admin-subtitle" className="mb-2 block text-sm font-semibold">Дополнительная информация</label><textarea id="admin-subtitle" rows={3} maxLength={500} value={subtitle} onChange={e => setSubtitle(e.target.value)} className={inputClass} placeholder="Описание, уровень, категория..."/></div><p className="rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-900">Сохранение здесь меняет только интерфейс. Для настоящей публикации потребуется backend, авторизация и проверка прав.</p><div className="flex justify-end gap-3"><button type="button" onClick={() => setEditor(null)} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold">Отмена</button><button type="submit" className="rounded-xl bg-[#102b4e] px-4 py-2.5 text-sm font-semibold text-white">Сохранить в демо</button></div></form></div></div>}
    </div>
  );
}
