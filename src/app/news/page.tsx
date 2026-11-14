import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsIndexLocalized from "@/components/news/NewsIndexLocalized";
import { getNews } from "@/lib/news-data";
export const metadata:Metadata={title:"Новости и мероприятия | БГУ",description:"Новости, научные события и мероприятия Бишкекского государственного университета"};
export default async function NewsPage(){const items=await getNews();return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><NewsIndexLocalized items={items}/><Footer/></div>}
