import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentDirectory from "@/components/documents/DocumentDirectory";
import { getDocuments } from "@/lib/document-data";

export const metadata: Metadata = {
  title: "Документы | БГУ",
  description: "Каталог нормативных и информационных документов Бишкекского государственного университета.",
};

export default async function DocumentsPage() {
  const documents = await getDocuments();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-6 flex items-center gap-2 text-sm text-blue-100">
              <Link href="/" className="hover:underline">Главная</Link><ChevronRight size={16}/><span aria-current="page" className="text-white">Документы</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">Информация и нормативная база</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Документы университета</h1>
            <p className="mt-5 max-w-2xl leading-7 text-blue-100">Найдите нужные положения, правила и информационные материалы. Пока документы открываются на прежнем официальном сайте БГУ.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <DocumentDirectory documents={documents}/>
          <p className="mt-9 text-xs leading-6 text-slate-500">Предварительный каталог открытых источников, а не полный реестр действующих нормативных актов. Уточняйте редакции и актуальность у подразделений БГУ.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
