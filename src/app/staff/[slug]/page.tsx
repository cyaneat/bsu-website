import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ExternalLink, UserRound } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getStaffBySlug } from "@/lib/staff-data";

// Required by the current project's Next.js 16 Cache Components configuration.
export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getStaffBySlug(slug);
  return { title: person ? `${person.name} | БГУ` : "Сотрудник не найден | БГУ", description: person ? `${person.position}, ${person.facultyName}` : undefined };
}

export default async function StaffProfilePage({ params }: Props) {
  const { slug } = await params;
  const person = await getStaffBySlug(slug);
  if (!person) notFound();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/><Link href="/staff" className="hover:underline">Сотрудники</Link><ChevronRight size={15}/><span aria-current="page" className="text-white">{person.name}</span></nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">{person.position}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold sm:text-5xl">{person.name}</h1>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#edf3fa] text-[#102b4e]"><UserRound size={48} aria-label="Фотография отсутствует" /></div>
              <h2 className="text-xl font-bold text-[#102b4e]">Подразделение</h2>
              <Link href={`/faculties/${person.facultySlug}`} className="mt-3 inline-block text-base font-medium text-blue-800 hover:underline">{person.facultyName}</Link>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">Расширенная биография, сведения о научных публикациях, фотографии и личные контакты появятся после согласования с университетом.</p>
            </section>
            {person.biography && <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-xl font-bold text-[#102b4e]">Биография</h2><p className="mt-4 leading-7 text-slate-700">{person.biography}</p></section>}
            {person.publications && person.publications.length > 0 && <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-xl font-bold text-[#102b4e]">Публикации</h2><ul className="mt-4 space-y-3">{person.publications.map((publication) => <li key={publication.title}>{publication.url ? <a href={publication.url} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">{publication.title}</a> : publication.title}</li>)}</ul></section>}
            <Link href="/staff" className="inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline"><ArrowLeft size={16}/>Вернуться в каталог</Link>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#102b4e]">Сведения</h2>
              <p className="mt-4 text-sm text-slate-600">Должность: <span className="font-semibold text-slate-900">{person.position}</span></p>
              <p className="mt-3 text-sm text-slate-600">Контактная информация подразделения и другие организационные сведения доступны на его странице.</p>
              <Link href={`/faculties/${person.facultySlug}`} className="mt-4 block text-sm font-medium text-blue-800 hover:underline">Открыть страницу подразделения</Link>
              <a href={person.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#102b4e] hover:underline">Источник на bsu.kg <ExternalLink size={15}/></a>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
