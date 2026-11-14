import type { Metadata } from "next";
import ContactsLocalized from "@/components/contacts/ContactsLocalized";

export const metadata: Metadata = {
  title: "Контакты | БГУ",
  description: "Адрес и контактные телефоны Бишкекского государственного университета имени К. Карасаева.",
};

export default function ContactsPage() {
  return <ContactsLocalized />;
}
