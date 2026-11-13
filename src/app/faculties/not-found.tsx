import Link from "next/link";
export default function NotFound() {
  return <main className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-bold">Подразделение не найдено</h1><p className="mt-3 text-slate-600">Проверьте адрес или вернитесь к списку факультетов и институтов.</p><Link href="/faculties" className="mt-6 inline-block rounded-lg bg-[#102b4e] px-5 py-3 text-white">Каталог факультетов</Link></main>;
}
