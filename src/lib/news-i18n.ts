import type { Locale } from "@/lib/i18n";
import type { NewsRecord, NewsCategory } from "@/lib/news-data";

type NewsText = { title: string; excerpt: string };
type TranslatedNews = Partial<Record<Exclude<Locale,"ru">, NewsText>>;

/** Editorial draft translations. Verify names, dates and claims before public launch. */
const translations: Record<string, TranslatedNews> = {
 "phd-defense-economics-2026": {
  ky: {title:"Экономика багыты боюнча PhD диссертацияларын коргоо",excerpt:"БМУ 580100 «Экономика» багыты боюнча докторанттардын 2026-жылдын 25–26-ноябрына белгиленген диссертация коргоолору жөнүндө жарыялады."},
  en: {title:"PhD dissertation defenses in Economics",excerpt:"BSU announced doctoral dissertation defenses in field 580100, Economics, scheduled for November 25–26, 2026."},
  "zh-CN": {title:"经济学博士论文答辩",excerpt:"大学发布通知：580100“经济学”方向的博士论文答辩计划于2026年11月25日至26日举行。"}},
 "school-teacher-seminars-2026": {
  ky:{title:"Мектеп мугалимдери үчүн семинар-тренингдер башталды",excerpt:"БМУда Бишкек шаарындагы жалпы билим берүүчү мектептердин мугалимдери үчүн семинар-тренингдер өтүүдө."},
  en:{title:"Training seminars begin for schoolteachers",excerpt:"BSU is holding training seminars for teachers from general education schools in Bishkek."},
  "zh-CN":{title:"面向中小学教师的培训研讨会启动",excerpt:"大学正在为比什凯克普通教育学校的教师举办培训研讨会。"}},
 "rector-address-september-2026": {
  ky:{title:"Окуу жылынын башталышына карата ректордун кайрылуусу",excerpt:"Расмий сайтта жаңы окуу жылынын башталышына байланыштуу окутуучуларга, кызматкерлерге жана студенттерге куттуктоо кайрылуусу жарыяланды."},
  en:{title:"Rector's message at the start of the academic year",excerpt:"The official website published a congratulatory message to faculty, staff and students marking the start of the academic year."},
  "zh-CN":{title:"校长新学年寄语",excerpt:"大学官网发布了致教师、员工和学生的新学年贺词。"}},
 "szeged-internship-2026": {
  ky:{title:"Сегед университетинин магистранттары жана докторанты БМУда стажировка өтүүдө",excerpt:"БМУ Венгриядагы Сегед университетинен төрт магистрант жана бир PhD докторанты илимий стажировкадан өтүп жатканын билдирди."},
  en:{title:"University of Szeged graduate students and doctoral researcher undertake internships at BSU",excerpt:"BSU reported research internships involving four master's students and one PhD doctoral researcher from the University of Szeged, Hungary."},
  "zh-CN":{title:"塞格德大学研究生与博士生在比什凯克国立大学实习",excerpt:"大学通报，来自匈牙利塞格德大学的四名硕士研究生和一名博士研究生正在进行科研实习。"}},
 "digital-education-china-2026": {
  ky:{title:"БМУ Кытайдагы билим берүүнү санариптештирүү тажрыйбасын үйрөнүүдө",excerpt:"Университеттин өкүлдөрү 2026-жылдын 12–21-сентябрында Кытайда өткөн билим берүү программасына катышты."},
  en:{title:"BSU studies China's experience in digital education",excerpt:"University representatives took part in an educational program in China from September 12 to 21, 2026."},
  "zh-CN":{title:"比什凯克国立大学学习中国教育数字化经验",excerpt:"大学代表参加了2026年9月12日至21日在中国举办的教育项目。"}},
 "demographic-resilience-training-2026": {
  ky:{title:"БМУнун окутуучулары демографиялык туруктуулук боюнча тренингге катышты",excerpt:"Университеттин окутуучулары 2026-жылдын 7–9-сентябрында өткөн тренингге катышты."},
  en:{title:"BSU faculty attend training on demographic resilience",excerpt:"University faculty members participated in a training event held September 7–9, 2026."},
  "zh-CN":{title:"大学教师参加人口韧性培训",excerpt:"大学教师参加了2026年9月7日至9日举行的培训活动。"}}
};

export const newsUi: Record<Locale, {
 home:string; news:string; press:string; headline:string; intro:string; search:string; category:string; all:string; found:string; none:string;
 partial:string; fullMissing:string; original:string; allNews:string; related:string; categories:Record<NewsCategory,string>;
}> = {
 ru:{home:"Главная",news:"Новости",press:"Пресс-центр",headline:"Новости и мероприятия БГУ",intro:"События университета, научная деятельность и международные проекты.",search:"Поиск по новостям...",category:"Категория",all:"Все",found:"Найдено публикаций",none:"По вашему запросу публикаций не найдено.",partial:"Предварительная подборка материалов по bsu.kg. Полные тексты и фотографии будут перенесены после редакционной проверки; данные пока не обновляются автоматически.",fullMissing:"Это краткая карточка публикации. Полный текст и медиа будут добавлены после миграции и редакционной проверки.",original:"Открыть первоисточник на сайте БГУ",allNews:"Все новости",related:"Оригинал материала",categories:{"Новости":"Новости","Наука":"Наука","Международное сотрудничество":"Международное сотрудничество","Мероприятия":"Мероприятия"}},
 ky:{home:"Башкы бет",news:"Жаңылыктар",press:"Басма сөз борбору",headline:"БМУнун жаңылыктары жана иш-чаралары",intro:"Университеттеги окуялар, илимий ишмердүүлүк жана эл аралык долбоорлор.",search:"Жаңылыктардан издөө...",category:"Категория",all:"Баары",found:"Табылган материалдар",none:"Суранычыңыз боюнча материал табылган жок.",partial:"bsu.kg сайтынан алынган алдын ала материалдар. Толук тексттер жана сүрөттөр редакциялык текшерүүдөн кийин көчүрүлөт; жаңылыктар азырынча автоматтык түрдө жаңырбайт.",fullMissing:"Бул материалдын кыскача маалыматы гана берилди. Толук текст жана сүрөттөр көчүрүү жана редакциялык текшерүүдөн кийин кошулат.",original:"БМУнун сайтындагы баштапкы булак",allNews:"Бардык жаңылыктар",related:"Булак",categories:{"Новости":"Жаңылыктар","Наука":"Илим","Международное сотрудничество":"Эл аралык кызматташтык","Мероприятия":"Иш-чаралар"}},
 en:{home:"Home",news:"News",press:"Press center",headline:"BSU News and Events",intro:"University events, research activities and international projects.",search:"Search news...",category:"Category",all:"All",found:"Articles found",none:"No articles match your search.",partial:"A preliminary selection based on bsu.kg. Full articles and photos will be migrated after editorial review; updates are not yet automatic.",fullMissing:"This is a short news summary. Full articles and media will be added after content migration and editorial review.",original:"View the original on the BSU website",allNews:"All news",related:"Original source",categories:{"Новости":"News","Наука":"Research","Международное сотрудничество":"International cooperation","Мероприятия":"Events"}},
 "zh-CN":{home:"首页",news:"新闻",press:"新闻中心",headline:"大学新闻与活动",intro:"大学动态、科研活动与国际合作项目。",search:"搜索新闻...",category:"类别",all:"全部",found:"找到的文章",none:"未找到符合条件的文章。",partial:"本栏目暂时整理自 bsu.kg。完整文章及图片将在编辑审核后迁移，目前尚未自动更新。",fullMissing:"目前仅提供新闻摘要。完整正文和图片将在内容迁移及编辑审核后补充。",original:"在大学官网查看原文",allNews:"全部新闻",related:"原始来源",categories:{"Новости":"新闻","Наука":"科研","Международное сотрудничество":"国际合作","Мероприятия":"活动"}}
};

export function localizeNews(record:NewsRecord,locale:Locale):NewsRecord {
 if(locale==="ru") return record;
 const translated=translations[record.slug]?.[locale];
 return translated?{...record,...translated}:record;
}
export function formatLocalizedNewsDate(date:string,locale:Locale){
 const localeCode:Record<Locale,string>={ru:"ru-RU",ky:"ky-KG",en:"en-US","zh-CN":"zh-CN"};
 return new Intl.DateTimeFormat(localeCode[locale],{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T12:00:00Z`));
}
