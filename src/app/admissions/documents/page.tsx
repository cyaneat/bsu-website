import type { Metadata } from "next";
import AdmissionsLocalized from "@/components/admissions/AdmissionsLocalized";
export const metadata: Metadata = { title: "Документы для поступления | БГУ" };
export default function Page() { return <AdmissionsLocalized view="documents" />; }
