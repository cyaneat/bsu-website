import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProgramBySlug, programRecords } from "@/lib/program-data";

export const instant = false;
export function generateStaticParams() { return programRecords.map(p => ({slug: p.slug})); }
type Props = { params: Promise<{slug:string}> };
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const {slug} = await params;
 const p = await getProgramBySlug(slug);
 return {title: p ? `${p.title} — ${p.level} | БГУ` : "Программа не найдена | БГУ"};
}
export default async function ProgramPage({params}:Props) {
 const {slug} = await params;
 const p = await getProgramBySlug(slug);
 if (!p) notFound();
 return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main>
 <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap gap-3 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><span>/</span><Link href="/programs" className="hover:underline">Программы</Link></div><p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#d5b780]">{p.level} {p.code ? `· ${p.code}` : ""}</p><h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{p.title}</h1><p className="mt-5 text-blue-100">{p.facultyName}</p></div></section>
 <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]"><div className="space-y-7"><section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><div className="flex items-center gap-3"><BookOpen size={26} className="text-[#102b4e]"/><h2 className="text-2xl font-bold text-[#102b4e]">О программе</h2></div><p className="mt-5 leading-7 text-slate-700">{p.description ?? "Сведения об учебном плане и содержании программы будут добавлены после согласования с подразделением БГУ."}</p>{p.profile && <p className="mt-4 leading-7"><span className="font-semibold">Профиль: </span>{p.profile}</p>}</section>
 <Link href={`/faculties/${p.facultySlug}`} className="block rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-[#102b4e] hover:border-blue-300">Перейти на страницу факультета →</Link><Link href="/programs" className="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={18}/>Все программы</Link></div>
 <aside className="lg:self-start"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-2 font-bold text-[#102b4e]"><GraduationCap size={23}/>Основные сведения</div><dl className="mt-5 space-y-4 text-sm"><div><dt className="text-slate-500">Уровень</dt><dd className="mt-1 font-semibold">{p.level}</dd></div>{p.code && <div><dt className="text-slate-500">Код направления</dt><dd className="mt-1 font-semibold">{p.code}</dd></div>}{p.duration && <div><dt className="text-slate-500">Срок обучения (по источнику)</dt><dd className="mt-1 font-semibold">{p.duration}</dd></div>}{p.languages && <div><dt className="text-slate-500">Языки обучения</dt><dd className="mt-1 font-semibold">{p.languages}</dd></div>}</dl><a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#102b4e] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-900">Проверить на сайте БГУ <ExternalLink size={16}/></a><p className="mt-4 text-xs leading-5 text-slate-500">Данные предварительные. Условия текущего приёма уточняйте в университете.</p></div></aside></div>
 </main><Footer/></div>;
}
