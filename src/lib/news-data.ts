/** Temporary editorial snapshot from bsu.kg; replace with CMS API. */
export type NewsCategory = "Новости" | "Наука" | "Международное сотрудничество" | "Мероприятия";
export type NewsRecord = { slug: string; title: string; date: string; category: NewsCategory; excerpt: string; sourceUrl: string; imageUrl?: string; content?: string[]; };
const sourceUrl = "https://bsu.kg/ru/bhu-news/";
export const newsRecords: NewsRecord[] = [
  { slug: "phd-defense-economics-2026", title: "Защита диссертаций PhD по направлению «Экономика»", date: "2026-10-23", category: "Наука", excerpt: "БГУ опубликовал анонс защит диссертаций докторантов по направлению 580100 «Экономика», назначенных на 25–26 ноября 2026 года.", sourceUrl },
  { slug: "school-teacher-seminars-2026", title: "Для учителей школ начались семинары-тренинги", date: "2026-09-24", category: "Мероприятия", excerpt: "В БГУ проводятся семинары-тренинги для учителей общеобразовательных школ города Бишкек.", sourceUrl },
  { slug: "rector-address-september-2026", title: "Обращение ректора к началу учебного года", date: "2026-09-24", category: "Новости", excerpt: "На официальном сайте опубликовано поздравительное обращение к преподавателям, сотрудникам и студентам по случаю начала учебного года.", sourceUrl },
  { slug: "szeged-internship-2026", title: "Магистранты и докторант Университета Сегеда проходят стажировку в БГУ", date: "2026-09-24", category: "Международное сотрудничество", excerpt: "БГУ сообщил о научной стажировке четырёх магистрантов и одного PhD-докторанта Университета Сегеда (Венгрия).", sourceUrl },
  { slug: "digital-education-china-2026", title: "БГУ изучает опыт цифровизации образования в Китае", date: "2026-09-24", category: "Международное сотрудничество", excerpt: "Представители университета приняли участие в образовательной программе в Китае с 12 по 21 сентября 2026 года.", sourceUrl },
  { slug: "demographic-resilience-training-2026", title: "Преподаватели БГУ участвовали в тренинге по демографической устойчивости", date: "2026-09-24", category: "Наука", excerpt: "Преподаватели университета приняли участие в тренинге, проходившем с 7 по 9 сентября 2026 года.", sourceUrl },
];
export async function getNews(): Promise<NewsRecord[]> { return [...newsRecords].sort((a,b) => b.date.localeCompare(a.date)); }
export async function getNewsBySlug(slug:string):Promise<NewsRecord|null> { return newsRecords.find(x=>x.slug===slug)??null; }
export function formatNewsDate(date:string) { return new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T12:00:00Z`)); }
