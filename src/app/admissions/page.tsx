import type { Metadata } from "next";
import AdmissionsLocalized from "@/components/admissions/AdmissionsLocalized";
export const metadata: Metadata = { title: "Абитуриентам | БГУ" };
export default function Page() { return <AdmissionsLocalized view="overview" />; }
