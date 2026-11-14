import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { documents, getDocumentBySlug } from "@/lib/document-data";

// Generate all known documents at build time for Next.js Cache Components.
export function generateStaticParams() { return documents.map((document) => ({ slug: document.slug })); }
export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const document = await getDocumentBySlug(slug);
  return { title: document ? `${document.title} | БГУ` : "Документ не найден | БГУ", description: document?.description };
}

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;
  const document = await getDocumentBySlug(slug);
  if (!document) notFound();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="flex flex-wrap gap-2 text-sm text-blue-100">
              <Link href="/" className="hover:underline">Главная</Link><span>/</span>
              <Link href="/documents" className="hover:underline">Документы</Link><span>/</span><span aria-current="page" className="text-white">{document.category}</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#d5b780]">{document.category}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{document.title}</h1>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3"><FileText size={25} className="text-[#102b4e]"/><h2 className="text-2xl font-bold text-[#102b4e]">Описание</h2></div>
              <p className="mt-5 leading-7 text-slate-700">{document.description}</p>
              <p className="mt-5 text-sm leading-6 text-slate-500">В данном разделе приведена ссылка на официальный источник. Текст документа, номер, дата утверждения и PDF-файл не копировались без подтверждения.</p>
            </section>
            <Link href="/documents" className="inline-flex items-center gap-2 font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={18}/>Все документы</Link>
          </div>
          <aside className="lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#102b4e]">Источник</h2>
              <p className="mt-3 text-sm text-slate-600">{document.format} · {document.status}</p>
              <a href={document.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#102b4e] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-900">Открыть на сайте БГУ <ExternalLink size={16}/></a>
              <p className="mt-4 text-xs leading-5 text-slate-500">Внешняя страница может содержать обновлённые материалы. Перед использованием проверяйте актуальность.</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
