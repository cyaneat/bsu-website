/**
 * Временный адаптер данных для frontend.
 * Когда backend предоставит GET /api/v1/faculties и GET /api/v1/faculties/{slug},
 * замените реализацию двух функций ниже. UI не потребует переделки.
 * Данные основаны на публичных страницах bsu.kg; перед публикацией подтвердить в БГУ.
 */
export type Faculty = {
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  dean?: string;
  departments: string[];
  programs: string[];
  contact?: { phone?: string; email?: string; address?: string };
  sourceUrl: string;
};

const mockFaculties: Faculty[] = [
  {
    slug: "pedagogical-education",
    name: "Факультет педагогического образования",
    shortDescription: "Подготовка педагогов, психологов и специалистов дошкольного и начального образования.",
    description:
      "Факультет готовит специалистов в сфере образования, педагогики и психологии. На этой странице представлен сокращённый информационный обзор для проверки шаблона.",
    dean: "Мураталиева Мира Алымбековна",
    departments: [
      "Кафедра педагогики и психологии",
      "Кафедра теории и методики начального и дошкольного образования",
    ],
    programs: [
      "Педагогика и методика начального образования",
      "Педагогика и методика дошкольного образования",
      "Социальная педагогика-психология",
      "Логопедия",
    ],
    contact: {
      phone: "+996 707 909 933",
      email: "dekanat.fpo@bhu.kg",
      address: "г. Бишкек, пр. Ч. Айтматова, 27, блок К, 1 этаж, кабинет 109",
    },
    sourceUrl: "https://bsu.kg/ru/fakultet-pedagogicheskogo-obrazovanija/",
  },
  {
    slug: "oriental-studies-international-relations",
    name: "Факультет востоковедения и международных отношений",
    shortDescription: "Образовательные направления по востоковедению и международным отношениям.",
    departments: [],
    programs: [],
    sourceUrl: "https://bsu.kg/ru/specialnosti/",
  },
];

export async function getFaculties(): Promise<Faculty[]> {
  return mockFaculties;
}

export async function getFacultyBySlug(slug: string): Promise<Faculty | null> {
  return mockFaculties.find((faculty) => faculty.slug === slug) ?? null;
}
