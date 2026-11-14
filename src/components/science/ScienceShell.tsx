import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { scienceSections } from "@/lib/science-data";
import type { ReactNode } from "react";

export default function ScienceShell({title,description,children}:{title:string;description:string;children:ReactNode}) {
 return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main>
  <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl">
   <nav aria-label="Навигационная цепочка" className="flex flex-wrap gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><span>/</span><Link href="/science" className="hover:underline">Наука</Link>{title!=="Научная деятельность"&&<><span>/</span><span aria-current="page" className="text-white">{title}</span></>}</nav>
   <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#d5b780]">Наука БГУ</p>
   <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-3xl leading-7 text-blue-100">{description}</p>
  </div></section>
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px]"><div className="min-w-0 space-y-6">{children}<Link href="/science" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={17}/>Раздел «Наука»</Link></div>
  <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-28"><h2 className="font-bold text-[#102b4e]">Разделы науки</h2><div className="mt-4 space-y-1">{scienceSections.map(s=><Link key={s.slug} href={`/science/${s.slug}`} className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#102b4e]"><span>{s.title}</span><ArrowRight size={15} className="shrink-0"/></Link>)}</div><a href="https://bsu.kg/ru/category/nauka/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-[#102b4e] hover:underline">Научная лента старого сайта <ExternalLink size={15}/></a></aside>
  </div>
 </main><Footer/></div>;
}
