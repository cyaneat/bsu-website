import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FacultyDirectory from "@/components/faculties/FacultyDirectory";
import { getFaculties } from "@/lib/faculty-data";

export const metadata: Metadata = {
  title: "Факультеты и институты | БГУ",
  description: "Каталог факультетов и институтов Бишкекского государственного университета имени академика К. Карасаева.",
};

export default async function FacultiesPage() {
  const items = await getFaculties();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-6 flex items-center gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/><span aria-current="page">Факультеты и институты</span></nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">Образование в БГУ</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Факультеты и институты</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100">Откройте подразделение, чтобы узнать о руководстве, кафедрах, образовательных направлениях и контактах.</p>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <FacultyDirectory items={items} />
          <p className="mt-8 text-xs text-slate-500">Данные перенесены из открытых страниц bsu.kg для предварительного ознакомления. Состав и контакты требуют подтверждения университетом перед публикацией.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
