/**
 * Public BSU content snapshot, checked against bsu.kg on 2026-11-14.
 * Temporary content adapter: backend team will replace this with CMS/API.
 * Never assume this is the live university directory.
 */
export type FacultyRecord = {
  slug: string;
  name: string;
  shortName?: string;
  kind: "faculty" | "institute";
  category: string;
  summary: string;
  leadTitle: "Декан" | "Директор";
  leader: string;
  phone?: string;
  email?: string;
  address?: string;
  departments?: string[];
  programs?: { title: string; degree?: string; code?: string }[];
  sourceUrl: string;
};

export const faculties: FacultyRecord[] = [
  {
    slug: "pedagogical-education",
    name: "Факультет педагогического образования",
    shortName: "ФПО",
    kind: "faculty",
    category: "Педагогика",
    summary: "Подготовка педагогов, психологов и специалистов по дошкольному и начальному образованию.",
    leadTitle: "Декан",
    leader: "Мураталиева Мира Алымбековна",
    phone: "+996 707 909 933",
    email: "dekanat.fpo@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок К, 1 этаж, каб. 109К",
    departments: ["Кафедра педагогики и психологии", "Кафедра теории и методики начального и дошкольного образования"],
    programs: [
      { title: "Педагогика", degree: "Бакалавриат", code: "550700" },
      { title: "Педагогика", degree: "Магистратура", code: "550700" },
      { title: "Начальное образование", degree: "Бакалавриат" },
      { title: "Дошкольное образование", degree: "Бакалавриат" },
    ],
    sourceUrl: "https://bsu.kg/ru/fakultet-pedagogicheskogo-obrazovanija/",
  },
  {
    slug: "oriental-studies-international-relations",
    name: "Факультет востоковедения и международных отношений",
    shortName: "ФВМО",
    kind: "faculty",
    category: "Международные отношения",
    summary: "Международные отношения, восточные языки, культура, история и исследования стран Азии и Африки.",
    leadTitle: "Декан",
    leader: "Машрапов Таласбек Туратбекович",
    phone: "+996 (312) 21-87-24",
    email: "fvmo@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок Г, 3 этаж, каб. 305-В",
    departments: [
      "Кафедра международных отношений",
      "Кафедра японской филологии",
      "Кафедра корейской филологии",
      "Кафедра арабской филологии",
      "Кафедра персидской и турецкой филологии",
      "Кафедра истории Кыргызстана и зарубежного Востока",
    ],
    programs: [
      { title: "Международные отношения", code: "530800", degree: "Бакалавриат / магистратура" },
      { title: "Востоковедение, африканистика", code: "530900", degree: "Бакалавриат / магистратура" },
      { title: "Лингвистика", code: "531100", degree: "Бакалавриат" },
    ],
    sourceUrl: "https://bsu.kg/ru/fakultet-vostokovedenija-i-mezhdunarodnyh-otnoshenij/",
  },
  {
    slug: "russian-philology",
    name: "Факультет русской филологии",
    kind: "faculty",
    category: "Филология",
    summary: "Русский язык, филология, лингвистическая подготовка и педагогические направления.",
    leadTitle: "Декан",
    leader: "Ниязалиева Рахат Анарбековна",
    phone: "+996 (312) 21-87-65",
    email: "frf@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок К, 1 этаж, каб. 115К",
    departments: ["Кафедра официального языка"],
    sourceUrl: "https://bsu.kg/ru/fakultet-russkoj-filologii/",
  },
  {
    slug: "journalism-information-systems",
    name: "Факультет журналистики и информационных систем",
    kind: "faculty",
    category: "Медиа и IT",
    summary: "Журналистика, связи с общественностью, информационные системы и документационное дело.",
    leadTitle: "Декан",
    leader: "Асанова Алтын Асановна",
    phone: "+996 (312) 21-87-18",
    email: "dekanat.fjic@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27",
    departments: [
      "Кафедра журналистики и связей с общественностью",
      "Кафедра информатики и математики",
      "Кафедра социальной информации и документологии",
    ],
    sourceUrl: "https://bsu.kg/ru/fakultet-zhurnalistiki-i-informacionnyh-sistem/",
  },
  {
    slug: "ecology-management",
    name: "Факультет экологии и менеджмента",
    kind: "faculty",
    category: "Менеджмент и экология",
    summary: "Экология, управление, государственная и муниципальная служба.",
    leadTitle: "Декан",
    leader: "Бокоева Элегия Токтоналиевна",
    phone: "+996 (312) 53-02-23",
    email: "bsu.fem@gmail.com",
    address: "Бишкек, ул. К. Карасаева, 10, 3 этаж, каб. 321",
    departments: ["Кафедра государственной и муниципальной службы и менеджмента"],
    sourceUrl: "https://bsu.kg/ru/fakultet-jekologii-i-menedzhmenta/",
  },
  {
    slug: "european-civilizations",
    name: "Факультет европейских цивилизаций",
    kind: "faculty",
    category: "Языки и культура",
    summary: "Европейские языки, межкультурная коммуникация и гуманитарное образование.",
    leadTitle: "Декан",
    leader: "Джаркинбаева Назгуль Болотбековна",
    phone: "+996 (312) 21-88-47",
    email: "dekanat.fec@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок Г, 3 этаж, каб. Г-3",
    sourceUrl: "https://bsu.kg/ru/fakultet-evropejskih-civilizacij/",
  },
  {
    slug: "social-psychological",
    name: "Социально-психологический факультет",
    kind: "faculty",
    category: "Социальные науки",
    summary: "Психология, социальная работа, социология и социально-правовые дисциплины.",
    leadTitle: "Декан",
    leader: "Айтбаева Перизат Мурзакматовна",
    phone: "+996 (312) 53-02-94",
    email: "dekanat.spf@bhu.kg",
    address: "Бишкек, ул. К. Карасаева, 10, 2-й корпус БГУ",
    departments: ["Кафедра социальной работы и практической психологии", "Кафедра социологии и политико-правовых дисциплин"],
    sourceUrl: "https://bsu.kg/ru/socialno-psihologicheskij-fakultet/",
  },
  {
    slug: "kyrgyz-philology",
    name: "Факультет кыргызской филологии",
    kind: "faculty",
    category: "Филология",
    summary: "Кыргызская филология, языковедение и литературное образование.",
    leadTitle: "Декан",
    leader: "Кенжешев Каныбек Дүйшөналиевич",
    phone: "+996 (312) 21-87-12",
    email: "fkf@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок В, каб. 401В",
    departments: ["Кафедра теории кыргызского и турецкого языков"],
    sourceUrl: "https://bsu.kg/ru/kyrgyz-filologijasy-fakulteti/",
  },
  {
    slug: "kyrgyz-chinese",
    name: "Кыргызско-китайский факультет",
    kind: "faculty",
    category: "Международные отношения",
    summary: "Китайский язык, международная экономика и кыргызско-китайское сотрудничество.",
    leadTitle: "Декан",
    leader: "Ботоканова Гульнара Топчуевна",
    phone: "+996 (312) 54-45-47",
    email: "kcf@bhu.kg",
    address: "Бишкек, проспект Ч. Айтматова, 27, блок Г, 4 этаж, каб. 415Г",
    departments: ["Кафедра мировой экономики"],
    sourceUrl: "https://bsu.kg/ru/kyrgyzsko-kitajskij-fakultet/",
  },
  {
    slug: "economics-finance-business",
    name: "Институт экономики, финансов и бизнес-управления",
    shortName: "ИЭФБУ",
    kind: "institute",
    category: "Экономика",
    summary: "Экономические, финансовые и управленческие образовательные направления.",
    leadTitle: "Директор",
    leader: "Савин Виктор Евгеньевич",
    phone: "+996 (312) 42-52-95",
    email: "fef@bhu.kg",
    address: "Бишкек, ул. Жукеева-Пудовкина, 34, 3-й корпус БГУ",
    sourceUrl: "https://bsu.kg/ru/fakultet-jekonomiki-i-finansov/",
  },
  {
    slug: "continuing-distance-education",
    name: "Институт непрерывного дистанционного образования, переподготовки и повышения квалификации",
    shortName: "ИНДОППК",
    kind: "institute",
    category: "Дополнительное образование",
    summary: "Дистанционное образование, профессиональная переподготовка и повышение квалификации.",
    leadTitle: "Директор",
    leader: "Халилов Атахан Ташполотович",
    phone: "+996 (312) 53-02-96",
    email: "bgu.indo@mail.ru",
    address: "Бишкек, ул. К. Карасаева, 10, 2 этаж, каб. 219",
    sourceUrl: "https://bsu.kg/ru/indo-institut-nepreryvnogo-i-distancionnogo-obrazovanija/",
  },
];

export async function getFaculties(): Promise<FacultyRecord[]> {
  // API integration point: replace with GET /api/v1/faculties.
  return faculties;
}

export async function getFacultyBySlug(slug: string): Promise<FacultyRecord | null> {
  // API integration point: replace with GET /api/v1/faculties/{slug}.
  return faculties.find((item) => item.slug === slug) ?? null;
}
