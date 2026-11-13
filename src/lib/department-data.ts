import { faculties } from "@/lib/faculty-data";

/**
 * Temporary snapshot, derived from the departmental names in faculty-data.ts.
 * Backend will eventually provide this via GET /api/v1/departments.
 * Do not invent leaders, contacts, descriptions or staff profiles.
 */
export type DepartmentRecord = {
  slug: string;
  name: string;
  facultySlug: string;
  facultyName: string;
  facultySourceUrl: string;
};

const cyrillic: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
  з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
  ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  ү: "u", ө: "o", ң: "ng",
};

export function toDepartmentSlug(name: string): string {
  return Array.from(name.toLowerCase())
    .map((char) => cyrillic[char] ?? char)
    .join("")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const departments: DepartmentRecord[] = faculties.flatMap((faculty) =>
  (faculty.departments ?? []).map((name) => ({
    slug: `${faculty.slug}--${toDepartmentSlug(name)}`,
    name,
    facultySlug: faculty.slug,
    facultyName: faculty.name,
    facultySourceUrl: faculty.sourceUrl,
  }))
);

export async function getDepartments(): Promise<DepartmentRecord[]> {
  return departments;
}

export async function getDepartmentBySlug(slug: string): Promise<DepartmentRecord | null> {
  return departments.find((department) => department.slug === slug) ?? null;
}

export function departmentHref(facultySlug: string, departmentName: string): string {
  return `/departments/${facultySlug}--${toDepartmentSlug(departmentName)}`;
}
