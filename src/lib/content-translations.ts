/** Preliminary public-facing translations; not approved by BSU.
 * Preserve Russian originals in source data and use exact-string fallback. */
export type ContentLanguage = "ru" | "ky" | "en" | "zh-CN";
export const contentTranslations: Record<string, Partial<Record<Exclude<ContentLanguage,"ru">,string>>> = {
  "Факультет педагогического образования": {
    "ky": "Педагогикалык билим берүү факультети",
    "en": "Faculty of Teacher Education",
    "zh-CN": "教师教育学院"
  },
  "Факультет востоковедения и международных отношений": {
    "ky": "Чыгыш таануу жана эл аралык мамилелер факультети",
    "en": "Faculty of Oriental Studies and International Relations",
    "zh-CN": "东方研究与国际关系学院"
  },
  "Факультет русской филологии": {
    "ky": "Орус филологиясы факультети",
    "en": "Faculty of Russian Philology",
    "zh-CN": "俄罗斯语言文学学院"
  },
  "Факультет кыргызской филологии": {
    "ky": "Кыргыз филологиясы факультети",
    "en": "Faculty of Kyrgyz Philology",
    "zh-CN": "吉尔吉斯语言文学学院"
  },
  "Факультет журналистики и информационных систем": {
    "ky": "Журналистика жана маалыматтык системалар факультети",
    "en": "Faculty of Journalism and Information Systems",
    "zh-CN": "新闻与信息系统学院"
  },
  "Факультет европейских цивилизаций": {
    "ky": "Европа цивилизациялары факультети",
    "en": "Faculty of European Civilizations",
    "zh-CN": "欧洲文明学院"
  },
  "Факультет экологии и менеджмента": {
    "ky": "Экология жана менеджмент факультети",
    "en": "Faculty of Ecology and Management",
    "zh-CN": "生态与管理学院"
  },
  "Социально-психологический факультет": {
    "ky": "Социалдык-психологиялык факультет",
    "en": "Faculty of Social Sciences and Psychology",
    "zh-CN": "社会科学与心理学院"
  },
  "Кыргызско-китайский факультет": {
    "ky": "Кыргыз-кытай факультети",
    "en": "Kyrgyz-Chinese Faculty",
    "zh-CN": "吉中学院"
  },
  "Институт экономики, финансов и бизнес-управления": {
    "ky": "Экономика, финансы жана бизнести башкаруу институту",
    "en": "Institute of Economics, Finance and Business Management",
    "zh-CN": "经济、金融与工商管理学院"
  },
  "Институт непрерывного дистанционного образования, переподготовки и повышения квалификации": {
    "ky": "Үзгүлтүксүз дистанттык билим берүү, кайра даярдоо жана квалификацияны жогорулатуу институту",
    "en": "Institute of Continuing Distance Education and Professional Development",
    "zh-CN": "继续远程教育与职业发展学院"
  },
  "Педагогика": {
    "ky": "Педагогика",
    "en": "Education",
    "zh-CN": "教育学"
  },
  "Международные отношения": {
    "ky": "Эл аралык мамилелер",
    "en": "International Relations",
    "zh-CN": "国际关系"
  },
  "Филология": {
    "ky": "Филология",
    "en": "Philology",
    "zh-CN": "语言文学"
  },
  "Медиа и IT": {
    "ky": "Медиа жана IT",
    "en": "Media and IT",
    "zh-CN": "媒体与信息技术"
  },
  "Менеджмент и экология": {
    "ky": "Менеджмент жана экология",
    "en": "Management and Ecology",
    "zh-CN": "管理与生态"
  },
  "Языки и культура": {
    "ky": "Тилдер жана маданият",
    "en": "Languages and Culture",
    "zh-CN": "语言与文化"
  },
  "Социальные науки": {
    "ky": "Коомдук илимдер",
    "en": "Social Sciences",
    "zh-CN": "社会科学"
  },
  "Экономика": {
    "ky": "Экономика",
    "en": "Economics",
    "zh-CN": "经济学"
  },
  "Дополнительное образование": {
    "ky": "Кошумча билим берүү",
    "en": "Continuing Education",
    "zh-CN": "继续教育"
  },
  "Подготовка педагогов, психологов и специалистов по дошкольному и начальному образованию.": {
    "ky": "Мугалимдерди, психологдорду, мектепке чейинки жана башталгыч билим берүү адистерин даярдоо.",
    "en": "Training teachers, psychologists, and early-childhood and primary education specialists.",
    "zh-CN": "培养教师、心理学工作者以及学前和小学教育专业人才。"
  },
  "Международные отношения, восточные языки, культура, история и исследования стран Азии и Африки.": {
    "ky": "Эл аралык мамилелер, чыгыш тилдери, маданият, тарых жана Азия менен Африка өлкөлөрүн изилдөө.",
    "en": "International relations, Eastern languages, culture, history and studies of Asia and Africa.",
    "zh-CN": "国际关系、东方语言、文化、历史及亚洲和非洲区域研究。"
  },
  "Русский язык, филология, лингвистическая подготовка и педагогические направления.": {
    "ky": "Орус тили, филология, тил таануу жана педагогикалык багыттар.",
    "en": "Russian language, philology, linguistics and teacher education.",
    "zh-CN": "俄语、语言文学、语言学及师范教育。"
  },
  "Журналистика, связи с общественностью, информационные системы и документационное дело.": {
    "ky": "Журналистика, коомчулук менен байланыш, маалыматтык системалар жана документ таануу.",
    "en": "Journalism, public relations, information systems and records management.",
    "zh-CN": "新闻学、公共关系、信息系统与档案管理。"
  },
  "Экология, управление, государственная и муниципальная служба.": {
    "ky": "Экология, башкаруу, мамлекеттик жана муниципалдык кызмат.",
    "en": "Ecology, management, public and municipal administration.",
    "zh-CN": "生态学、管理学以及国家和地方公共管理。"
  },
  "Европейские языки, межкультурная коммуникация и гуманитарное образование.": {
    "ky": "Европа тилдери, маданияттар аралык байланыш жана гуманитардык билим берүү.",
    "en": "European languages, intercultural communication and humanities education.",
    "zh-CN": "欧洲语言、跨文化交流与人文教育。"
  },
  "Психология, социальная работа, социология и социально-правовые дисциплины.": {
    "ky": "Психология, социалдык иш, социология жана социалдык-укуктук дисциплиналар.",
    "en": "Psychology, social work, sociology and socio-legal studies.",
    "zh-CN": "心理学、社会工作、社会学及社会法律研究。"
  },
  "Кыргызская филология, языковедение и литературное образование.": {
    "ky": "Кыргыз филологиясы, тил илими жана адабий билим берүү.",
    "en": "Kyrgyz philology, linguistics and literary education.",
    "zh-CN": "吉尔吉斯语言文学、语言学与文学教育。"
  },
  "Китайский язык, международная экономика и кыргызско-китайское сотрудничество.": {
    "ky": "Кытай тили, эл аралык экономика жана кыргыз-кытай кызматташтыгы.",
    "en": "Chinese language, international economics and Kyrgyz-Chinese cooperation.",
    "zh-CN": "汉语、国际经济与吉中合作。"
  },
  "Экономические, финансовые и управленческие образовательные направления.": {
    "ky": "Экономика, финансы жана башкаруу боюнча билим берүү багыттары.",
    "en": "Degree programs in economics, finance and management.",
    "zh-CN": "经济、金融与管理领域的教育项目。"
  },
  "Дистанционное образование, профессиональная переподготовка и повышение квалификации.": {
    "ky": "Дистанттык билим берүү, кесиптик кайра даярдоо жана квалификацияны жогорулатуу.",
    "en": "Distance education, professional retraining and continuing development.",
    "zh-CN": "远程教育、职业再培训与专业能力提升。"
  },
  "Кафедра педагогики и психологии": {
    "ky": "Педагогика жана психология кафедрасы",
    "en": "Department of Education and Psychology",
    "zh-CN": "教育学与心理学系"
  },
  "Кафедра теории и методики начального и дошкольного образования": {
    "ky": "Башталгыч жана мектепке чейинки билим берүүнүн теориясы жана методикасы кафедрасы",
    "en": "Department of Primary and Preschool Education Methods",
    "zh-CN": "小学及学前教育理论与方法系"
  },
  "Кафедра международных отношений": {
    "ky": "Эл аралык мамилелер кафедрасы",
    "en": "Department of International Relations",
    "zh-CN": "国际关系系"
  },
  "Кафедра японской филологии": {
    "ky": "Жапон филологиясы кафедрасы",
    "en": "Department of Japanese Philology",
    "zh-CN": "日语语言文学系"
  },
  "Кафедра корейской филологии": {
    "ky": "Корей филологиясы кафедрасы",
    "en": "Department of Korean Philology",
    "zh-CN": "韩语语言文学系"
  },
  "Кафедра арабской филологии": {
    "ky": "Араб филологиясы кафедрасы",
    "en": "Department of Arabic Philology",
    "zh-CN": "阿拉伯语语言文学系"
  },
  "Кафедра персидской и турецкой филологии": {
    "ky": "Перс жана түрк филологиясы кафедрасы",
    "en": "Department of Persian and Turkish Philology",
    "zh-CN": "波斯语与土耳其语语言文学系"
  },
  "Кафедра истории Кыргызстана и зарубежного Востока": {
    "ky": "Кыргызстандын жана чет өлкөлүк Чыгыштын тарыхы кафедрасы",
    "en": "Department of Kyrgyzstan and Eastern History",
    "zh-CN": "吉尔吉斯斯坦与东方历史系"
  },
  "Кафедра официального языка": {
    "ky": "Расмий тил кафедрасы",
    "en": "Department of the Official Language",
    "zh-CN": "官方语言系"
  },
  "Кафедра журналистики и связей с общественностью": {
    "ky": "Журналистика жана коомчулук менен байланыш кафедрасы",
    "en": "Department of Journalism and Public Relations",
    "zh-CN": "新闻与公共关系系"
  },
  "Кафедра информатики и математики": {
    "ky": "Информатика жана математика кафедрасы",
    "en": "Department of Computer Science and Mathematics",
    "zh-CN": "计算机科学与数学系"
  },
  "Кафедра социальной информации и документологии": {
    "ky": "Социалдык маалымат жана документ таануу кафедрасы",
    "en": "Department of Social Information and Document Studies",
    "zh-CN": "社会信息与文献学系"
  },
  "Кафедра государственной и муниципальной службы и менеджмента": {
    "ky": "Мамлекеттик жана муниципалдык кызмат жана менеджмент кафедрасы",
    "en": "Department of Public Administration and Management",
    "zh-CN": "公共行政与管理系"
  },
  "Кафедра социальной работы и практической психологии": {
    "ky": "Социалдык иш жана практикалык психология кафедрасы",
    "en": "Department of Social Work and Applied Psychology",
    "zh-CN": "社会工作与应用心理学系"
  },
  "Кафедра социологии и политико-правовых дисциплин": {
    "ky": "Социология жана саясий-укуктук дисциплиналар кафедрасы",
    "en": "Department of Sociology and Political-Legal Studies",
    "zh-CN": "社会学与政治法律研究系"
  },
  "Кафедра теории кыргызского и турецкого языков": {
    "ky": "Кыргыз жана түрк тилдеринин теориясы кафедрасы",
    "en": "Department of Kyrgyz and Turkish Language Theory",
    "zh-CN": "吉尔吉斯语与土耳其语理论系"
  },
  "Кафедра мировой экономики": {
    "ky": "Дүйнөлүк экономика кафедрасы",
    "en": "Department of World Economics",
    "zh-CN": "世界经济系"
  },
  "Востоковедение, африканистика": {
    "ky": "Чыгыш таануу, африканистика",
    "en": "Oriental and African Studies",
    "zh-CN": "东方与非洲研究"
  },
  "Лингвистика": {
    "ky": "Лингвистика",
    "en": "Linguistics",
    "zh-CN": "语言学"
  },
  "Начальное образование": {
    "ky": "Башталгыч билим берүү",
    "en": "Primary Education",
    "zh-CN": "小学教育"
  },
  "Дошкольное образование": {
    "ky": "Мектепке чейинки билим берүү",
    "en": "Preschool Education",
    "zh-CN": "学前教育"
  },
  "Педагогика и методика начального образования": {
    "ky": "Башталгыч билим берүүнүн педагогикасы жана методикасы",
    "en": "Primary Education and Teaching Methods",
    "zh-CN": "小学教育与教学法"
  },
  "Педагогика и методика дошкольного образования": {
    "ky": "Мектепке чейинки билим берүүнүн педагогикасы жана методикасы",
    "en": "Preschool Education and Teaching Methods",
    "zh-CN": "学前教育与教学法"
  },
  "Журналистика": {
    "ky": "Журналистика",
    "en": "Journalism",
    "zh-CN": "新闻学"
  },
  "Реклама и связь с общественностью": {
    "ky": "Жарнама жана коомчулук менен байланыш",
    "en": "Advertising and Public Relations",
    "zh-CN": "广告与公共关系"
  },
  "Информационные системы и технологии": {
    "ky": "Маалыматтык системалар жана технологиялар",
    "en": "Information Systems and Technologies",
    "zh-CN": "信息系统与技术"
  },
  "Филологическое образование (кыргызский язык и литература)": {
    "ky": "Филологиялык билим берүү (кыргыз тили жана адабияты)",
    "en": "Philology Education (Kyrgyz Language and Literature)",
    "zh-CN": "语言文学教育（吉尔吉斯语言文学）"
  },
  "Филологическое образование (русский язык и литература)": {
    "ky": "Филологиялык билим берүү (орус тили жана адабияты)",
    "en": "Philology Education (Russian Language and Literature)",
    "zh-CN": "语言文学教育（俄罗斯语言文学）"
  },
  "Психология": {
    "ky": "Психология",
    "en": "Psychology",
    "zh-CN": "心理学"
  },
  "Экология и природопользование": {
    "ky": "Экология жана жаратылышты пайдалануу",
    "en": "Ecology and Environmental Management",
    "zh-CN": "生态学与自然资源管理"
  },
  "Туризм": {
    "ky": "Туризм",
    "en": "Tourism",
    "zh-CN": "旅游学"
  },
  "Бакалавриат": {
    "ky": "Бакалавриат",
    "en": "Bachelor’s Degree",
    "zh-CN": "本科"
  },
  "Магистратура": {
    "ky": "Магистратура",
    "en": "Master’s Degree",
    "zh-CN": "硕士"
  },
  "Бакалавриат / магистратура": {
    "ky": "Бакалавриат / магистратура",
    "en": "Bachelor’s / Master’s",
    "zh-CN": "本科／硕士"
  },
  "PhD": {
    "ky": "PhD",
    "en": "PhD",
    "zh-CN": "博士"
  },
  "Декан": {
    "ky": "Декан",
    "en": "Dean",
    "zh-CN": "院长"
  },
  "Директор": {
    "ky": "Директор",
    "en": "Director",
    "zh-CN": "主任"
  },
  "Изучение международных отношений, внешней политики и международного взаимодействия.": {
    "ky": "Эл аралык мамилелерди, тышкы саясатты жана эл аралык өз ара аракеттенүүнү изилдөө.",
    "en": "Study of international relations, foreign policy and international cooperation.",
    "zh-CN": "研究国际关系、外交政策与国际合作。"
  },
  "Изучение истории, языков, культуры и общественных процессов стран Азии и Африки.": {
    "ky": "Азия жана Африка өлкөлөрүнүн тарыхын, тилдерин, маданиятын жана коомдук процесстерин изилдөө.",
    "en": "Study of the history, languages, cultures and social processes of Asian and African countries.",
    "zh-CN": "研究亚洲和非洲国家的历史、语言、文化及社会发展。"
  },
  "Психолого-педагогическая подготовка и сопровождение образовательного процесса.": {
    "ky": "Окутуу процессине психологиялык-педагогикалык даярдык жана коштоо.",
    "en": "Psychological and pedagogical training and support for the learning process.",
    "zh-CN": "为教育教学提供心理学与教育学方面的培训和支持。"
  },
  "История и языки стран Азии и Африки": {
    "ky": "Азия жана Африка өлкөлөрүнүн тарыхы жана тилдери",
    "en": "History and Languages of Asia and Africa",
    "zh-CN": "亚洲与非洲国家的历史和语言"
  },
  "Кыргызский, русский и восточные языки по профилю": {
    "ky": "Кыргыз, орус жана багытка жараша чыгыш тилдери",
    "en": "Kyrgyz, Russian and relevant Eastern languages",
    "zh-CN": "吉尔吉斯语、俄语及相应的东方语言"
  },
  "Дипломатическая и консульская служба": {
    "ky": "Дипломатиялык жана консулдук кызмат",
    "en": "Diplomatic and Consular Service",
    "zh-CN": "外交与领事事务"
  },
  "Кыргызский, русский и иностранные языки по профилю": {
    "ky": "Кыргыз, орус жана багытка жараша чет тилдери",
    "en": "Kyrgyz, Russian and foreign languages relevant to the program",
    "zh-CN": "吉尔吉斯语、俄语及专业相关外语"
  },
  "Внешняя политика": {
    "ky": "Тышкы саясат",
    "en": "Foreign Policy",
    "zh-CN": "外交政策"
  },
  "Кыргызский, русский": {
    "ky": "Кыргыз жана орус тилдери",
    "en": "Kyrgyz and Russian",
    "zh-CN": "吉尔吉斯语和俄语"
  },
  "Информационные технологии искусственного интеллекта; информационные технологии в управлении": {
    "ky": "Жасалма интеллекттин маалыматтык технологиялары; башкаруудагы маалыматтык технологиялар",
    "en": "Artificial Intelligence Technologies; Information Technology in Management",
    "zh-CN": "人工智能信息技术；管理信息技术"
  },
  "4 года (очная)": {
    "ky": "4 жыл (күндүзгү)",
    "en": "4 years (full-time)",
    "zh-CN": "4年（全日制）"
  },
  "2 года (очная)": {
    "ky": "2 жыл (күндүзгү)",
    "en": "2 years (full-time)",
    "zh-CN": "2年（全日制）"
  },
  "4 года (очная); 5 лет (заочная с ДОТ)": {
    "ky": "4 жыл (күндүзгү); 5 жыл (сырттан, аралыктан окутуу технологиялары менен)",
    "en": "4 years (full-time); 5 years (part-time with distance learning)",
    "zh-CN": "4年（全日制）；5年（非全日制，含远程教学）"
  },
  "2 года (очная); 2,5 года (заочная с ДОТ)": {
    "ky": "2 жыл (күндүзгү); 2,5 жыл (сырттан, аралыктан окутуу технологиялары менен)",
    "en": "2 years (full-time); 2.5 years (part-time with distance learning)",
    "zh-CN": "2年（全日制）；2.5年（非全日制，含远程教学）"
  },
  "4 года": {
    "ky": "4 жыл",
    "en": "4 years",
    "zh-CN": "4年"
  },
  "3 года": {
    "ky": "3 жыл",
    "en": "3 years",
    "zh-CN": "3年"
  }
};
export function translateContent(text: string | undefined | null, locale: ContentLanguage): string {
  if (!text || locale === "ru") return text ?? "";
  return contentTranslations[text]?.[locale] ?? text;
}
export function contentHasTranslation(text: string | undefined | null, locale: ContentLanguage): boolean {
  if (!text || locale === "ru") return true;
  return Boolean(contentTranslations[text]?.[locale]);
}
