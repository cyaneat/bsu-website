import type { Metadata } from "next";
import AdmissionsLocalized from "@/components/admissions/AdmissionsLocalized";
export const metadata: Metadata = { title: "Стоимость обучения | БГУ" };
export default function Page() { return <AdmissionsLocalized view="tuition" />; }
