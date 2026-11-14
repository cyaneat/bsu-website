"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowUpRight, BookOpen, Building2, Check, ChevronLeft, ChevronRight,
  ClipboardList, Eye, FileText, LayoutDashboard, Menu, Newspaper, Pencil, Plus,
  Search, ShieldAlert, Trash2, Users, X,
} from "lucide-react";

type ModuleKey = "faculties" | "departments" | "staff" | "programs" | "news" | "documents";
type RecordStatus = "draft" | "review" | "published";
type Item = {
  id: string; title: string; subtitle: string; source?: string;
  fields?: Record<string, string>; status?: RecordStatus; demo?: boolean;
};
type Module = { key: ModuleKey; name: string; icon: typeof Building2; publicPath: string; note: string };
type FormField = { key: string; label: string; kind?: "text" | "textarea" | "date" | "url" | "select"; options?: string[]; placeholder?: string };
const modules: Module[] = [
  { key: "faculties", name: "Факультеты", icon: Building2, publicPath: "/faculties", note: "Подразделения университета" },
  { key: "departments", name: "Кафедры", icon: ClipboardList, publicPath: "/departments", note: "Кафедры и их факультеты" },
  { key: "staff", name: "Сотрудники", icon: Users, publicPath: "/staff", note: "Преподаватели и сотрудники" },
  { key: "programs", name: "Программы", icon: BookOpen, publicPath: "/programs", note: "Образовательные программы" },
  { key: "news", name: "Новости", icon: Newspaper, publicPath: "/news", note: "Новости и мероприятия" },
  { key: "documents", name: "Документы", icon: FileText, publicPath: "/documents", note: "Документы университета" },
];
const fieldsByModule: Record<ModuleKey, FormField[]> = {
  faculties: [
    {key:"category",label:"Направление факультета"},
    {key:"leader",label:"Декан / директор"},
    {key:"phone",label:"Рабочий телефон"},
    {key:"email",label:"Рабочая электронная почта"},
    {key:"description",label:"О факультете",kind:"textarea"},
  ],
  departments: [
    {key:"faculty",label:"Факультет"},
    {key:"head",label:"Заведующий кафедрой"},
    {key:"phone",label:"Рабочий телефон"},
    {key:"description",label:"О кафедре",kind:"textarea"},
  ],
  staff: [
    {key:"position",label:"Должность"},
    {key:"faculty",label:"Факультет"},
    {key:"department",label:"Кафедра"},
    {key:"email",label:"Рабочая электронная почта"},
    {key:"publications",label:"Научная деятельность",kind:"textarea"},
  ],
  programs: [
    {key:"level",label:"Уровень",kind:"select",options:["Бакалавриат","Магистратура","PhD","Другое"]},
    {key:"faculty",label:"Факультет"},
    {key:"code",label:"Код направления"},
    {key:"duration",label:"Срок обучения"},
    {key:"description",label:"Описание программы",kind:"textarea"},
  ],
  news: [
    {key:"category",label:"Категория",kind:"select",options:["Новости","Мероприятия","Наука","Международная деятельность","Объявления"]},
    {key:"date",label:"Дата публикации",kind:"date"},
    {key:"description",label:"Краткий анонс",kind:"textarea"},
    {key:"content",label:"Текст публикации",kind:"textarea"},
    {key:"image",label:"URL изображения (демо)",kind:"url",placeholder:"https://..."},
  ],
  documents: [
    {key:"category",label:"Категория",kind:"select",options:["Положения","Приказы","Учебные документы","Отчёты","Абитуриентам","Другое"]},
    {key:"date",label:"Дата документа",kind:"date"},
    {key:"number",label:"Номер документа"},
    {key:"description",label:"Описание",kind:"textarea"},
    {key:"file",label:"Ссылка на файл (демо)",kind:"url",placeholder:"https://.../document.pdf"},
  ],
};
const inputClass = "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#102b4e] focus:ring-2 focus:ring-blue-100";
const empty = (): Record<ModuleKey, Item[]> => ({ faculties:[],departments:[],staff:[],programs:[],news:[],documents:[] });
const labels: Record<RecordStatus,string> = {draft:"Черновик",review:"На проверке",published:"Опубликовано в источнике"};

export default function AdminWorkspace({seedFaculties,seedPrograms}:{seedFaculties:Item[];seedPrograms:Item[]}) {
  const [items,setItems] = useState<Record<ModuleKey,Item[]>>(() => ({...empty(),faculties:seedFaculties,programs:seedPrograms}));
  const [active,setActive] = useState<ModuleKey|"overview">("overview");
  const [query,setQuery] = useState("");
  const [navOpen,setNavOpen] = useState(false);
  const [editor,setEditor] = useState<{module:ModuleKey;id?:string}|null>(null);
  const [form,setForm] = useState<Record<string,string>>({});
  const [preview,setPreview] = useState<Item|null>(null);
  const [notice,setNotice] = useState("");
  const [page,setPage] = useState(1);
  const current = modules.find(m => m.key===active);
  const visible = useMemo(() => active==="overview" ? [] : items[active].filter(i =>
    `${i.title} ${i.subtitle} ${Object.values(i.fields??{}).join(" ")}`.toLocaleLowerCase("ru").includes(query.trim().toLocaleLowerCase("ru"))
  ),[active,items,query]);
  const pageSize = 8;
  const pages = Math.max(1,Math.ceil(visible.length/pageSize));
  const currentPage = Math.min(page,pages);
  const rows = visible.slice((currentPage-1)*pageSize,currentPage*pageSize);
  function goTo(key:ModuleKey|"overview") {setActive(key);setPage(1);setQuery("");setNavOpen(false);setNotice("");}
  function edit(module:ModuleKey,item?:Item) {
    setForm({title:item?.title??"",subtitle:item?.subtitle??"",...(item?.fields??{}),status:item?.demo?(item.status??"draft"):"draft"});
    setEditor({module,id:item?.id});setNotice("");
  }
  function save() {
    if(!editor||!form.title?.trim())return;
    const {title,subtitle,status,...fields}=form;
    const payload:Item={id:editor.id??`demo-${Date.now()}`,title:title.trim(),subtitle:(subtitle??"").trim(),fields,status:status==="review"?"review":"draft",demo:true};
    setItems(old=>({...old,[editor.module]:editor.id
      ?old[editor.module].map(x=>x.id===editor.id?{...x,...payload,source:x.source}:x)
      :[payload,...old[editor.module]]}));
    setEditor(null);setPage(1);
    setNotice("Демонстрационный черновик обновлён только в памяти браузера. На сайт и сервер ничего не отправлено.");
  }
  function remove(module:ModuleKey,id:string) {
    if(!window.confirm("Скрыть запись только в текущем демо-сеансе?"))return;
    setItems(old=>({...old,[module]:old[module].filter(x=>x.id!==id)}));
    setNotice("Запись скрыта только в демонстрации. Исходные данные не изменены.");
  }
  return <div className="min-h-screen bg-[#f3f6fb] text-slate-900 lg:flex">
    <aside className={`${navOpen?"block":"hidden"} fixed inset-0 z-40 overflow-y-auto bg-[#102b4e] text-white lg:sticky lg:top-0 lg:block lg:h-screen lg:w-72 lg:shrink-0`}>
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-6"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d5b780]">БГУ</p><p className="mt-1 text-xl font-bold">Панель управления</p></div><button type="button" onClick={()=>setNavOpen(false)} className="rounded-lg p-2 hover:bg-white/10 lg:hidden" aria-label="Закрыть меню"><X size={22}/></button></div>
      <div className="px-4 py-6"><p className="px-3 pb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Разделы</p><button type="button" onClick={()=>goTo("overview")} className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm ${active==="overview"?"bg-white text-[#102b4e]":"text-white/80 hover:bg-white/10"}`}><LayoutDashboard size={19}/> Обзор</button>
      {modules.map(({key,name,icon:Icon})=><button type="button" key={key} onClick={()=>goTo(key)} className={`mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm ${active===key?"bg-white text-[#102b4e]":"text-white/80 hover:bg-white/10"}`}><span className="flex items-center gap-3"><Icon size={19}/>{name}</span><span className="text-xs opacity-60">{items[key].length}</span></button>)}</div>
      <div className="px-6 pb-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowLeft size={17}/> На публичный сайт</Link></div>
    </aside>
    <div className="min-w-0 flex-1"><header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8"><div className="flex items-center gap-3"><button type="button" onClick={()=>setNavOpen(true)} className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" aria-label="Открыть меню"><Menu size={24}/></button><div><p className="text-xs font-medium text-slate-500">Бишкекский государственный университет</p><h1 className="mt-1 text-xl font-bold text-[#102b4e] sm:text-2xl">{current?.name??"Обзор контента"}</h1></div></div><span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900">ДЕМО</span></header>
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8"><div className="mb-7 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950"><ShieldAlert className="mt-0.5 shrink-0" size={20}/><p><strong>Без авторизации и backend.</strong> Ни один черновик не сохраняется и не публикуется. Не вводите реальные пароли и конфиденциальные данные. Доступ к <code>/admin</code> на публичном сервере необходимо закрыть до реализации серверной защиты.</p></div>
      {notice&&<div role="status" className="mb-6 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-[#102b4e]"><Check size={20}/>{notice}</div>}
      {active==="overview"?<><h2 className="mb-2 text-2xl font-extrabold text-[#102b4e]">Управление содержимым сайта</h2><p className="mb-7 text-sm text-slate-600">Откройте нужный раздел и протестируйте формы ввода, черновики и просмотр.</p><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{modules.map(({key,name,note,icon:Icon})=><button type="button" key={key} onClick={()=>goTo(key)} className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:border-blue-200 hover:shadow-md"><div className="mb-6 flex items-center justify-between"><span className="rounded-xl bg-blue-50 p-3 text-[#102b4e]"><Icon size={24}/></span><ArrowUpRight size={19} className="text-slate-400"/></div><div className="text-3xl font-extrabold text-[#102b4e]">{items[key].length}</div><h3 className="mt-2 font-bold">{name}</h3><p className="mt-1 text-sm text-slate-500">{note}</p></button>)}</div><div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">Следующий этап — подключение Swagger/OpenAPI, авторизации, ролевого доступа, сохранения и файлового хранилища.</div></>:<>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-sm text-slate-600">{current?.note}</p><p className="mt-1 text-xs text-slate-500">{visible.length} записей · демо</p></div><div className="flex flex-wrap gap-2"><Link href={current?.publicPath??"/"} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#102b4e]">Публичная страница <ArrowUpRight size={16}/></Link><button type="button" onClick={()=>edit(active)} className="inline-flex items-center gap-2 rounded-xl bg-[#102b4e] px-4 py-2.5 text-sm font-semibold text-white"><Plus size={17}/>Добавить в демо</button></div></div>
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"><Search size={20} className="text-slate-400"/><input aria-label="Поиск" placeholder="Поиск по записям" value={query} onChange={e=>{setQuery(e.target.value);setPage(1);}} className="min-w-0 flex-1 bg-transparent text-sm outline-none"/></div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-5 py-4 text-sm font-bold text-[#102b4e]">Материалы</div>{rows.length?<div className="divide-y divide-slate-100">{rows.map(item=><div key={item.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-slate-500">{item.subtitle||"Описание не заполнено"}</p><span className={`mt-2 inline-block rounded-md px-2 py-1 text-xs font-semibold ${item.demo?"bg-amber-100 text-amber-900":"bg-slate-100 text-slate-600"}`}>{item.demo?labels[item.status??"draft"]:"Исходная запись · демо"}</span></div><div className="flex shrink-0 flex-wrap gap-2"><button type="button" onClick={()=>setPreview(item)} className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm"><Eye size={15}/>Просмотр</button><button type="button" onClick={()=>edit(active,item)} className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm"><Pencil size={15}/>Изменить</button><button type="button" onClick={()=>remove(active,item.id)} aria-label={`Скрыть ${item.title}`} className="rounded-lg border p-2 text-rose-700"><Trash2 size={17}/></button></div></div>)}</div>:<div className="px-6 py-16 text-center"><FileText size={34} className="mx-auto text-slate-300"/><p className="mt-3 font-medium">Записей нет</p><p className="mt-2 text-sm text-slate-500">Добавьте демонстрационную запись.</p></div>}</div>
      {pages>1&&<div className="mt-5 flex items-center justify-center gap-4"><button type="button" disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))} aria-label="Предыдущая страница" className="rounded-lg border bg-white p-2 disabled:opacity-40"><ChevronLeft size={18}/></button><span className="text-sm">{currentPage} / {pages}</span><button type="button" disabled={page>=pages} onClick={()=>setPage(p=>Math.min(pages,p+1))} aria-label="Следующая страница" className="rounded-lg border bg-white p-2 disabled:opacity-40"><ChevronRight size={18}/></button></div>}
      </>}</main></div>
    {editor&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"><div role="dialog" aria-modal="true" aria-labelledby="form-title" className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Только демонстрация</p><h2 id="form-title" className="mt-2 text-2xl font-bold text-[#102b4e]">{editor.id?"Редактировать":"Добавить"} · {modules.find(m=>m.key===editor.module)?.name}</h2></div><button type="button" aria-label="Закрыть" onClick={()=>setEditor(null)} className="p-2"><X size={22}/></button></div>
      <form onSubmit={e=>{e.preventDefault();save();}} className="mt-6 space-y-4"><label className="block text-sm font-semibold">Название *<input required maxLength={180} value={form.title??""} onChange={e=>setForm(f=>({...f,title:e.target.value}))} className={`mt-1 ${inputClass}`} placeholder="Название материала"/></label><label className="block text-sm font-semibold">Краткая подпись<textarea rows={2} maxLength={500} value={form.subtitle??""} onChange={e=>setForm(f=>({...f,subtitle:e.target.value}))} className={`mt-1 ${inputClass}`}/></label>
      <div className="grid gap-4 sm:grid-cols-2">{fieldsByModule[editor.module].map(field=><label key={field.key} className={`block text-sm font-semibold ${field.kind==="textarea"?"sm:col-span-2":""}`}>{field.label}{field.kind==="textarea"?<textarea rows={4} maxLength={4000} className={`mt-1 ${inputClass}`} value={form[field.key]??""} onChange={e=>setForm(f=>({...f,[field.key]:e.target.value}))}/>:field.kind==="select"?<select className={`mt-1 ${inputClass}`} value={form[field.key]??""} onChange={e=>setForm(f=>({...f,[field.key]:e.target.value}))}><option value="">Выберите</option>{field.options?.map(opt=><option key={opt} value={opt}>{opt}</option>)}</select>:<input type={field.kind??"text"} className={`mt-1 ${inputClass}`} value={form[field.key]??""} placeholder={field.placeholder} onChange={e=>setForm(f=>({...f,[field.key]:e.target.value}))}/>}</label>)}</div>
      <label className="block text-sm font-semibold">Демонстрационный статус<select value={form.status??"draft"} onChange={e=>setForm(f=>({...f,status:e.target.value}))} className={`mt-1 ${inputClass}`}><option value="draft">Черновик</option><option value="review">На проверке</option></select></label><p className="rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-900">Ссылка на файл или изображение здесь — только текстовое поле. Файлы не загружаются, данные не сохраняются и не публикуются. Фактическую публикацию обеспечит защищённый backend.</p><div className="flex justify-end gap-3"><button type="button" onClick={()=>setEditor(null)} className="rounded-xl border px-4 py-2.5 text-sm font-semibold">Отмена</button><button type="submit" className="rounded-xl bg-[#102b4e] px-4 py-2.5 text-sm font-semibold text-white">Сохранить в демо</button></div></form></div></div>}
    {preview&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"><div role="dialog" aria-modal="true" aria-labelledby="preview-title" className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-amber-700">Предварительный просмотр · демо</p><h2 id="preview-title" className="mt-2 text-xl font-bold text-[#102b4e]">{preview.title}</h2></div><button type="button" aria-label="Закрыть" onClick={()=>setPreview(null)}><X size={22}/></button></div><p className="mt-3 text-sm text-slate-600">{preview.subtitle}</p><dl className="mt-5 space-y-4">{Object.entries(preview.fields??{}).filter(([,v])=>v).map(([k,v])=><div key={k}><dt className="text-xs font-bold uppercase text-slate-500">{k}</dt><dd className="mt-1 whitespace-pre-wrap break-words text-sm">{v}</dd></div>)}</dl><button type="button" onClick={()=>setPreview(null)} className="mt-6 rounded-xl bg-[#102b4e] px-5 py-2.5 text-sm font-semibold text-white">Закрыть</button></div></div>}
  </div>;
}
