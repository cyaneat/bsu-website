/**
 * Curated links to pages on the official BSU site; not an archive of PDF files.
 * Data is provisional until approved by BSU content owners.
 */
export type DocumentCategory = "Нормативные документы" | "Наука" | "Абитуриентам" | "Учебный процесс";
export type DocumentRecord = {
  slug: string;
  title: string;
  category: DocumentCategory;
  description: string;
  sourceUrl: string;
  format: "Страница сайта";
  status: "Ссылка на источник";
};

export const documents: DocumentRecord[] = [
  {
    slug: "international-regulations",
    title: "Нормативные документы международного сотрудничества",
    category: "Нормативные документы",
    description: "Раздел с положениями о международных программах, академической мобильности, иностранных обучающихся и международных проектах.",
    sourceUrl: "https://bsu.kg/ru/normativnye-dokumenty-mo/",
    format: "Страница сайта",
    status: "Ссылка на источник",
  },
  {
    slug: "science-regulations",
    title: "Положения по научной деятельности",
    category: "Наука",
    description: "Официальная страница положений научного направления университета. Список и файлы необходимо проверить на исходном сайте.",
    sourceUrl: "https://bsu.kg/ru/polozhenija-nauki/",
    format: "Страница сайта",
    status: "Ссылка на источник",
  },
  {
    slug: "admission-documents",
    title: "Необходимые документы для поступления",
    category: "Абитуриентам",
    description: "Список документов для поступающих из Кыргызской Республики и иностранных граждан.",
    sourceUrl: "https://bsu.kg/ru/neobhodimye-dokumenty/",
    format: "Страница сайта",
    status: "Ссылка на источник",
  },
  {
    slug: "admission-rules",
    title: "Общие правила проведения вступительных испытаний",
    category: "Абитуриентам",
    description: "Опубликованные правила вступительных испытаний и сведения о формах отбора. Актуальные условия текущего года следует уточнять в приёмной комиссии.",
    sourceUrl: "https://bsu.kg/ru/obshhie-pravila/",
    format: "Страница сайта",
    status: "Ссылка на источник",
  },
  {
    slug: "academic-department-regulations",
    title: "Положение об учебном отделе",
    category: "Учебный процесс",
    description: "Положение, описывающее функции и задачи учебного отдела БГУ; на исходной странице доступна англоязычная версия.",
    sourceUrl: "https://bsu.kg/en/polozhenie-ob-uchebnom-otdele/",
    format: "Страница сайта",
    status: "Ссылка на источник",
  },
];

export async function getDocuments(): Promise<DocumentRecord[]> { return documents; }
export async function getDocumentBySlug(slug: string): Promise<DocumentRecord | null> {
  return documents.find((document) => document.slug === slug) ?? null;
}
