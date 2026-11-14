import { faculties } from "@/lib/faculty-data";

/**
 * Preliminary directory from the existing faculty leadership snapshot.
 * Faculty contact details are not personal contact details.
 * This is not a complete faculty / teaching staff directory.
 */
export type StaffRecord = {
  slug: string;
  name: string;
  position: string;
  facultySlug: string;
  facultyName: string;
  sourceUrl: string;
  photoUrl?: string;
  departmentSlug?: string;
  biography?: string;
  publications?: { title: string; url?: string }[];
  personalEmail?: string;
  personalPhone?: string;
};

export const staff: StaffRecord[] = faculties.map((faculty) => ({
  slug: `${faculty.slug}-leader`,
  name: faculty.leader,
  position: faculty.leadTitle,
  facultySlug: faculty.slug,
  facultyName: faculty.name,
  sourceUrl: faculty.sourceUrl,
}));

export async function getStaff(): Promise<StaffRecord[]> {
  // Backend: GET /api/v1/staff
  return staff;
}

export async function getStaffBySlug(slug: string): Promise<StaffRecord | null> {
  // Backend: GET /api/v1/staff/{slug}
  return staff.find((item) => item.slug === slug) ?? null;
}
