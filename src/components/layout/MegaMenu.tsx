"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { dictionaries, type Locale, type TranslationKey } from "@/lib/i18n";

export type NavLink = { label: string; href?: string; description?: string };
export type NavGroup = { title: string; links: NavLink[] };
export type NavSection = { title: string; summary: string; groups: NavGroup[] };
type NavigationItem = { key: TranslationKey; href?: string };
type NavigationGroup = { key: TranslationKey; links: NavigationItem[] };
type NavigationSection = { key: TranslationKey; summaryKey: TranslationKey; groups: NavigationGroup[] };
const specification: NavigationSection[] = [
  { key: "aboutNav", summaryKey: "aboutNavDesc", groups: [
    { key: "aboutGroup", links: [
      {key:"aboutUniversity",href:"/about"},{key:"history",href:"/about/history"},
      {key:"mission",href:"/about/mission"},{key:"leadership",href:"/about/leadership"},
      {key:"academicCouncil"},{key:"staff",href:"/staff"}]},
    { key: "structure", links: [
      {key:"faculties",href:"/faculties"},{key:"departments",href:"/departments"},
      {key:"adminUnits"},{key:"contacts",href:"/contacts"}]}
  ]},
  { key: "educationNav", summaryKey:"educationNavDesc", groups:[
    {key:"programsGroup",links:[{key:"educationInBSU",href:"/#education"},{key:"bachelor",href:"/programs"},{key:"master",href:"/programs"},{key:"phd",href:"/programs"}]},
    {key:"studyProcess",links:[{key:"programCatalog",href:"/programs"},{key:"calendar"},{key:"schedule"}]}
  ]},
  {key:"admissionsNav",summaryKey:"admissionsNavDesc",groups:[
    {key:"admissionsGroup",links:[{key:"areas",href:"/programs"},{key:"admissionsOffice",href:"/admissions"},{key:"admissionsRules",href:"/admissions/rules"},{key:"tuition",href:"/admissions/tuition"}]},
    {key:"extras",links:[{key:"international",href:"/admissions/international"},{key:"faq",href:"/admissions/faq"}]}
  ]},
  {key:"scienceNav",summaryKey:"scienceNavDesc",groups:[
    {key:"scienceGroup",links:[{key:"scienceOverview",href:"/science"},{key:"research",href:"/science/research"},{key:"conferences",href:"/science/conferences"},{key:"publications",href:"/science/publications"},{key:"councils",href:"/science/dissertation-councils"}]},
    {key:"current",links:[{key:"newsEvents",href:"/news"},{key:"internationalProjects"}]}
  ]},
  {key:"studentsNav",summaryKey:"studentsNavDesc",groups:[
    {key:"servicesGroup",links:[{key:"digitalServices",href:"/#services"},{key:"library",href:"/#services"},{key:"scheduleShort",href:"/#services"},{key:"documents",href:"/documents"}]},
    {key:"campusGroup",links:[{key:"uniNews",href:"/news"},{key:"clubs"},{key:"dorms"}]}
  ]}
];
export function getNavigation(locale: Locale): NavSection[] {
  const tr = dictionaries[locale];
  return specification.map(section => ({
    title: tr[section.key], summary: tr[section.summaryKey],
    groups: section.groups.map(group => ({title:tr[group.key],links:group.links.map(link=>({label:tr[link.key],href:link.href}))})),
  }));
}
// Keep the previous export for any consumers outside Header.
export const navigation = getNavigation("ru");

export default function MegaMenu() {
  const {locale,t} = useLocale();
  const sections = getNavigation(locale);
  const [active, setActive] = useState<number | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const current = active === null ? null : sections[active];
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) { if (event.key === "Escape") setActive(null); }
    function closeOnOutside(event: PointerEvent) { if (rootRef.current && !rootRef.current.contains(event.target as Node)) setActive(null); }
    document.addEventListener("keydown",closeOnEscape);
    document.addEventListener("pointerdown",closeOnOutside);
    return () => { document.removeEventListener("keydown",closeOnEscape);document.removeEventListener("pointerdown",closeOnOutside); };
  }, []);
  return <nav ref={rootRef} aria-label="Main navigation" className="relative hidden lg:flex lg:items-center">
    {sections.map((section,index)=><button type="button" key={section.title} aria-expanded={active===index}
      aria-controls="bsu-mega-panel" onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)}
      onClick={()=>setActive(active===index?null:index)}
      className={`flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${active===index?"bg-[#edf3fa] text-[#102b4e]":"text-slate-700 hover:bg-slate-100"}`}>
      {section.title}<ChevronDown size={15} aria-hidden="true"/>
    </button>)}
    {current&&<div id="bsu-mega-panel" onMouseLeave={()=>setActive(null)}
      className="absolute left-1/2 top-full z-50 w-[min(900px,calc(100vw-40px))] -translate-x-1/2 rounded-b-2xl border border-slate-200 bg-white p-7 shadow-2xl">
      <div className="mb-5 border-b border-slate-100 pb-5"><div className="text-xl font-bold text-[#102b4e]">{current.title}</div><p className="mt-1 text-sm text-slate-500">{current.summary}</p></div>
      <div className="grid grid-cols-2 gap-8">{current.groups.map(group=><div key={group.title}>
        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#a7864c]">{group.title}</div>
        <div className="space-y-1">{group.links.map(link=>link.href?<Link key={link.label} href={link.href} onClick={()=>setActive(null)}
          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-[#f3f6fa] hover:text-[#102b4e]">
          <span>{link.label}</span><ArrowRight size={15} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true"/></Link>:
          <div key={link.label} className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-400"><span>{link.label}</span><span className="text-[10px]">{t("soon")}</span></div>)}</div>
      </div>)}</div>
    </div>}
  </nav>;
}
