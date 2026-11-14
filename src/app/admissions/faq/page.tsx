import type { Metadata } from "next";
import AdmissionsLocalized from "@/components/admissions/AdmissionsLocalized";
export const metadata: Metadata = { title: "FAQ для абитуриентов | БГУ" };
export default function Page() { return <AdmissionsLocalized view="faq" />; }
