import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramDetailLocalized from "@/components/programs/ProgramDetailLocalized";
import { getProgramBySlug, programRecords } from "@/lib/program-data";

export const instant = false;
export function generateStaticParams() { return programRecords.map(p => ({ slug: p.slug })); }
type Props = { params: Promise<{slug:string}> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProgramBySlug(slug);
  return { title: p ? `${p.title} — ${p.level} | БГУ` : "Программа не найдена | БГУ" };
}
export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) notFound();
  return <div className="min-h-screen bg-[#f5f7fb] text-slate-900"><Header/><ProgramDetailLocalized program={program}/><Footer/></div>;
}
