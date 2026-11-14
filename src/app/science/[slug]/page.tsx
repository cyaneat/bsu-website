import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import ScienceShell from "@/components/science/ScienceShell";
import { getScienceSection, scienceSections } from "@/lib/science-data";

export const instant = false;
export function generateStaticParams(){return scienceSections.map(s=>({slug:s.slug}));}
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const s=getScienceSection(slug);return {title:s?`${s.title} | БГУ`:"Раздел не найден | БГУ",description:s?.teaser};}
export default async function ScienceDetailPage({params}:Props){const {slug}=await params;const s=getScienceSection(slug);if(!s) notFound();return <ScienceShell title={s.title} description={s.teaser}>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">Общая информация</h2><div className="mt-5 space-y-4">{s.body.map(p=><p key={p} className="leading-7 text-slate-700">{p}</p>)}</div></section>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">Официальные материалы</h2><div className="mt-5 grid gap-3">{s.sources.map(link=><a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300"><div><h3 className="font-semibold text-[#102b4e]">{link.label}</h3>{link.description&&<p className="mt-1 text-sm text-slate-500">{link.description}</p>}</div><ExternalLink size={17} className="shrink-0 text-slate-500"/></a>)}</div><p className="mt-5 text-xs leading-5 text-slate-500">Материалы размещены на действующем сайте БГУ. При миграции будут сохранены ссылки на источники и проверена полнота файлов.</p></section>
 </ScienceShell>}
