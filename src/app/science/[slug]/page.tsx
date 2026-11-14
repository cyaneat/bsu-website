import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScienceLocalized from "@/components/science/ScienceLocalized";
import { getScienceSection, scienceSections } from "@/lib/science-data";
export const instant = false;
export function generateStaticParams() { return scienceSections.map((s) => ({ slug: s.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getScienceSection(slug);
  return { title: section ? `${section.title} | БГУ` : "Раздел не найден | БГУ", description: section?.teaser };
}
export default async function ScienceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!getScienceSection(slug)) notFound();
  return <ScienceLocalized slug={slug} />;
}
