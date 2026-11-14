import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsArticleLocalized from "@/components/news/NewsArticleLocalized";
import { getNewsBySlug, newsRecords } from "@/lib/news-data";
export const instant = false;
export function generateStaticParams(){return newsRecords.map(x=>({slug:x.slug}));}
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const x=await getNewsBySlug(slug);return {title:x?`${x.title} | БГУ`:"Публикация не найдена | БГУ"};}
export default async function NewsArticle({params}:Props){const {slug}=await params;const item=await getNewsBySlug(slug);if(!item)notFound();return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><NewsArticleLocalized item={item}/><Footer/></div>}
