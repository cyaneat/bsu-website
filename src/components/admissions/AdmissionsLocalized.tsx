"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, CheckCircle2, ExternalLink, GraduationCap, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { admissionSources } from "@/lib/admissions-data";
import { adText, type AdmissionKey } from "@/lib/admissions-i18n";

type View = "overview" | "rules" | "documents" | "international" | "tuition" | "faq";
const entries: {view:View; href:string; title:AdmissionKey;desc:AdmissionKey}[] = [
  {view:"overview",href:"/admissions",title:"overview",desc:"overviewDesc"},
  {view:"documents",href:"/admissions/documents",title:"documents",desc:"documentsDesc"},
  {view:"rules",href:"/admissions/rules",title:"rules",desc:"rulesDesc"},
  {view:"international",href:"/admissions/international",title:"international",desc:"internationalDesc"},
  {view:"tuition",href:"/admissions/tuition",title:"tuition",desc:"tuitionDesc"},
  {view:"faq",href:"/admissions/faq",title:"faq",desc:"faqDesc"},
];
const docDomestic:AdmissionKey[]=["ort","eduDoc","secondDegree","photos","passport","military"];
const docForeign:AdmissionKey[]=["eduDoc","secondDegree","equivalence","photos","passport"];
const ext="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline";
function DocItems({items,t}:{items:AdmissionKey[];t:(key:AdmissionKey)=>string}){
  return <ul className="mt-5 space-y-3">{items.map(k=><li key={k} className="flex gap-3 text-sm leading-7 text-slate-700"><CheckCircle2 size={19} className="mt-1 shrink-0 text-[#a7864c]"/>{t(k)}</li>)}</ul>;
}
export default function AdmissionsLocalized({view}:{view:View}){
 const {locale}=useLocale();const t=(key:AdmissionKey)=>adText(locale,key);
 const selected=entries.find(e=>e.view===view)!;
 const cards=entries.filter(e=>e.view!=="overview");
 return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><main>
  <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20"><div className="mx-auto max-w-7xl">
   <nav aria-label={t("sections")} className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-100"><Link href="/">{t("home")}</Link><ChevronRight size={15}/>{view!=="overview"&&<><Link href="/admissions">{t("admissions")}</Link><ChevronRight size={15}/></>}<span aria-current="page" className="text-white">{t(selected.title)}</span></nav>
   <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#d5b780]">{t("admissionTag")}</p>
   <h1 className="mt-3 max-w-4xl break-words text-3xl font-extrabold leading-tight sm:text-5xl">{t(selected.title)}</h1>
   <p className="mt-5 max-w-2xl leading-7 text-blue-100">{t(selected.desc)}</p>
  </div></section>
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
   <div className="min-w-0 space-y-7">
    {view==="overview"&&<>
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t("overview")}</h2><ol className="mt-6 space-y-4">{([ ["chooseProgram","programsDesc","/programs"],["checkRules","rulesDesc","/admissions/rules"],["prepareDocs","documentsDesc","/admissions/documents"],["apply","applyText","/contacts"]] as const).map(([title,desc,href],i)=><li key={title} className="flex gap-4 rounded-xl bg-slate-50 p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102b4e] font-bold text-white">{i+1}</span><div><h3 className="font-bold">{t(title)}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{t(desc)}</p><Link href={href} className={ext}>{t("go")} <ArrowRight size={15}/></Link></div></li>)}</ol></section>
      <section><h2 className="text-2xl font-bold text-[#102b4e]">{t("links")}</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{cards.map(e=><Link href={e.href} key={e.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"><h3 className="font-bold text-[#102b4e]">{t(e.title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{t(e.desc)}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">{t("more")} <ArrowRight size={16}/></span></Link>)}</div></section>
      <Link className={ext} href="/programs">{t("programs")} <ArrowRight size={16}/></Link>
    </>}
    {view==="rules"&&<>
     <div role="note" className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><Info size={20} className="mb-2"/>{t("ruleWarning")}</div>
     <div className="grid gap-4 sm:grid-cols-2">{([ ["bachelor","bachelorRule"],["master","masterRule"],["international","foreignRule"],["college","collegeRule"]] as const).map(([title,desc])=><section key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-[#102b4e]">{t(title)}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{t(desc)}</p></section>)}</div>
     <div className="flex flex-wrap gap-4"><a href={admissionSources.rules} target="_blank" rel="noopener noreferrer" className={ext}>{t("officialRules")} <ExternalLink size={16}/></a><a href={admissionSources.college} target="_blank" rel="noopener noreferrer" className={ext}>{t("collegeRules")} <ExternalLink size={16}/></a></div>
    </>}
    {view==="documents"&&<><section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t("domestic")}</h2><DocItems items={docDomestic} t={t}/></section><section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t("foreign")}</h2><DocItems items={docForeign} t={t}/></section><p className="text-sm leading-7 text-slate-600">{t("docsHint")}</p><a href={admissionSources.documents} target="_blank" rel="noopener noreferrer" className={ext}>{t("officialList")} <ExternalLink size={17}/></a></>}
    {view==="international"&&<><section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t("international")}</h2><ol className="mt-6 list-decimal space-y-4 pl-6 text-sm leading-7 text-slate-700">{(["step1","step2","step3","step4","step5"] as const).map(k=><li key={k}>{t(k)}</li>)}</ol></section><div className="flex flex-wrap gap-3"><Link className={ext} href="/programs">{t("chooseField")}</Link><Link className={ext} href="/admissions/documents">{t("documents")}</Link></div><a className={ext} href={admissionSources.international} target="_blank" rel="noopener noreferrer">{t("internationalOriginal")} <ExternalLink size={16}/></a></>}
    {view==="tuition"&&<><section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#102b4e]">{t("feeUnknown")}</h2><p className="mt-4 leading-7 text-slate-700">{t("fee1")}</p><p className="mt-4 leading-7 text-slate-700">{t("fee2")}</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contacts" className={ext}>{t("contact")}</Link><Link href="/programs" className={ext}>{t("chooseField")}</Link></div></section><a href={admissionSources.contact} className={ext} target="_blank" rel="noopener noreferrer">{t("contact")} <ExternalLink size={16}/></a></>}
    {view==="faq"&&<div className="space-y-4">{([ ["q1","a1","/programs","programs"],["q2","a2","/admissions/documents","documents"],["q3","a3","/admissions/rules","rules"],["q4","a4","/admissions/tuition","tuition"],["q5","a5","/admissions/international","international"]] as const).map(([q,a,href,label])=><details key={q} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-[#102b4e]">{t(q)}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{t(a)}</p><Link href={href} className="mt-3 inline-block text-sm font-semibold text-[#102b4e] underline">{t(label)}</Link></details>)}</div>}
    <p className="text-xs leading-6 text-slate-500">{t("notice")}</p>
   </div>
   <aside className="space-y-5 self-start lg:sticky lg:top-28"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="flex items-center gap-2 text-lg font-bold text-[#102b4e]"><GraduationCap size={20}/>{t("sections")}</h2><nav aria-label={t("sections")} className="mt-4 space-y-1">{entries.map(e=><Link key={e.href} href={e.href} aria-current={view===e.view?"page":undefined} className={`flex justify-between gap-2 rounded-lg px-3 py-2.5 text-sm hover:bg-blue-50 ${view===e.view?"bg-blue-50 font-bold text-[#102b4e]":"text-slate-700"}`}>{t(e.title)} <ChevronRight size={16} className="shrink-0"/></Link>)}</nav></section><section className="rounded-2xl bg-[#e9eef5] p-5"><h2 className="font-semibold text-[#102b4e]">{t("helpTitle")}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{t("helpText")}</p><Link href="/contacts" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#102b4e] hover:underline">{t("contact")} <ArrowUpRight size={16}/></Link></section></aside>
  </div></main><Footer/></div>;
}
