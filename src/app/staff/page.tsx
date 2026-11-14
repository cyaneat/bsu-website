import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StaffDirectory from "@/components/staff/StaffDirectory";
import { getStaff } from "@/lib/staff-data";

export const metadata: Metadata = {
  title: "Сотрудники и преподаватели | БГУ",
  description: "Предварительный каталог руководителей факультетов и институтов БГУ имени К. Карасаева",
};

export default async function StaffPage() {
  const people = await getStaff();
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Header />
      <main>
        <section className="bg-[#102b4e] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Навигационная цепочка" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-blue-100"><Link href="/" className="hover:underline">Главная</Link><ChevronRight size={15}/><span aria-current="page" className="text-white">Сотрудники</span></nav>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d5b780]">Люди университета</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Сотрудники и преподаватели</h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-blue-100">Первая версия справочника: руководители факультетов и институтов. Состав преподавателей и кафедр будет дополнен после получения утверждённых данных.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <StaffDirectory items={people}/>
          <p className="mt-8 text-xs leading-relaxed text-slate-500">Предварительные сведения на основе открытых страниц подразделений БГУ. Должности и ФИО необходимо подтвердить перед официальной публикацией. Отсутствие сотрудника в каталоге не означает, что он не работает в университете.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
