/** Draft translations for existing science pages. Russian originals remain in science-data.ts.
 * Names of journals are transliterated where necessary; no source URLs are changed.
 * Editorial sign-off is required before public launch. */
import type { Locale } from "@/lib/i18n";
import type { ScienceSection } from "@/lib/science-data";

export type ScienceDraft = { title: string; teaser: string; body: string[]; sources: string[]; sourceDescriptions?: string[] };
export const scienceUi: Record<Locale, Record<string, string>> = {
  "ru": {
    "home": "Главная",
    "science": "Наука",
    "title": "Научная деятельность",
    "intro": "Исследования, научные мероприятия, журналы и подготовка исследователей в Бишкекском государственном университете.",
    "badge": "Наука БГУ",
    "more": "Подробнее",
    "archive": "Архив научных материалов",
    "archiveText": "До полной миграции с bsu.kg раздел содержит ссылки на первоисточники. Для официального запуска проверим действующие советы, мероприятия, номера журналов и связанные файлы.",
    "overview": "Общая информация",
    "materials": "Официальные материалы",
    "sourceNote": "Материалы размещены на действующем сайте БГУ. При миграции будут сохранены ссылки на источники и проверена полнота файлов.",
    "back": "Раздел «Наука»",
    "sections": "Разделы науки",
    "legacy": "Научная лента старого сайта",
    "notice": "Переводы предварительные. Перед официальной публикацией требуется проверка БГУ."
  },
  "ky": {
    "home": "Башкы бет",
    "science": "Илим",
    "title": "Илимий ишмердүүлүк",
    "intro": "Бишкек мамлекеттик университетиндеги илимий изилдөөлөр, иш-чаралар, журналдар жана изилдөөчүлөрдү даярдоо.",
    "badge": "БМУнун илими",
    "more": "Кененирээк",
    "archive": "Илимий материалдардын архиви",
    "archiveText": "bsu.kg сайтынан толук көчүрүү аяктаганга чейин бул бөлүм баштапкы булактарга шилтемелерди камтыйт. Расмий жарыялоодон мурда иштеп жаткан кеңештерди, иш-чараларды, журналдардын сандарын жана тиркелген файлдарды текшеребиз.",
    "overview": "Жалпы маалымат",
    "materials": "Расмий материалдар",
    "sourceNote": "Материалдар БМУнун азыркы сайтында жайгашкан. Көчүрүүдө баштапкы шилтемелер сакталат жана файлдардын толуктугу текшерилет.",
    "back": "«Илим» бөлүмүнө кайтуу",
    "sections": "Илим бөлүмдөрү",
    "legacy": "Эски сайттагы илимий жаңылыктар",
    "notice": "Котормолор алдын ала даярдалган. Расмий жарыялоодон мурда БМУ тарабынан текшерилиши керек."
  },
  "en": {
    "home": "Home",
    "science": "Research",
    "title": "Research and Science",
    "intro": "Research, academic events, journals and researcher training at Bishkek State University.",
    "badge": "Research at BSU",
    "more": "Learn more",
    "archive": "Research materials archive",
    "archiveText": "Until the full migration from bsu.kg is complete, this section links to original sources. Before the official launch, active councils, events, journal issues and related files must be verified.",
    "overview": "Overview",
    "materials": "Official resources",
    "sourceNote": "These resources are hosted on the current BSU website. Source links will be preserved and file completeness checked during migration.",
    "back": "Back to Research",
    "sections": "Research sections",
    "legacy": "Research news on the old website",
    "notice": "These translations are drafts and require BSU review before official publication."
  },
  "zh-CN": {
    "home": "首页",
    "science": "科研",
    "title": "科研活动",
    "intro": "了解比什凯克国立大学的科学研究、学术活动、期刊及科研人才培养。",
    "badge": "大学科研",
    "more": "了解更多",
    "archive": "科研资料档案",
    "archiveText": "在从 bsu.kg 完成全部迁移之前，本栏目提供原始资料链接。正式上线前须核实仍在运作的委员会、活动、期刊期次及相关文件。",
    "overview": "概况",
    "materials": "官方资料",
    "sourceNote": "这些资料目前保存在大学现有网站上。迁移时将保留原始链接并核查文件是否完整。",
    "back": "返回科研栏目",
    "sections": "科研栏目",
    "legacy": "旧网站科研新闻",
    "notice": "译文为初稿，正式发布前须经大学审核。"
  }
};
export const scienceDrafts: Record<string, Partial<Record<Exclude<Locale, "ru">, ScienceDraft>>> = {
  "research": {
    "ky": {
      "title": "Илимий изилдөөлөр",
      "teaser": "Илимий-изилдөө иштерин уюштуруу, илимий кадрларды даярдоо жана кафедралардын изилдөөлөрү.",
      "body": [
        "Университеттеги илимий-изилдөө иштерин ИИРди уюштуруу жана илимий кадрларды даярдоо башкармалыгы координациялайт. Ал аспиранттарды, докторанттарды жана изденүүчүлөрдү даярдоого, илимий иш-чараларга жана изилдөөлөрдүн жыйынтыктарын тааныштырууга көмөктөшөт.",
        "Университеттин окутуучулары жана студенттери илимий иштерге катышат. Изилдөө багыттары, долбоорлор жана отчеттор баштапкы материалдар текшерилгенден кийин көчүрүлөт."
      ],
      "sources": [
        "ИИРди уюштуруу жана илимий кадрларды даярдоо башкармалыгы",
        "БМУнун илимий материалдары"
      ]
    },
    "en": {
      "title": "Scientific Research",
      "teaser": "Research coordination, training of researchers and departmental projects.",
      "body": [
        "Research at the university is coordinated by the unit responsible for organizing research and training research personnel. It supports postgraduate and doctoral training, academic events and presentation of research results.",
        "University staff and students participate in research. Specific research areas, projects and reports will be transferred once the original materials have been verified."
      ],
      "sources": [
        "Office for Research Organization and Researcher Training",
        "BSU research news"
      ]
    },
    "zh-CN": {
      "title": "科学研究",
      "teaser": "科研组织管理、科研人才培养及各院系的研究工作。",
      "body": [
        "大学的科研工作由科研组织与科研人才培养部门协调。该部门支持研究生和博士生培养、学术活动以及研究成果展示。",
        "大学教师和学生均参与科学研究。具体研究方向、项目及报告将在原始资料核实后迁移。"
      ],
      "sources": [
        "科研组织与科研人才培养部门",
        "大学科研资讯"
      ]
    }
  },
  "conferences": {
    "ky": {
      "title": "Конференциялар жана илимий иш-чаралар",
      "teaser": "Илимий конференциялар, семинарлар жана изилдөөчүлөр үчүн кулактандыруулар.",
      "body": [
        "Университет окутуучулардын, аспиранттардын, студенттердин жана чакырылган изилдөөчүлөрдүн катышуусунда илимий конференцияларды жана семинарларды өткөрөт.",
        "Алдыдагы конференциялардын календары, каттоо формалары жана архив материалдары кийин backend тутумуна кошулат. Азырынча актуалдуу даталарды жана катышуу шарттарын БМУнун расмий маалымат булагынан текшерүү керек."
      ],
      "sources": [
        "Илим жана конференциялар боюнча жаңылыктар",
        "Мисал: Scopus базасына макала даярдоо боюнча семинар"
      ]
    },
    "en": {
      "title": "Conferences and Academic Events",
      "teaser": "Research conferences, seminars and announcements for scholars.",
      "body": [
        "The university organizes academic conferences and seminars involving teaching staff, postgraduate students, students and invited researchers.",
        "An upcoming events calendar, registration forms and archives will be connected to the backend later. For now, current dates and participation requirements should be checked in BSU’s official news feed."
      ],
      "sources": [
        "Research and conference news",
        "Example: Seminar on publishing articles in Scopus"
      ]
    },
    "zh-CN": {
      "title": "学术会议与科研活动",
      "teaser": "面向研究人员的学术会议、研讨会与通知。",
      "body": [
        "大学举办学术会议和研讨会，参加者包括教师、研究生、在校学生及受邀研究人员。",
        "未来的会议日程、报名表和资料档案将接入后端系统。在此之前，请通过大学官方新闻栏目核实活动日期和参与条件。"
      ],
      "sources": [
        "科研与学术会议信息",
        "示例：Scopus 学术论文发表研讨会"
      ]
    }
  },
  "publications": {
    "ky": {
      "title": "Илимий басылмалар",
      "teaser": "БМУнун илимий журналдары, редакциялык саясаты, авторлорго талаптар жана сандардын архиви.",
      "body": [
        "БМУ «Вестник БГУ» жана «Известия БГУ» илимий журналдарын чыгарат. Расмий барактарда журналдар, редакциялык саясат жана макалаларга коюлган талаптар тууралуу маалымат берилген.",
        "Макалалардын жана файлдардын толук архивдерин авторлорун, сандарын, даталарын, метамаалыматтарын жана баштапкы URL даректерин сактоо менен каттоо жана көчүрүү керек."
      ],
      "sources": [
        "«Вестник БГУ» журналы",
        "«Известия БГУ» журналы"
      ],
      "sourceDescriptions": [
        "Басылма тууралуу маалымат жана сандардын архиви",
        "Редакциялык саясат жана авторлор үчүн материалдар"
      ]
    },
    "en": {
      "title": "Academic Publications",
      "teaser": "BSU journals, editorial policies, author guidelines and issue archives.",
      "body": [
        "BSU publishes the academic journals Vestnik BSU and Izvestiya BSU. Their official pages describe the journals, editorial policies and submission requirements.",
        "Complete article and file archives still need to be inventoried and transferred while preserving authors, issues, dates, metadata and original URLs."
      ],
      "sources": [
        "Vestnik BSU journal",
        "Izvestiya BSU journal"
      ],
      "sourceDescriptions": [
        "Journal information and issue archive",
        "Editorial policy and author resources"
      ]
    },
    "zh-CN": {
      "title": "学术出版物",
      "teaser": "大学学术期刊、编辑政策、投稿要求和往期档案。",
      "body": [
        "大学出版《比什凯克国立大学学报》（Vestnik BSU）和《比什凯克国立大学研究通报》（Izvestiya BSU）。官方页面提供期刊介绍、编辑政策和投稿要求。",
        "完整论文及文件档案尚需清点迁移，并保留作者、期次、日期、元数据及原始网址。"
      ],
      "sources": [
        "《Vestnik BSU》期刊",
        "《Izvestiya BSU》期刊"
      ],
      "sourceDescriptions": [
        "期刊介绍与往期档案",
        "编辑政策与投稿者资料"
      ]
    }
  },
  "dissertation-councils": {
    "ky": {
      "title": "Диссертациялык кеңештер",
      "teaser": "Диссертацияларды коргоо, илимий аттестация жана расмий кулактандыруулар тууралуу маалымат.",
      "body": [
        "БМУнун эски сайтында диссертацияларды алдын ала коргоо жана талкуулоо, ошондой эле илимий кадрларды даярдоо тууралуу маалыматтар жарыяланат.",
        "Иштеп жаткан диссертациялык кеңештердин тастыкталган реестри, курамы, ыйгарым укуктары, коргоо графиктери жана документтери азырынча көчүрүлө элек. Университет менен макулдашмайынча айрым кулактандырууларды кеңештердин толук тизмеси деп эсептөөгө болбойт."
      ],
      "sources": [
        "БМУнун илимий кулактандыруулары",
        "ИИРди уюштуруу башкармалыгы"
      ]
    },
    "en": {
      "title": "Dissertation Councils",
      "teaser": "Information about thesis defenses, academic certification and official announcements.",
      "body": [
        "The existing BSU website publishes announcements about preliminary thesis defenses and dissertation discussions, along with information about researcher training.",
        "A verified register of active dissertation councils, including membership, authority, defense schedules and documents, has not yet been migrated. Individual announcements should not be treated as a complete council register without university confirmation."
      ],
      "sources": [
        "BSU research announcements",
        "Research organization office"
      ]
    },
    "zh-CN": {
      "title": "学位论文答辩委员会",
      "teaser": "论文答辩、学术资格认定及官方公告信息。",
      "body": [
        "大学旧网站发布学位论文预答辩、论文讨论以及科研人才培养的相关公告。",
        "现行论文答辩委员会的核实名录、成员、职权、答辩时间表和文件尚未迁移。未经大学确认，不能将个别公告视为全部委员会名单。"
      ],
      "sources": [
        "大学科研公告",
        "科研组织部门"
      ]
    }
  }
};
export function localizedScience(section: ScienceSection, locale: Locale) {
  const translated = locale === "ru" ? undefined : scienceDrafts[section.slug]?.[locale];
  return {
    ...section,
    title: translated?.title ?? section.title,
    teaser: translated?.teaser ?? section.teaser,
    body: translated?.body ?? section.body,
    sources: section.sources.map((source, i) => ({
      ...source,
      label: translated?.sources[i] ?? source.label,
      description: translated?.sourceDescriptions?.[i] ?? source.description,
    })),
  };
}
