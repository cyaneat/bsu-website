import type { Locale } from "@/lib/i18n";

export type ContactsText = {
  home: string;
  title: string;
  addressTitle: string;
  address: string;
  email: string;
  advice: string;
  phones: string;
  verify: string;
  phoneLabels: string[];
};

// Labels/translations are preliminary. Original contact values come from about-data.ts.
export const contactsUi: Record<Locale, ContactsText> = {
  ru: {
    home: "Главная", title: "Контакты БГУ", addressTitle: "Адрес университета",
    address: "Кыргызская Республика, г. Бишкек, проспект Чынгыза Айтматова, 27",
    email: "Электронная почта", advice: "Перед визитом рекомендуем уточнить часы приёма по телефону.",
    phones: "Телефоны", verify: "Проверить контакты на старом сайте",
    phoneLabels: ["Приёмная ректора", "Основной контакт", "Мобильный", "Мобильный 2", "Колледж", "ИНДО"],
  },
  ky: {
    home: "Башкы бет", title: "БМУнун байланыш маалыматтары", addressTitle: "Университеттин дареги",
    address: "Кыргыз Республикасы, Бишкек шаары, Чыңгыз Айтматов проспекти, 27",
    email: "Электрондук почта", advice: "Келээрден мурун кабыл алуу убактысын телефон аркылуу тактап алыңыз.",
    phones: "Телефон номерлери", verify: "Эски сайттан байланыш маалыматтарын текшерүү",
    phoneLabels: ["Ректордун кабылдамасы", "Негизги байланыш", "Уюлдук телефон", "Уюлдук телефон 2", "Колледж", "Үзгүлтүксүз дистанттык билим берүү институту"],
  },
  en: {
    home: "Home", title: "BSU Contacts", addressTitle: "University Address",
    address: "27 Chyngyz Aitmatov Avenue, Bishkek, Kyrgyz Republic",
    email: "Email", advice: "Please confirm reception hours by phone before visiting.",
    phones: "Phone Numbers", verify: "Verify contacts on the previous website",
    phoneLabels: ["Rector's Office", "Main Contact", "Mobile", "Mobile 2", "College", "Institute of Continuing Distance Education"],
  },
  "zh-CN": {
    home: "首页", title: "大学联系方式", addressTitle: "大学地址",
    address: "吉尔吉斯共和国比什凯克市钦吉斯·艾特马托夫大道27号",
    email: "电子邮箱", advice: "来访前请通过电话确认接待时间。",
    phones: "联系电话", verify: "在原官方网站核实联系方式",
    phoneLabels: ["校长办公室", "主要联系电话", "手机", "手机 2", "学院", "继续远程教育学院"],
  },
};
