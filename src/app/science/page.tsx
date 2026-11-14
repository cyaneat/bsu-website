import type { Metadata } from "next";
import ScienceLocalized from "@/components/science/ScienceLocalized";
export const metadata: Metadata = { title: "Научная деятельность | БГУ", description: "Наука в БГУ: исследования, конференции, публикации, диссертации." };
export default function SciencePage() { return <ScienceLocalized />; }
