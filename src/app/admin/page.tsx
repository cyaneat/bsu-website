import type { Metadata } from "next";
import AdminWorkspace from "@/components/admin/AdminWorkspace";
import { faculties } from "@/lib/faculty-data";
import { programRecords } from "@/lib/program-data";

export const metadata: Metadata = {
  title: "Прототип панели управления | БГУ",
  description: "Демонстрационный интерфейс будущей административной панели БГУ.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <AdminWorkspace
      seedFaculties={faculties.map((f) => ({ id: f.slug, title: f.name, subtitle: f.category, source: f.sourceUrl }))}
      seedPrograms={programRecords.map((p) => ({ id: p.slug, title: p.title, subtitle: `${p.level} · ${p.facultyName}`, source: p.sourceUrl }))}
    />
  );
}
