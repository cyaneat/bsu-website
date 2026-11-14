/** Preliminary public catalogue from bsu.kg, not an approved admissions prospectus.
 * Replace adapter with backend GET /api/v1/programs and /api/v1/programs/:slug. */
export type ProgramLevel = "Бакалавриат" | "Магистратура" | "PhD";
export type ProgramRecord = {
  slug: string;
  title: string;
  level: ProgramLevel;
  facultySlug: string;
  facultyName: string;
  code?: string;
  profile?: string;
  duration?: string;
  languages?: string;
  description?: string;
  sourceUrl: string;
};

const sourceCatalogue = "https://bsu.kg/ru/specialnosti/";
const sourceOriental = "https://bsu.kg/ru/fakultet-vostokovedenija-i-mezhdunarodnyh-otnoshenij/";
const sourcePedagogy = "https://bsu.kg/ru/napravlenija-fpo/";
const sourceJournalism = "https://bsu.kg/ru/fakultet-zhurnalistiki-i-informacionnyh-sistem/";

export const programRecords: ProgramRecord[] = [
  {slug:"international-relations-ba",title:"Международные отношения",level:"Бакалавриат",facultySlug:"oriental-studies-international-relations",facultyName:"Факультет востоковедения и международных отношений",code:"530800",profile:"Дипломатическая и консульская служба",duration:"4 года (очная)",languages:"Кыргызский, русский и иностранные языки по профилю",description:"Изучение международных отношений, внешней политики и международного взаимодействия.",sourceUrl:sourceOriental},
  {slug:"oriental-studies-ba",title:"Востоковедение, африканистика",level:"Бакалавриат",facultySlug:"oriental-studies-international-relations",facultyName:"Факультет востоковедения и международных отношений",code:"530900",profile:"История и языки стран Азии и Африки",duration:"4 года (очная)",languages:"Кыргызский, русский и восточные языки по профилю",description:"Изучение истории, языков, культуры и общественных процессов стран Азии и Африки.",sourceUrl:sourceOriental},
  {slug:"oriental-studies-ma",title:"Востоковедение, африканистика",level:"Магистратура",facultySlug:"oriental-studies-international-relations",facultyName:"Факультет востоковедения и международных отношений",code:"530900",profile:"История и языки стран Азии и Африки",duration:"2 года (очная)",sourceUrl:sourceOriental},
  {slug:"international-relations-ma",title:"Международные отношения",level:"Магистратура",facultySlug:"oriental-studies-international-relations",facultyName:"Факультет востоковедения и международных отношений",profile:"Внешняя политика",sourceUrl:sourceCatalogue},
  {slug:"pedagogy-ba",title:"Педагогика",level:"Бакалавриат",facultySlug:"pedagogical-education",facultyName:"Факультет педагогического образования",code:"550700",duration:"4 года (очная); 5 лет (заочная с ДОТ)",languages:"Кыргызский, русский",description:"Психолого-педагогическая подготовка и сопровождение образовательного процесса.",sourceUrl:sourcePedagogy},
  {slug:"pedagogy-ma",title:"Педагогика",level:"Магистратура",facultySlug:"pedagogical-education",facultyName:"Факультет педагогического образования",code:"550700",duration:"2 года (очная); 2,5 года (заочная с ДОТ)",languages:"Кыргызский, русский",sourceUrl:sourcePedagogy},
  {slug:"primary-education-ba",title:"Педагогика и методика начального образования",level:"Бакалавриат",facultySlug:"pedagogical-education",facultyName:"Факультет педагогического образования",sourceUrl:sourceCatalogue},
  {slug:"preschool-education-ba",title:"Педагогика и методика дошкольного образования",level:"Бакалавриат",facultySlug:"pedagogical-education",facultyName:"Факультет педагогического образования",sourceUrl:sourceCatalogue},
  {slug:"journalism-ba",title:"Журналистика",level:"Бакалавриат",facultySlug:"journalism-information-systems",facultyName:"Факультет журналистики и информационных систем",code:"530600",duration:"4 года",languages:"Кыргызский, русский",sourceUrl:sourceJournalism},
  {slug:"public-relations-ba",title:"Реклама и связь с общественностью",level:"Бакалавриат",facultySlug:"journalism-information-systems",facultyName:"Факультет журналистики и информационных систем",code:"530700",duration:"4 года",languages:"Кыргызский, русский",sourceUrl:sourceJournalism},
  {slug:"information-systems-ba",title:"Информационные системы и технологии",level:"Бакалавриат",facultySlug:"journalism-information-systems",facultyName:"Факультет журналистики и информационных систем",profile:"Информационные технологии искусственного интеллекта; информационные технологии в управлении",sourceUrl:sourceCatalogue},
  {slug:"journalism-ma",title:"Журналистика",level:"Магистратура",facultySlug:"journalism-information-systems",facultyName:"Факультет журналистики и информационных систем",sourceUrl:sourceCatalogue},
  {slug:"kyrgyz-philology-ba",title:"Филологическое образование (кыргызский язык и литература)",level:"Бакалавриат",facultySlug:"kyrgyz-philology",facultyName:"Факультет кыргызской филологии",sourceUrl:sourceCatalogue},
  {slug:"russian-philology-ba",title:"Филологическое образование (русский язык и литература)",level:"Бакалавриат",facultySlug:"russian-philology",facultyName:"Факультет русской филологии",sourceUrl:sourceCatalogue},
  {slug:"psychology-ba",title:"Психология",level:"Бакалавриат",facultySlug:"social-psychological",facultyName:"Социально-психологический факультет",sourceUrl:sourceCatalogue},
  {slug:"psychology-ma",title:"Психология",level:"Магистратура",facultySlug:"social-psychological",facultyName:"Социально-психологический факультет",sourceUrl:sourceCatalogue},
  {slug:"psychology-phd",title:"Психология",level:"PhD",facultySlug:"social-psychological",facultyName:"Социально-психологический факультет",duration:"3 года",sourceUrl:sourceCatalogue},
  {slug:"ecology-ba",title:"Экология и природопользование",level:"Бакалавриат",facultySlug:"ecology-management",facultyName:"Факультет экологии и менеджмента",sourceUrl:sourceCatalogue},
  {slug:"tourism-ba",title:"Туризм",level:"Бакалавриат",facultySlug:"ecology-management",facultyName:"Факультет экологии и менеджмента",sourceUrl:sourceCatalogue},
  {slug:"economics-phd",title:"Экономика",level:"PhD",facultySlug:"economics-finance-business",facultyName:"Институт экономики, финансов и бизнес-управления",sourceUrl:sourceCatalogue},
];

export async function getPrograms(): Promise<ProgramRecord[]> { return programRecords; }
export async function getProgramBySlug(slug: string): Promise<ProgramRecord | null> {
 return programRecords.find((p) => p.slug === slug) ?? null;
}
